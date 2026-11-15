/* ===== Petit outil : créer un élément HTML ===== */
function el(tag, classe, texte) {
  var e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texte) e.textContent = texte;
  return e;
}

/* ===== Diaporama de photos (une piste, des flèches, des points) ===== */
function initDiaporama(d) {
  var piste = d.querySelector('.diaporama-piste');
  var photos = piste.querySelectorAll('img');
  if (photos.length < 2) return;

  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function courante() {
    return Math.round(piste.scrollLeft / piste.clientWidth);
  }

  function aller(n) {
    piste.scrollTo({ left: n * piste.clientWidth, behavior: reduit ? 'auto' : 'smooth' });
  }

  d.querySelector('.prec').addEventListener('click', function () {
    aller(Math.max(0, courante() - 1));
  });

  d.querySelector('.suiv').addEventListener('click', function () {
    aller(Math.min(photos.length - 1, courante() + 1));
  });

  var points = d.querySelector('.diaporama-points');
  photos.forEach(function (photo, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Photo ' + (i + 1) + ' sur ' + photos.length);
    b.addEventListener('click', function () { aller(i); });
    points.appendChild(b);
  });

  function majPoints() {
    var c = courante();
    points.querySelectorAll('button').forEach(function (b, i) {
      b.classList.toggle('courant', i === c);
    });
  }

  piste.addEventListener('scroll', majPoints, { passive: true });
  majPoints();
}

document.querySelectorAll('.diaporama').forEach(initDiaporama);

