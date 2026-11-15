/* ===== Données du catalogue de cartes =====

   Pour ajouter une carte : copier un bloc { ... } dans CARTES, puis le modifier.
     - nom         : titre affiché sous la photo
     - occasion    : identifiant de l'occasion (voir OCCASIONS ci-dessous)
     - photos      : noms des fichiers, rangés dans le dossier car/
                     (la première est la photo de couverture)
     - description : texte affiché au survol et dans la fiche
     - prix, stock, lien : facultatifs, à ajouter le moment venu
                     (même fonctionnement que les bijoux)

   Nommage des photos (tout en minuscules) : car/<code>-<numéro>/<code>-<numéro><lettre>.webp
     ann = Anniversaire      fdm = Fête des Mères     nai = Naissance
     noe = Noël              nan = Nouvel An          stv = Saint-Valentin
   Exemple : car/ann-01/ann-01a.webp, ann-01b.webp, ann-01c.webp
*/

var OCCASIONS = [
  { id: 'anniversaire', nom: 'Anniversaire' },
  { id: 'fete-des-meres', nom: 'Fête des Mères' },
  { id: 'naissance', nom: 'Naissance' },
  { id: 'noel', nom: 'Noël' },
  { id: 'nouvel-an', nom: 'Nouvel An' },
  { id: 'saint-valentin', nom: 'Saint-Valentin' }
];

/* Les 3 cartes ci-dessous sont des EXEMPLES : adapte les noms, les descriptions
   et la liste des photos à tes vrais fichiers. */
