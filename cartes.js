/* ===== Catalogue des cartes (page cartes.html) =====
   Utilise el() et initDiaporama() de script.js, chargé avant ce fichier. */
(function () {
  var grille = document.getElementById('grille-cartes');
  var fiche = document.getElementById('fiche-carte');
  if (!grille || !fiche || typeof CARTES === 'undefined') return;

  var compteur = document.getElementById('compteur');
  var aucun = document.getElementById('aucun');
  var contenu = fiche.querySelector('.fiche-contenu');
  var etat = { occasion: '' };
  var vignettes = [];

  function trouver(liste, id) {
    return liste.filter(function (x) { return x.id === id; })[0];
  }

  function formatPrix(c) {
    return c.prix + '\u00a0€';
  }

  function epuise(c) {
    return c.stock !== undefined && c.stock <= 0;
  }

  // chaque chemin de photo est relatif au dossier car/
  function photosDe(c) {
    return c.photos.map(function (fichier, i) {
      return {
        src: 'car/' + fichier,
        alt: c.nom + (c.photos.length > 1 ? ', photo ' + (i + 1) + ' sur ' + c.photos.length : '')
      };
    });
  }

  /* --- filtre par occasion --- */
  function creerBoutons(conteneur) {
    var cle = conteneur.dataset.cle;
    [{ id: '', nom: 'Toutes' }].concat(OCCASIONS).forEach(function (o) {
      var b = el('button', 'chip', o.nom);
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
    var occasion = p.get('occasion') || window.location.hash.slice(1);
    if (trouver(OCCASIONS, occasion)) etat.occasion = occasion;
  }

  function majAdresse() {
    var texte = etat.occasion ? '?occasion=' + etat.occasion : '';
    try {
      history.replaceState(null, '', window.location.pathname + texte);
    } catch (e) { /* page ouverte en local : on ignore */ }
  }

  function appliquer() {
    var n = 0;
    vignettes.forEach(function (v) {
      var visible = !etat.occasion || v.carte.occasion === etat.occasion;
      v.element.hidden = !visible;
      if (visible) n++;
    });
    document.querySelectorAll('#filtre-occasion .chip').forEach(function (b) {
      b.setAttribute('aria-pressed', String(etat.occasion === b.dataset.valeur));
    });
    compteur.textContent = n + (n > 1 ? ' cartes' : ' carte');

    // occasion sans aucune carte pour l'instant : message d'attente
    var vide = etat.occasion && !vignettes.some(function (v) { return v.carte.occasion === etat.occasion; });
    aucun.textContent = vide
      ? 'Les cartes de cette occasion sont en préparation, revenez bientôt !'
      : 'Aucune carte ne correspond à ce choix.';
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

  function ouvrirFiche(c) {
    var photos = photosDe(c);
    var occasion = trouver(OCCASIONS, c.occasion);

    contenu.textContent = '';

    var diapo = el('div', 'diaporama');
    var piste = el('div', 'diaporama-piste');
    piste.tabIndex = 0;
    piste.setAttribute('aria-label', 'Photos : ' + c.nom);
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
    texte.appendChild(el('p', 'fiche-fee', occasion.nom));
    var titre = el('h3', '', c.nom);
    titre.id = 'fiche-titre';
    texte.appendChild(titre);
    texte.appendChild(el('p', '', c.description));
    if (c.prix !== undefined) texte.appendChild(el('p', 'fiche-prix', formatPrix(c)));
    if (epuise(c)) texte.appendChild(el('p', 'fiche-epuise', 'Épuisé : cette carte unique a trouvé preneur.'));
    if (c.lien && !epuise(c)) {
      var achat = el('a', 'bouton', 'Acheter');
      achat.href = c.lien;
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
  CARTES.forEach(function (c) {
    var photos = photosDe(c);
    var vignette = el('article', 'bijou-carte');

    var ouvrir = el('button', 'bijou-ouvrir');
    ouvrir.type = 'button';
    ouvrir.setAttribute('aria-label', 'Voir ' + c.nom);

    var cadre = el('span', 'bijou-photo');
    var img = document.createElement('img');
    img.src = photos[0].src;
    img.alt = photos[0].alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    cadre.appendChild(img);
    if (photos.length > 1) cadre.appendChild(el('span', 'bijou-nb', photos.length + ' photos'));
    if (epuise(c)) {
      vignette.classList.add('epuise');
      cadre.appendChild(el('span', 'bijou-epuise', 'Épuisé'));
    }
    var survol = el('span', 'bijou-survol', c.description);
    survol.setAttribute('aria-hidden', 'true');
    cadre.appendChild(survol);

    ouvrir.appendChild(cadre);
    ouvrir.appendChild(el('span', 'bijou-nom', c.nom));
    if (c.prix !== undefined) ouvrir.appendChild(el('span', 'bijou-prix', formatPrix(c)));
    ouvrir.addEventListener('click', function () { ouvrirFiche(c); });

    vignette.appendChild(ouvrir);
    grille.appendChild(vignette);
    vignettes.push({ carte: c, element: vignette });
  });

  creerBoutons(document.getElementById('filtre-occasion'));
  lireAdresse();
  appliquer();

  // clic sur un lien du menu (cartes.html#noel) alors qu'on est déjà sur la page
  window.addEventListener('hashchange', function () {
    etat.occasion = '';
    lireAdresse();
    appliquer();
  });
})();