/* ===== Catalogue des bijoux (page bijoux.html) ===== */
function initCatalogue() {
  var grille = document.getElementById('grille');
  var fiche = document.getElementById('fiche');
  if (!grille || !fiche || typeof BIJOUX === 'undefined') return;

  var compteur = document.getElementById('compteur');
  var aucun = document.getElementById('aucun');
  var contenu = fiche.querySelector('.fiche-contenu');
  var etat = { fee: '', type: '' };
  var cartes = [];

  function trouver(liste, id) {
    return liste.filter(function (x) { return x.id === id; })[0];
  }

  function formatPrix(b) {
    return b.prix + '\u00a0€';
  }

  function epuise(b) {
    return b.stock !== undefined && b.stock <= 0;
  }

  // chaque chemin de photo est relatif au dossier bij/
  function photosDe(b) {
    return b.photos.map(function (fichier, i) {
      return {
        src: 'bij/' + fichier,
        alt: b.nom + (b.photos.length > 1 ? ', photo ' + (i + 1) + ' sur ' + b.photos.length : '')
      };
    });
  }

  /* --- filtres --- */
  function creerBoutons(conteneur, liste, libelleTous, avecCouleur) {
    var cle = conteneur.dataset.cle;
    [{ id: '', nom: libelleTous }].concat(liste).forEach(function (o) {
      var texte = o.element ? o.nom + ' · ' + o.element : o.nom;
      var b = el('button', 'chip' + (avecCouleur && o.id ? ' fee-' + o.id : ''), texte);
      b.type = 'button';
      b.dataset.valeur = o.id;
      b.addEventListener('click', function () {
        etat[cle] = o.id;
        appliquer();
      });
      conteneur.appendChild(b);
    });
  }

  function lireAdresse() {
    // s'il y a une ancre (clic dans le menu), on ignore l'ancien filtre de l'adresse
    var p = new URLSearchParams(window.location.hash ? '' : window.location.search);
    var ancre = window.location.hash.slice(1);
    if (ancre === 'boucles-d-oreilles') ancre = 'boucles'; // l'ancre du menu
    var fee = p.get('fee') || ancre;
    if (trouver(FEES, fee)) etat.fee = fee;
    var type = p.get('type') || ancre;
    if (trouver(TYPES, type)) etat.type = type;
  }

  function majAdresse() {
    var p = new URLSearchParams();
    if (etat.fee) p.set('fee', etat.fee);
    if (etat.type) p.set('type', etat.type);
    var texte = p.toString();
    try {
      history.replaceState(null, '', window.location.pathname + (texte ? '?' + texte : ''));
    } catch (e) { /* page ouverte en local : on ignore */ }
  }

  function appliquer() {
    var n = 0;
    cartes.forEach(function (c) {
      var visible = (!etat.fee || c.bijou.fee === etat.fee) &&
        (!etat.type || c.bijou.type === etat.type);
      c.element.hidden = !visible;
      if (visible) n++;
    });
    document.querySelectorAll('.chip').forEach(function (b) {
      var cle = b.parentNode.dataset.cle;
      b.setAttribute('aria-pressed', String(etat[cle] === b.dataset.valeur));
    });
    compteur.textContent = n + (n > 1 ? ' bijoux' : ' bijou');

    // fée sans aucun bijou pour l'instant : message d'attente plutôt qu'un "aucun résultat"
    var feeVide = etat.fee && !cartes.some(function (c) { return c.bijou.fee === etat.fee; });
    aucun.textContent = feeVide
      ? "L'atelier de " + trouver(FEES, etat.fee).nom + " prépare ses premières créations, revenez bientôt !"
      : 'Aucun bijou ne correspond à ce choix.';
    aucun.hidden = n !== 0;
    majAdresse();
  }

  /* --- fiche détaillée (fenêtre avec diaporama) --- */
  function bouton(classe, libelle, caractere) {
    var b = el('button', 'diaporama-btn ' + classe, caractere);
    b.type = 'button';
    b.setAttribute('aria-label', libelle);
    return b;
  }

  function ouvrirFiche(b) {
    var photos = photosDe(b);
    var fee = trouver(FEES, b.fee);
    var type = trouver(TYPES, b.type);

    contenu.className = 'fiche-contenu fee-' + b.fee;
    contenu.textContent = '';

    var diapo = el('div', 'diaporama');
    var piste = el('div', 'diaporama-piste');
    piste.tabIndex = 0;
    piste.setAttribute('aria-label', 'Photos : ' + b.nom);
    photos.forEach(function (p) {
      var img = document.createElement('img');
      img.src = p.src;
      img.alt = p.alt;
      piste.appendChild(img);
    });
    diapo.appendChild(piste);
    diapo.appendChild(bouton('prec', 'Photo précédente', '‹'));
    diapo.appendChild(bouton('suiv', 'Photo suivante', '›'));
    diapo.appendChild(el('div', 'diaporama-points'));

    var texte = el('div', 'fiche-texte');
    texte.appendChild(el('p', 'fiche-fee', fee.nom + ' · ' + type.nom));
    var titre = el('h3', '', b.nom);
    titre.id = 'fiche-titre';
    texte.appendChild(titre);
    texte.appendChild(el('p', '', b.description));
    if (b.matiere) texte.appendChild(el('p', 'fiche-matiere', 'Matière : ' + b.matiere));
    texte.appendChild(el('p', 'fiche-matiere', 'Apprêts (fermoirs, anneaux, crochets) : acier inoxydable'));
    if (b.prix !== undefined) texte.appendChild(el('p', 'fiche-prix', formatPrix(b)));
    if (epuise(b)) texte.appendChild(el('p', 'fiche-epuise', 'Épuisé : cette pièce unique a trouvé preneur.'));
    if (b.lien && !epuise(b)) {
      var achat = el('a', 'bouton', 'Acheter');
      achat.href = b.lien;
      texte.appendChild(achat);
    }

    contenu.appendChild(diapo);
    contenu.appendChild(texte);
    fiche.showModal();      // d'abord ouvrir : le diaporama a besoin des vraies largeurs
    initDiaporama(diapo);
  }

  fiche.querySelector('.fiche-fermer').addEventListener('click', function () {
    fiche.close();
  });

  // un clic sur le fond sombre ferme aussi la fiche
  fiche.addEventListener('click', function (e) {
    if (e.target === fiche) fiche.close();
  });

  /* --- construction de la grille --- */
  BIJOUX.forEach(function (b) {
    var photos = photosDe(b);
    var carte = el('article', 'bijou-carte fee-' + b.fee);

    var ouvrir = el('button', 'bijou-ouvrir');
    ouvrir.type = 'button';
    ouvrir.setAttribute('aria-label', 'Voir ' + b.nom);

    var cadre = el('span', 'bijou-photo');
    var img = document.createElement('img');
    img.src = photos[0].src;
    img.alt = photos[0].alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    cadre.appendChild(img);
    if (photos.length > 1) cadre.appendChild(el('span', 'bijou-nb', photos.length + ' photos'));
    if (epuise(b)) {
      carte.classList.add('epuise');
      cadre.appendChild(el('span', 'bijou-epuise', 'Épuisé'));
    }
    var survol = el('span', 'bijou-survol', b.description);
    survol.setAttribute('aria-hidden', 'true');
    cadre.appendChild(survol);

    ouvrir.appendChild(cadre);
    ouvrir.appendChild(el('span', 'bijou-nom', b.nom));
    if (b.prix !== undefined) ouvrir.appendChild(el('span', 'bijou-prix', formatPrix(b)));
    ouvrir.addEventListener('click', function () { ouvrirFiche(b); });

    carte.appendChild(ouvrir);
    grille.appendChild(carte);
    cartes.push({ bijou: b, element: carte });
  });

  creerBoutons(document.getElementById('filtre-fee'), FEES, 'Toutes', true);
  creerBoutons(document.getElementById('filtre-type'), TYPES, 'Tous', false);
  lireAdresse();
  appliquer();

  // clic sur un lien du menu (bijoux.html#azurine) alors qu'on est déjà sur la page
  window.addEventListener('hashchange', function () {
    etat.fee = '';
    etat.type = '';
    lireAdresse();
    appliquer();
  });
}

initCatalogue();

/* ===== Menu déroulant : s'ouvre au survol, se referme quand la souris part ===== */
var menus = document.querySelectorAll('nav details');
var avecSouris = window.matchMedia('(hover: hover)').matches;

function fermerTout(sauf) {
  menus.forEach(function (m) {
    if (m !== sauf) m.removeAttribute('open');
  });
}

menus.forEach(function (menu) {
  var minuterie;
  var titre = menu.querySelector('summary');

  if (avecSouris) {
    menu.addEventListener('mouseenter', function () {
      clearTimeout(minuterie);
      fermerTout(menu);
      menu.setAttribute('open', '');
    });

    // petit délai : le temps de traverser l'espace entre le bouton et le sous-menu
    menu.addEventListener('mouseleave', function () {
      minuterie = setTimeout(function () {
        menu.removeAttribute('open');
      }, 250);
    });

    // un clic de souris ne referme pas le menu déjà ouvert au survol
    // (le clavier garde son comportement : Entrée ou Espace ouvre et ferme)
    titre.addEventListener('click', function (e) {
      if (e.detail > 0) e.preventDefault();
    });
  }
});

// clic ailleurs ou touche Échap : tout se referme
document.addEventListener('click', function (e) {
  menus.forEach(function (m) {
    if (!m.contains(e.target)) m.removeAttribute('open');
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fermerTout();
});