var CARTES = [
  // --- CARTE-ANNIV ---
  {
    nom: "Carte Anniversaire 01",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-01/ann-01a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Anniversaire 02",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-02/ann-02a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Anniversaire 03",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-03/ann-03a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Anniversaire 04",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-04/ann-04a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Anniversaire 05",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-05/ann-05a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Anniversaire 06",
    occasion: "anniversaire",
    photos: ["carte-ann/ann-06/ann-06a.webp"],
    description: "Description à modifier"
  },

  // --- CARTE-FDM (Fête des Mères) ---
  {
    nom: "Carte Fête des Mères 01",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-01/fdm-01a.webp", "carte-fdm/fdm-01/fdm-01b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 02",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-02/fdm-02a.webp", "carte-fdm/fdm-02/fdm-02b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 03",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-03/fdm-03a.webp", "carte-fdm/fdm-03/fdm-03b.webp", "carte-fdm/fdm-03/fdm-03c.webp", "carte-fdm/fdm-03/fdm-03d.webp", "carte-fdm/fdm-03/fdm-03e.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 04",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-04/fdm-04a.webp", "carte-fdm/fdm-04/fdm-04b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 05",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-05/fdm-05a.webp", "carte-fdm/fdm-05/fdm-05b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 06",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-06/fdm-06a.webp", "carte-fdm/fdm-06/fdm-06b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Fête des Mères 07",
    occasion: "fete-des-meres",
    photos: ["carte-fdm/fdm-07/fdm-07a.webp", "carte-fdm/fdm-07/fdm-07b.webp"],
    description: "Description à modifier"
  },

  // --- CARTE-NAISSANCE ---
  {
    nom: "Carte Naissance 01",
    occasion: "naissance",
    photos: ["carte-naiss/naiss-01/naiss-01a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Naissance 02",
    occasion: "naissance",
    photos: ["carte-naiss/naiss-02/naiss-02a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Naissance 03",
    occasion: "naissance",
    photos: ["carte-naiss/naiss-03/naiss-03a.webp"],
    description: "Description à modifier"
  },

// --- CARTE-NOEL ---
 {
    nom: "Carte Noël 01",
    occasion: "noel",
    photos: ["carte-noel/noel-01/noel-01a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 02",
    occasion: "noel",
    photos: ["carte-noel/noel-02/noel-02a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 03",
    occasion: "noel",
    photos: ["carte-noel/noel-03/noel-03a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 04",
    occasion: "noel",
    photos: ["carte-noel/noel-04/noel-04a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 05",
    occasion: "noel",
    photos: ["carte-noel/noel-05/noel-05a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 06",
    occasion: "noel",
    photos: ["carte-noel/noel-06/noel-06a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 07",
    occasion: "noel",
    photos: ["carte-noel/noel-07/noel-07a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 08",
    occasion: "noel",
    photos: ["carte-noel/noel-08/noel-08a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 09",
    occasion: "noel",
    photos: ["carte-noel/noel-09/noel-09a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 10",
    occasion: "noel",
    photos: ["carte-noel/noel-10/noel-10a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 11",
    occasion: "noel",
    photos: ["carte-noel/noel-11/noel-11a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 12",
    occasion: "noel",
    photos: ["carte-noel/noel-12/noel-12a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 13",
    occasion: "noel",
    photos: ["carte-noel/noel-13/noel-13a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 14",
    occasion: "noel",
    photos: ["carte-noel/noel-14/noel-14a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 15",
    occasion: "noel",
    photos: ["carte-noel/noel-15/noel-15a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 16",
    occasion: "noel",
    photos: ["carte-noel/noel-16/noel-16a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 17",
    occasion: "noel",
    photos: ["carte-noel/noel-17/noel-17a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 18",
    occasion: "noel",
    photos: ["carte-noel/noel-18/noel-18a.webp", "carte-noel/noel-18/noel-18b.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 19",
    occasion: "noel",
    photos: ["carte-noel/noel-19/noel-19a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 20",
    occasion: "noel",
    photos: ["carte-noel/noel-20/noel-20a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 21",
    occasion: "noel",
    photos: ["carte-noel/noel-21/noel-21a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 22",
    occasion: "noel",
    photos: ["carte-noel/noel-22/noel-22a.webp", "carte-noel/noel-22/noel-22b.webp", "carte-noel/noel-22/noel-22c.webp", "carte-noel/noel-22/noel-22d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 23",
    occasion: "noel",
    photos: ["carte-noel/noel-23/noel-23a.webp", "carte-noel/noel-23/noel-23b.webp", "carte-noel/noel-23/noel-23c.webp", "carte-noel/noel-23/noel-23d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 24",
    occasion: "noel",
    photos: ["carte-noel/noel-24/noel-24a.webp", "carte-noel/noel-24/noel-24b.webp", "carte-noel/noel-24/noel-24c.webp", "carte-noel/noel-24/noel-24d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 25",
    occasion: "noel",
    photos: ["carte-noel/noel-25/noel-25a.webp", "carte-noel/noel-25/noel-25b.webp", "carte-noel/noel-25/noel-25c.webp", "carte-noel/noel-25/noel-25d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 26",
    occasion: "noel",
    photos: ["carte-noel/noel-26/noel-26a.webp", "carte-noel/noel-26/noel-26b.webp", "carte-noel/noel-26/noel-26c.webp", "carte-noel/noel-26/noel-26d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Noël 27",
    occasion: "noel",
    photos: ["carte-noel/noel-27/noel-27a.webp", "carte-noel/noel-27/noel-27b.webp", "carte-noel/noel-27/noel-27c.webp", "carte-noel/noel-27/noel-27d.webp"],
    description: "Description à modifier"
  },

  // --- CARTE-STVAL (Saint-Valentin) ---
  {
    nom: "Carte Saint-Valentin 01",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-01/stval-01a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 02",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-02/stval-02a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 03",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-03/stval-03a.webp", "carte-stval/stval-03/stval-03b.webp", "carte-stval/stval-03/stval-03c.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 04",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-04/stval-04a.webp", "carte-stval/stval-04/stval-04b.webp", "carte-stval/stval-04/stval-04c.webp", "carte-stval/stval-04/stval-04d.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 05",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-05/stval-05a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 06",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-06/stval-06a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 07",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-07/stval-07a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 08",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-08/stval-08a.webp"],
    description: "Description à modifier"
  },
  {
    nom: "Carte Saint-Valentin 09",
    occasion: "saint-valentin",
    photos: ["carte-stval/stval-09/stval-09a.webp"],
    description: "Description à modifier"
  }
];
