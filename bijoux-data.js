/* ===== Données du catalogue de bijoux =====

   Pour ajouter un bijou : copier un bloc { ... } dans BIJOUX, puis le modifier.
     - nom         : titre affiché sous la photo
     - fee         : identifiant de la fée (voir FEES ci-dessous)
     - type        : identifiant du type (voir TYPES ci-dessous)
     - prix        : prix en euros (affiché sous le nom)
     - stock       : nombre d'exemplaires ; 0 = badge « Épuisé »
     - matiere     : facultatif, ex. 'résine' (affiché dans la fiche : « Matière : … »)
     - photos      : noms des fichiers, rangés dans le dossier bij/
                     (la première est la photo de couverture)
     - description : texte affiché au survol et dans la fiche
     - lien        : facultatif, lien Stripe (bouton « Acheter »), à ajouter plus tard
*/

var FEES = [
  { id: 'pyrelia', nom: 'Pyrélia', element: 'Feu' },
  { id: 'azurine', nom: 'Azurine', element: 'Eau' },
  { id: 'sylvae', nom: 'Sylvaë', element: 'Nature' },
  { id: 'aurelya', nom: 'Aurélya', element: 'Air' },
  { id: 'noctelya', nom: 'Noctelya', element: 'Ombre' }
];

var TYPES = [
  { id: 'colliers', nom: 'Colliers' },
  { id: 'boucles', nom: "Boucles d'oreilles" },
  { id: 'porte-cles', nom: 'Porte-clés' },
  { id: 'marque-pages', nom: 'Marque-pages' }
];

var BIJOUX = [
  {
    nom: "Boucles d'oreilles Éclat d'Aurore",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-01/AUR-BO-01A.webp", "AUR-BO-01/AUR-BO-01B.webp", "AUR-BO-01/AUR-BO-01C.webp", "AUR-BO-01/AUR-BO-01D.webp", "AUR-BO-01/AUR-BO-01E.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Souffle d'Athanor",
    fee: 'aurelya',
    type: 'boucles',
    prix: 15,
    stock: 2,
    photos: ["AUR-BO-02/AUR-BO-02A.webp", "AUR-BO-02/AUR-BO-02B.webp", "AUR-BO-02/AUR-BO-02C.webp", "AUR-BO-02/AUR-BO-02D.webp", "AUR-BO-02/AUR-BO-02E.webp", "AUR-BO-02/AUR-BO-02F.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Vol de Plume",
    fee: 'aurelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AUR-BO-03/AUR-BO-03A.webp", "AUR-BO-03/AUR-BO-03B.webp", "AUR-BO-03/AUR-BO-03C.webp", "AUR-BO-03/AUR-BO-03D.webp", "AUR-BO-03/AUR-BO-03E.webp", "AUR-BO-03/AUR-BO-03F.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Nuage de Soie",
    fee: 'aurelya',
    type: 'boucles',
    prix: 12,
    stock: 1,
    matiere: "résine",
    photos: ["AUR-BO-04/AUR-BO-04A.webp", "AUR-BO-04/AUR-BO-04B.webp", "AUR-BO-04/AUR-BO-04C.webp", "AUR-BO-04/AUR-BO-04D.webp", "AUR-BO-04/AUR-BO-04E.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Brise Céleste",
    fee: 'aurelya',
    type: 'boucles',
    prix: 12,
    stock: 1,
    matiere: "résine",
    photos: ["AUR-BO-05/AUR-BO-05A.webp", "AUR-BO-05/AUR-BO-05B.webp", "AUR-BO-05/AUR-BO-05C.webp", "AUR-BO-05/AUR-BO-05D.webp", "AUR-BO-05/AUR-BO-05E.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Murmure des Vents",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-06/AUR-BO-06A.webp", "AUR-BO-06/AUR-BO-06B.webp", "AUR-BO-06/AUR-BO-06C.webp", "AUR-BO-06/AUR-BO-06D.webp", "AUR-BO-06/AUR-BO-06E.webp", "AUR-BO-06/AUR-BO-06F.webp", "AUR-BO-06/AUR-BO-06G.webp", "AUR-BO-06/AUR-BO-06H.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Voile d'Or",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-07/AUR-BO-07A.webp", "AUR-BO-07/AUR-BO-07B.webp", "AUR-BO-07/AUR-BO-07C.webp", "AUR-BO-07/AUR-BO-07D.webp", "AUR-BO-07/AUR-BO-07E.webp", "AUR-BO-07/AUR-BO-07F.webp", "AUR-BO-07/AUR-BO-07G.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Mirage d'Été",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-08/AUR-BO-08A.webp", "AUR-BO-08/AUR-BO-08B.webp", "AUR-BO-08/AUR-BO-08C.webp", "AUR-BO-08/AUR-BO-08D.webp", "AUR-BO-08/AUR-BO-08E.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Brume d'Éther",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-09/AUR-BO-09A.webp", "AUR-BO-09/AUR-BO-09B.webp", "AUR-BO-09/AUR-BO-09C.webp", "AUR-BO-09/AUR-BO-09D.webp", "AUR-BO-09/AUR-BO-09E.webp", "AUR-BO-09/AUR-BO-09F.webp", "AUR-BO-09/AUR-BO-09G.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Écailles de Soleil",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-10/AUR-BO-10A.webp", "AUR-BO-10/AUR-BO-10B.webp", "AUR-BO-10/AUR-BO-10C.webp", "AUR-BO-10/AUR-BO-10D.webp", "AUR-BO-10/AUR-BO-10E.webp", "AUR-BO-10/AUR-BO-10F.webp", "AUR-BO-10/AUR-BO-10G.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Pluie d'Or",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-11/AUR-BO-11A.webp", "AUR-BO-11/AUR-BO-11B.webp", "AUR-BO-11/AUR-BO-11C.webp", "AUR-BO-11/AUR-BO-11D.webp", "AUR-BO-11/AUR-BO-11E.webp", "AUR-BO-11/AUR-BO-11F.webp", "AUR-BO-11/AUR-BO-11G.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Voile de Soie",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-12/AUR-BO-12A.webp", "AUR-BO-12/AUR-BO-12B.webp", "AUR-BO-12/AUR-BO-12C.webp", "AUR-BO-12/AUR-BO-12D.webp", "AUR-BO-12/AUR-BO-12E.webp", "AUR-BO-12/AUR-BO-12F.webp", "AUR-BO-12/AUR-BO-12G.webp", "AUR-BO-12/AUR-BO-12H.webp", "AUR-BO-12/AUR-BO-12I.webp", "AUR-BO-12/AUR-BO-12J.webp", "AUR-BO-12/AUR-BO-12K.webp", "AUR-BO-12/AUR-BO-12L.webp", "AUR-BO-12/AUR-BO-12M.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Zéphyr Enchanté",
    fee: 'aurelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AUR-BO-13/AUR-BO-13A.webp", "AUR-BO-13/AUR-BO-13B.webp", "AUR-BO-13/AUR-BO-13C.webp", "AUR-BO-13/AUR-BO-13D.webp", "AUR-BO-13/AUR-BO-13E.webp", "AUR-BO-13/AUR-BO-13F.webp", "AUR-BO-13/AUR-BO-13G.webp", "AUR-BO-13/AUR-BO-13H.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Pendentif Vol d'Aurélya",
    fee: 'aurelya',
    type: 'colliers',
    prix: 25,
    stock: 1,
    photos: ["AUR-COL-01/AUR-COL-01A.webp", "AUR-COL-01/AUR-COL-01B.webp", "AUR-COL-01/AUR-COL-01C.webp", "AUR-COL-01/AUR-COL-01D.webp", "AUR-COL-01/AUR-COL-01E.webp"],
    description: "Un bijou délicat et aérien aux nuances douces et célestes, inspiré par les brises légères et le souffle magique d'Aurélya."
  },
  {
    nom: "Boucles d'oreilles Larme d'Océan",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-01/AZU-BO-01A.webp", "AZU-BO-01/AZU-BO-01B.webp", "AZU-BO-01/AZU-BO-01C.webp", "AZU-BO-01/AZU-BO-01D.webp", "AZU-BO-01/AZU-BO-01E.webp", "AZU-BO-01/AZU-BO-01F.webp", "AZU-BO-01/AZU-BO-01G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Onde Marine",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-02/AZU-BO-02A.webp", "AZU-BO-02/AZU-BO-02B.webp", "AZU-BO-02/AZU-BO-02C.webp", "AZU-BO-02/AZU-BO-02D.webp", "AZU-BO-02/AZU-BO-02E.webp", "AZU-BO-02/AZU-BO-02F.webp", "AZU-BO-02/AZU-BO-02G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Reflet d'Azur",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-03/AZU-BO-03A.webp", "AZU-BO-03/AZU-BO-03B.webp", "AZU-BO-03/AZU-BO-03C.webp", "AZU-BO-03/AZU-BO-03D.webp", "AZU-BO-03/AZU-BO-03E.webp", "AZU-BO-03/AZU-BO-03F.webp", "AZU-BO-03/AZU-BO-03G.webp", "AZU-BO-03/AZU-BO-03H.webp", "AZU-BO-03/AZU-BO-03I.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Écume de Mer",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-04/AZU-BO-04A.webp", "AZU-BO-04/AZU-BO-04B.webp", "AZU-BO-04/AZU-BO-04C.webp", "AZU-BO-04/AZU-BO-04D.webp", "AZU-BO-04/AZU-BO-04E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Goutte d'Azur",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-05/AZU-BO-05A.webp", "AZU-BO-05/AZU-BO-05B.webp", "AZU-BO-05/AZU-BO-05C.webp", "AZU-BO-05/AZU-BO-05D.webp", "AZU-BO-05/AZU-BO-05E.webp", "AZU-BO-05/AZU-BO-05F.webp", "AZU-BO-05/AZU-BO-05G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Ruisseau Cristal",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-06/AZU-BO-06A.webp", "AZU-BO-06/AZU-BO-06B.webp", "AZU-BO-06/AZU-BO-06C.webp", "AZU-BO-06/AZU-BO-06D.webp", "AZU-BO-06/AZU-BO-06E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Cascade Féérique",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-07/AZU-BO-07A.webp", "AZU-BO-07/AZU-BO-07B.webp", "AZU-BO-07/AZU-BO-07C.webp", "AZU-BO-07/AZU-BO-07D.webp", "AZU-BO-07/AZU-BO-07E.webp", "AZU-BO-07/AZU-BO-07F.webp", "AZU-BO-07/AZU-BO-07G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Murmure d'Eau",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-08/AZU-BO-08A.webp", "AZU-BO-08/AZU-BO-08B.webp", "AZU-BO-08/AZU-BO-08C.webp", "AZU-BO-08/AZU-BO-08D.webp", "AZU-BO-08/AZU-BO-08E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Onde Céleste",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-09/AZU-BO-09A.webp", "AZU-BO-09/AZU-BO-09B.webp", "AZU-BO-09/AZU-BO-09C.webp", "AZU-BO-09/AZU-BO-09D.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Neige d'Amour",
    fee: 'azurine',
    type: 'boucles',
    prix: 12,
    stock: 1,
    matiere: "résine",
    photos: ["AZU-BO-10/AZU-BO-10A.webp", "AZU-BO-10/AZU-BO-10B.webp", "AZU-BO-10/AZU-BO-10C.webp", "AZU-BO-10/AZU-BO-10D.webp", "AZU-BO-10/AZU-BO-10E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Reflet de Glace",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-11/AZU-BO-11A.webp", "AZU-BO-11/AZU-BO-11B.webp", "AZU-BO-11/AZU-BO-11C.webp", "AZU-BO-11/AZU-BO-11D.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Éclat de Givre",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-12/AZU-BO-12A.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Marée d'Azur",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-13/AZU-BO-13A.webp", "AZU-BO-13/AZU-BO-13B.webp", "AZU-BO-13/AZU-BO-13C.webp", "AZU-BO-13/AZU-BO-13D.webp", "AZU-BO-13/AZU-BO-13E.webp", "AZU-BO-13/AZU-BO-13F.webp", "AZU-BO-13/AZU-BO-13G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Souffle Marin",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-14/AZU-BO-14A.webp", "AZU-BO-14/AZU-BO-14B.webp", "AZU-BO-14/AZU-BO-14C.webp", "AZU-BO-14/AZU-BO-14D.webp", "AZU-BO-14/AZU-BO-14E.webp", "AZU-BO-14/AZU-BO-14F.webp", "AZU-BO-14/AZU-BO-14G.webp", "AZU-BO-14/AZU-BO-14H.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Source Pure",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-15/AZU-BO-15A.webp", "AZU-BO-15/AZU-BO-15B.webp", "AZU-BO-15/AZU-BO-15C.webp", "AZU-BO-15/AZU-BO-15D.webp", "AZU-BO-15/AZU-BO-15E.webp", "AZU-BO-15/AZU-BO-15F.webp", "AZU-BO-15/AZU-BO-15G.webp", "AZU-BO-15/AZU-BO-15H.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Océan Profond",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-16/AZU-BO-16A.webp", "AZU-BO-16/AZU-BO-16B.webp", "AZU-BO-16/AZU-BO-16C.webp", "AZU-BO-16/AZU-BO-16D.webp", "AZU-BO-16/AZU-BO-16E.webp", "AZU-BO-16/AZU-BO-16F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Douce Vague",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-17/AZU-BO-17A.webp", "AZU-BO-17/AZU-BO-17B.webp", "AZU-BO-17/AZU-BO-17C.webp", "AZU-BO-17/AZU-BO-17D.webp", "AZU-BO-17/AZU-BO-17E.webp", "AZU-BO-17/AZU-BO-17F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Goutte d'Océan",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-18/AZU-BO-18A.webp", "AZU-BO-18/AZU-BO-18B.webp", "AZU-BO-18/AZU-BO-18C.webp", "AZU-BO-18/AZU-BO-18D.webp", "AZU-BO-18/AZU-BO-18E.webp", "AZU-BO-18/AZU-BO-18F.webp", "AZU-BO-18/AZU-BO-18G.webp", "AZU-BO-18/AZU-BO-18H.webp", "AZU-BO-18/AZU-BO-18I.webp", "AZU-BO-18/AZU-BO-18J.webp", "AZU-BO-18/AZU-BO-18K.webp", "AZU-BO-18/AZU-BO-18L.webp", "AZU-BO-18/AZU-BO-18M.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Lueur Aquatique",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-19/AZU-BO-19A.webp", "AZU-BO-19/AZU-BO-19B.webp", "AZU-BO-19/AZU-BO-19C.webp", "AZU-BO-19/AZU-BO-19D.webp", "AZU-BO-19/AZU-BO-19E.webp", "AZU-BO-19/AZU-BO-19F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Nymphe des Eaux",
    fee: 'azurine',
    type: 'boucles',
    prix: 24,
    stock: 1,
    photos: ["AZU-BO-20/AZU-BO-20A.webp", "AZU-BO-20/AZU-BO-20B.webp", "AZU-BO-20/AZU-BO-20C.webp", "AZU-BO-20/AZU-BO-20D.webp", "AZU-BO-20/AZU-BO-20E.webp", "AZU-BO-20/AZU-BO-20F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Tourbillon d'Azur",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-21/AZU-BO-21A.webp", "AZU-BO-21/AZU-BO-21B.webp", "AZU-BO-21/AZU-BO-21C.webp", "AZU-BO-21/AZU-BO-21D.webp", "AZU-BO-21/AZU-BO-21E.webp", "AZU-BO-21/AZU-BO-21F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Aile d'Améthyste",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-22/AZU-BO-22A.webp", "AZU-BO-22/AZU-BO-22B.webp", "AZU-BO-22/AZU-BO-22C.webp", "AZU-BO-22/AZU-BO-22D.webp", "AZU-BO-22/AZU-BO-22E.webp", "AZU-BO-22/AZU-BO-22F.webp", "AZU-BO-22/AZU-BO-22G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Bain de Lune",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-23/AZU-BO-23A.webp", "AZU-BO-23/AZU-BO-23B.webp", "AZU-BO-23/AZU-BO-23C.webp", "AZU-BO-23/AZU-BO-23D.webp", "AZU-BO-23/AZU-BO-23E.webp", "AZU-BO-23/AZU-BO-23F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Récif Arc-en-Ciel",
    fee: 'azurine',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["AZU-BO-24/AZU-BO-24A.webp", "AZU-BO-24/AZU-BO-24B.webp", "AZU-BO-24/AZU-BO-24C.webp", "AZU-BO-24/AZU-BO-24D.webp", "AZU-BO-24/AZU-BO-24E.webp", "AZU-BO-24/AZU-BO-24F.webp", "AZU-BO-24/AZU-BO-24G.webp", "AZU-BO-24/AZU-BO-24H.webp", "AZU-BO-24/AZU-BO-24I.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Reflet de Lagon",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-25/AZU-BO-25A.webp", "AZU-BO-25/AZU-BO-25B.webp", "AZU-BO-25/AZU-BO-25C.webp", "AZU-BO-25/AZU-BO-25D.webp", "AZU-BO-25/AZU-BO-25E.webp", "AZU-BO-25/AZU-BO-25F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Météore Bleuté",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-26/AZU-BO-26A.webp", "AZU-BO-26/AZU-BO-26B.webp", "AZU-BO-26/AZU-BO-26C.webp", "AZU-BO-26/AZU-BO-26D.webp", "AZU-BO-26/AZU-BO-26E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Opale des Brumes",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-27/AZU-BO-27A.webp", "AZU-BO-27/AZU-BO-27B.webp", "AZU-BO-27/AZU-BO-27C.webp", "AZU-BO-27/AZU-BO-27D.webp", "AZU-BO-27/AZU-BO-27E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Aurore de Glace",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-28/AZU-BO-28A.webp", "AZU-BO-28/AZU-BO-28B.webp", "AZU-BO-28/AZU-BO-28C.webp", "AZU-BO-28/AZU-BO-28D.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Brume de Cascade",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-29/AZU-BO-29A.webp", "AZU-BO-29/AZU-BO-29B.webp", "AZU-BO-29/AZU-BO-29C.webp", "AZU-BO-29/AZU-BO-29D.webp", "AZU-BO-29/AZU-BO-29E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Récif Enchanté",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-30/AZU-BO-30A.webp", "AZU-BO-30/AZU-BO-30B.webp", "AZU-BO-30/AZU-BO-30C.webp", "AZU-BO-30/AZU-BO-30D.webp", "AZU-BO-30/AZU-BO-30E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Éclat d'Azur",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-31/AZU-BO-31A.webp", "AZU-BO-31/AZU-BO-31B.webp", "AZU-BO-31/AZU-BO-31C.webp", "AZU-BO-31/AZU-BO-31D.webp", "AZU-BO-31/AZU-BO-31E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Onde de Soir",
    fee: 'azurine',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["AZU-BO-32/AZU-BO-32A.webp", "AZU-BO-32/AZU-BO-32B.webp", "AZU-BO-32/AZU-BO-32C.webp", "AZU-BO-32/AZU-BO-32D.webp", "AZU-BO-32/AZU-BO-32E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Souffle d'Azurine",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-01/AZU-COL-01A.webp", "AZU-COL-01/AZU-COL-01B.webp", "AZU-COL-01/AZU-COL-01C.webp", "AZU-COL-01/AZU-COL-01D.webp", "AZU-COL-01/AZU-COL-01E.webp", "AZU-COL-01/AZU-COL-01F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Collier Océan",
    fee: 'azurine',
    type: 'colliers',
    prix: 24,
    stock: 1,
    photos: ["AZU-COL-02/AZU-COL-02A.webp", "AZU-COL-02/AZU-COL-02B.webp", "AZU-COL-02/AZU-COL-02C.webp", "AZU-COL-02/AZU-COL-02D.webp", "AZU-COL-02/AZU-COL-02E.webp", "AZU-COL-02/AZU-COL-02F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Médaillon Aquatique",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-03/AZU-COL-03A.webp", "AZU-COL-03/AZU-COL-03B.webp", "AZU-COL-03/AZU-COL-03C.webp", "AZU-COL-03/AZU-COL-03D.webp", "AZU-COL-03/AZU-COL-03E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Perle d'Azurine",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-04/AZU-COL-04A.webp", "AZU-COL-04/AZU-COL-04B.webp", "AZU-COL-04/AZU-COL-04C.webp", "AZU-COL-04/AZU-COL-04D.webp", "AZU-COL-04/AZU-COL-04E.webp", "AZU-COL-04/AZU-COL-04F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Joyau d'Azur",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-05/AZU-COL-05A.webp", "AZU-COL-05/AZU-COL-05B.webp", "AZU-COL-05/AZU-COL-05C.webp", "AZU-COL-05/AZU-COL-05D.webp", "AZU-COL-05/AZU-COL-05E.webp", "AZU-COL-05/AZU-COL-05F.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Collier Écume",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-06/AZU-COL-06A.webp", "AZU-COL-06/AZU-COL-06B.webp", "AZU-COL-06/AZU-COL-06C.webp", "AZU-COL-06/AZU-COL-06D.webp", "AZU-COL-06/AZU-COL-06E.webp", "AZU-COL-06/AZU-COL-06F.webp", "AZU-COL-06/AZU-COL-06G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Larme d'Océan",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-07/AZU-COL-07A.webp", "AZU-COL-07/AZU-COL-07B.webp", "AZU-COL-07/AZU-COL-07C.webp", "AZU-COL-07/AZU-COL-07D.webp", "AZU-COL-07/AZU-COL-07E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Collier Cascade",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-08/AZU-COL-08A.webp", "AZU-COL-08/AZU-COL-08B.webp", "AZU-COL-08/AZU-COL-08C.webp", "AZU-COL-08/AZU-COL-08D.webp", "AZU-COL-08/AZU-COL-08E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Récif Arc-en-Ciel",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-09/AZU-COL-09A.webp", "AZU-COL-09/AZU-COL-09B.webp", "AZU-COL-09/AZU-COL-09C.webp", "AZU-COL-09/AZU-COL-09D.webp", "AZU-COL-09/AZU-COL-09E.webp", "AZU-COL-09/AZU-COL-09F.webp", "AZU-COL-09/AZU-COL-09G.webp", "AZU-COL-09/AZU-COL-09H.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Pendentif Reflet Aquatique",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-10/AZU-COL-10A.webp", "AZU-COL-10/AZU-COL-10B.webp", "AZU-COL-10/AZU-COL-10C.webp", "AZU-COL-10/AZU-COL-10D.webp", "AZU-COL-10/AZU-COL-10E.webp", "AZU-COL-10/AZU-COL-10F.webp", "AZU-COL-10/AZU-COL-10G.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Collier d'Azur",
    fee: 'azurine',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["AZU-COL-11/AZU-COL-11A.webp", "AZU-COL-11/AZU-COL-11B.webp", "AZU-COL-11/AZU-COL-11C.webp", "AZU-COL-11/AZU-COL-11D.webp", "AZU-COL-11/AZU-COL-11E.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Marque-page Onde d'Azur",
    fee: 'azurine',
    type: 'marque-pages',
    prix: 12,
    stock: 1,
    photos: ["AZU-MP-01/AZU-MP-01A.webp", "AZU-MP-01/AZU-MP-01B.webp", "AZU-MP-01/AZU-MP-01C.webp"],
    description: "Création fluide et lumineuse aux reflets bleus et violets, évoquant la pureté des sources, des lacs glacés et des vagues féériques d'Azurine."
  },
  {
    nom: "Boucles d'oreilles Ombre d'Étoile",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-01/NOC-BO-01A.webp", "NOC-BO-01/NOC-BO-01B.webp", "NOC-BO-01/NOC-BO-01C.webp", "NOC-BO-01/NOC-BO-01D.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Voile de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-02/NOC-BO-02A.webp", "NOC-BO-02/NOC-BO-02B.webp", "NOC-BO-02/NOC-BO-02C.webp", "NOC-BO-02/NOC-BO-02D.webp", "NOC-BO-02/NOC-BO-02E.webp", "NOC-BO-02/NOC-BO-02F.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Poussière de Lune",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-03/NOC-BO-03A.webp", "NOC-BO-03/NOC-BO-03B.webp", "NOC-BO-03/NOC-BO-03C.webp", "NOC-BO-03/NOC-BO-03D.webp", "NOC-BO-03/NOC-BO-03E.webp", "NOC-BO-03/NOC-BO-03F.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Éclat Nocturne",
    fee: 'noctelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["NOC-BO-04/NOC-BO-04A.webp", "NOC-BO-04/NOC-BO-04B.webp", "NOC-BO-04/NOC-BO-04C.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Reflet d'Ombre",
    fee: 'noctelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["NOC-BO-05/NOC-BO-05A.webp", "NOC-BO-05/NOC-BO-05B.webp", "NOC-BO-05/NOC-BO-05C.webp", "NOC-BO-05/NOC-BO-05D.webp", "NOC-BO-05/NOC-BO-05E.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Mystère de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["NOC-BO-06/NOC-BO-06A.webp", "NOC-BO-06/NOC-BO-06B.webp", "NOC-BO-06/NOC-BO-06C.webp", "NOC-BO-06/NOC-BO-06D.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Dentelle Obscure",
    fee: 'noctelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["NOC-BO-07/NOC-BO-07A.webp", "NOC-BO-07/NOC-BO-07B.webp", "NOC-BO-07/NOC-BO-07C.webp", "NOC-BO-07/NOC-BO-07D.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Clarté de Lune",
    fee: 'noctelya',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["NOC-BO-08/NOC-BO-08A.webp", "NOC-BO-08/NOC-BO-08B.webp", "NOC-BO-08/NOC-BO-08C.webp", "NOC-BO-08/NOC-BO-08D.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Songe Nocturne",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-09/NOC-BO-09A.webp", "NOC-BO-09/NOC-BO-09B.webp", "NOC-BO-09/NOC-BO-09C.webp", "NOC-BO-09/NOC-BO-09D.webp", "NOC-BO-09/NOC-BO-09E.webp", "NOC-BO-09/NOC-BO-09F.webp", "NOC-BO-09/NOC-BO-09G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Secret d'Ombre",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-10/NOC-BO-10A.webp", "NOC-BO-10/NOC-BO-10B.webp", "NOC-BO-10/NOC-BO-10C.webp", "NOC-BO-10/NOC-BO-10D.webp", "NOC-BO-10/NOC-BO-10E.webp", "NOC-BO-10/NOC-BO-10F.webp", "NOC-BO-10/NOC-BO-10G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Fleur de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-11/NOC-BO-11A.webp", "NOC-BO-11/NOC-BO-11B.webp", "NOC-BO-11/NOC-BO-11C.webp", "NOC-BO-11/NOC-BO-11D.webp", "NOC-BO-11/NOC-BO-11E.webp", "NOC-BO-11/NOC-BO-11F.webp", "NOC-BO-11/NOC-BO-11G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Nébuleuse Obscure",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-12/NOC-BO-12A.webp", "NOC-BO-12/NOC-BO-12B.webp", "NOC-BO-12/NOC-BO-12C.webp", "NOC-BO-12/NOC-BO-12D.webp", "NOC-BO-12/NOC-BO-12E.webp", "NOC-BO-12/NOC-BO-12F.webp", "NOC-BO-12/NOC-BO-12G.webp", "NOC-BO-12/NOC-BO-12H.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Géode de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-13/NOC-BO-13A.webp", "NOC-BO-13/NOC-BO-13B.webp", "NOC-BO-13/NOC-BO-13C.webp", "NOC-BO-13/NOC-BO-13D.webp", "NOC-BO-13/NOC-BO-13E.webp", "NOC-BO-13/NOC-BO-13F.webp", "NOC-BO-13/NOC-BO-13G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Éclipse de Lune",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-14/NOC-BO-14A.webp", "NOC-BO-14/NOC-BO-14B.webp", "NOC-BO-14/NOC-BO-14C.webp", "NOC-BO-14/NOC-BO-14D.webp", "NOC-BO-14/NOC-BO-14E.webp", "NOC-BO-14/NOC-BO-14F.webp", "NOC-BO-14/NOC-BO-14G.webp", "NOC-BO-14/NOC-BO-14H.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Rêve d'Étoile",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-15/NOC-BO-15A.webp", "NOC-BO-15/NOC-BO-15B.webp", "NOC-BO-15/NOC-BO-15C.webp", "NOC-BO-15/NOC-BO-15D.webp", "NOC-BO-15/NOC-BO-15E.webp", "NOC-BO-15/NOC-BO-15F.webp", "NOC-BO-15/NOC-BO-15G.webp", "NOC-BO-15/NOC-BO-15H.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Voile Obscur",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-16/NOC-BO-16A.webp", "NOC-BO-16/NOC-BO-16B.webp", "NOC-BO-16/NOC-BO-16C.webp", "NOC-BO-16/NOC-BO-16D.webp", "NOC-BO-16/NOC-BO-16E.webp", "NOC-BO-16/NOC-BO-16F.webp", "NOC-BO-16/NOC-BO-16G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Agate de Minuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-17/NOC-BO-17A.webp", "NOC-BO-17/NOC-BO-17B.webp", "NOC-BO-17/NOC-BO-17C.webp", "NOC-BO-17/NOC-BO-17D.webp", "NOC-BO-17/NOC-BO-17E.webp", "NOC-BO-17/NOC-BO-17F.webp", "NOC-BO-17/NOC-BO-17G.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Étoile Filante",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-18/NOC-BO-18A.webp", "NOC-BO-18/NOC-BO-18B.webp", "NOC-BO-18/NOC-BO-18C.webp", "NOC-BO-18/NOC-BO-18D.webp", "NOC-BO-18/NOC-BO-18E.webp", "NOC-BO-18/NOC-BO-18F.webp", "NOC-BO-18/NOC-BO-18G.webp", "NOC-BO-18/NOC-BO-18H.webp", "NOC-BO-18/NOC-BO-18I.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Éclat de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-19/NOC-BO-19A.webp", "NOC-BO-19/NOC-BO-19B.webp", "NOC-BO-19/NOC-BO-19C.webp", "NOC-BO-19/NOC-BO-19D.webp", "NOC-BO-19/NOC-BO-19E.webp", "NOC-BO-19/NOC-BO-19F.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Nuit de Marbre",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-20/NOC-BO-20A.webp", "NOC-BO-20/NOC-BO-20B.webp", "NOC-BO-20/NOC-BO-20C.webp", "NOC-BO-20/NOC-BO-20D.webp", "NOC-BO-20/NOC-BO-20E.webp", "NOC-BO-20/NOC-BO-20F.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Aile de Nuit",
    fee: 'noctelya',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["NOC-BO-21/NOC-BO-21A.webp", "NOC-BO-21/NOC-BO-21B.webp", "NOC-BO-21/NOC-BO-21C.webp", "NOC-BO-21/NOC-BO-21D.webp", "NOC-BO-21/NOC-BO-21E.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Pendentif Nuit d'Étoiles",
    fee: 'noctelya',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["NOC-COL-01/NOC-COL-01A.webp", "NOC-COL-01/NOC-COL-01B.webp", "NOC-COL-01/NOC-COL-01C.webp", "NOC-COL-01/NOC-COL-01D.webp", "NOC-COL-01/NOC-COL-01E.webp", "NOC-COL-01/NOC-COL-01F.webp"],
    description: "Un bijou mystérieux et élégant aux tons sombres et argentés, capturant la magie des étoiles et la douceur des nuits de Noctelya."
  },
  {
    nom: "Boucles d'oreilles Étincelle de Feu",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 12,
    stock: 1,
    matiere: "résine",
    photos: ["PYR-BO-01/PYR-BO-01A.webp", "PYR-BO-01/PYR-BO-01B.webp", "PYR-BO-01/PYR-BO-01C.webp", "PYR-BO-01/PYR-BO-01D.webp", "PYR-BO-01/PYR-BO-01E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Passion Enflammée",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 12,
    stock: 1,
    matiere: "résine",
    photos: ["PYR-BO-02/PYR-BO-02A.webp", "PYR-BO-02/PYR-BO-02B.webp", "PYR-BO-02/PYR-BO-02C.webp", "PYR-BO-02/PYR-BO-02D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Éclat de Feu",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-03/PYR-BO-03A.webp", "PYR-BO-03/PYR-BO-03B.webp", "PYR-BO-03/PYR-BO-03C.webp", "PYR-BO-03/PYR-BO-03D.webp", "PYR-BO-03/PYR-BO-03E.webp", "PYR-BO-03/PYR-BO-03F.webp", "PYR-BO-03/PYR-BO-03G.webp", "PYR-BO-03/PYR-BO-03H.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Rayon de Soleil",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-04/PYR-BO-04A.webp", "PYR-BO-04/PYR-BO-04B.webp", "PYR-BO-04/PYR-BO-04C.webp", "PYR-BO-04/PYR-BO-04D.webp", "PYR-BO-04/PYR-BO-04E.webp", "PYR-BO-04/PYR-BO-04F.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Cendre Volcanique",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-05/PYR-BO-05A.webp", "PYR-BO-05/PYR-BO-05B.webp", "PYR-BO-05/PYR-BO-05C.webp", "PYR-BO-05/PYR-BO-05D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Chaleur d'Été",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-06/PYR-BO-06A.webp", "PYR-BO-06/PYR-BO-06B.webp", "PYR-BO-06/PYR-BO-06C.webp", "PYR-BO-06/PYR-BO-06D.webp", "PYR-BO-06/PYR-BO-06E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Cœur de Rubis",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-07/PYR-BO-07A.webp", "PYR-BO-07/PYR-BO-07B.webp", "PYR-BO-07/PYR-BO-07C.webp", "PYR-BO-07/PYR-BO-07D.webp", "PYR-BO-07/PYR-BO-07E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Aurore Enflammée",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-08/PYR-BO-08A.webp", "PYR-BO-08/PYR-BO-08B.webp", "PYR-BO-08/PYR-BO-08C.webp", "PYR-BO-08/PYR-BO-08D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Brasier Féérique",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-09/PYR-BO-09A.webp", "PYR-BO-09/PYR-BO-09B.webp", "PYR-BO-09/PYR-BO-09C.webp", "PYR-BO-09/PYR-BO-09D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Pétales de Braise",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-10/PYR-BO-10A.webp", "PYR-BO-10/PYR-BO-10B.webp", "PYR-BO-10/PYR-BO-10C.webp", "PYR-BO-10/PYR-BO-10D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Ailes Féériques",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-11/PYR-BO-11A.webp", "PYR-BO-11/PYR-BO-11B.webp", "PYR-BO-11/PYR-BO-11C.webp", "PYR-BO-11/PYR-BO-11D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Agate Fuchsia",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-12/PYR-BO-12A.webp", "PYR-BO-12/PYR-BO-12B.webp", "PYR-BO-12/PYR-BO-12C.webp", "PYR-BO-12/PYR-BO-12D.webp", "PYR-BO-12/PYR-BO-12E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Couchant Flamboyant",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-13/PYR-BO-13A.webp", "PYR-BO-13/PYR-BO-13B.webp", "PYR-BO-13/PYR-BO-13C.webp", "PYR-BO-13/PYR-BO-13D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Larmes de Fée",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-14/PYR-BO-14A.webp", "PYR-BO-14/PYR-BO-14B.webp", "PYR-BO-14/PYR-BO-14C.webp", "PYR-BO-14/PYR-BO-14D.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Éclat Incandescent",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["PYR-BO-15/PYR-BO-15A.webp", "PYR-BO-15/PYR-BO-15B.webp", "PYR-BO-15/PYR-BO-15C.webp", "PYR-BO-15/PYR-BO-15D.webp", "PYR-BO-15/PYR-BO-15E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Souffle de Feu",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-16/PYR-BO-16A.webp", "PYR-BO-16/PYR-BO-16B.webp", "PYR-BO-16/PYR-BO-16C.webp", "PYR-BO-16/PYR-BO-16D.webp", "PYR-BO-16/PYR-BO-16E.webp", "PYR-BO-16/PYR-BO-16F.webp", "PYR-BO-16/PYR-BO-16G.webp", "PYR-BO-16/PYR-BO-16H.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Cœur Ardent",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-17/PYR-BO-17A.webp", "PYR-BO-17/PYR-BO-17B.webp", "PYR-BO-17/PYR-BO-17C.webp", "PYR-BO-17/PYR-BO-17D.webp", "PYR-BO-17/PYR-BO-17E.webp", "PYR-BO-17/PYR-BO-17F.webp", "PYR-BO-17/PYR-BO-17G.webp", "PYR-BO-17/PYR-BO-17H.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Solstice d'Été",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-18/PYR-BO-18A.webp", "PYR-BO-18/PYR-BO-18B.webp", "PYR-BO-18/PYR-BO-18C.webp", "PYR-BO-18/PYR-BO-18D.webp", "PYR-BO-18/PYR-BO-18E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Lueur Solaire",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-19/PYR-BO-19A.webp", "PYR-BO-19/PYR-BO-19B.webp", "PYR-BO-19/PYR-BO-19C.webp", "PYR-BO-19/PYR-BO-19D.webp", "PYR-BO-19/PYR-BO-19E.webp", "PYR-BO-19/PYR-BO-19F.webp", "PYR-BO-19/PYR-BO-19G.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Feu Follet",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-20/PYR-BO-20A.webp", "PYR-BO-20/PYR-BO-20B.webp", "PYR-BO-20/PYR-BO-20C.webp", "PYR-BO-20/PYR-BO-20D.webp", "PYR-BO-20/PYR-BO-20E.webp", "PYR-BO-20/PYR-BO-20F.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Goutte de Soleil",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-21/PYR-BO-21A.webp", "PYR-BO-21/PYR-BO-21B.webp", "PYR-BO-21/PYR-BO-21C.webp", "PYR-BO-21/PYR-BO-21D.webp", "PYR-BO-21/PYR-BO-21E.webp", "PYR-BO-21/PYR-BO-21F.webp", "PYR-BO-21/PYR-BO-21G.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Rayon Flamboyant",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-22/PYR-BO-22A.webp", "PYR-BO-22/PYR-BO-22B.webp", "PYR-BO-22/PYR-BO-22C.webp", "PYR-BO-22/PYR-BO-22D.webp", "PYR-BO-22/PYR-BO-22E.webp", "PYR-BO-22/PYR-BO-22F.webp", "PYR-BO-22/PYR-BO-22G.webp", "PYR-BO-22/PYR-BO-22H.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Étincelle de Rubis",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-23/PYR-BO-23A.webp", "PYR-BO-23/PYR-BO-23B.webp", "PYR-BO-23/PYR-BO-23C.webp", "PYR-BO-23/PYR-BO-23D.webp", "PYR-BO-23/PYR-BO-23E.webp", "PYR-BO-23/PYR-BO-23F.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Soleil Couchant",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-24/PYR-BO-24A.webp", "PYR-BO-24/PYR-BO-24B.webp", "PYR-BO-24/PYR-BO-24C.webp", "PYR-BO-24/PYR-BO-24D.webp", "PYR-BO-24/PYR-BO-24E.webp", "PYR-BO-24/PYR-BO-24F.webp", "PYR-BO-24/PYR-BO-24G.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Pierre de Fée",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-25/PYR-BO-25A.webp", "PYR-BO-25/PYR-BO-25B.webp", "PYR-BO-25/PYR-BO-25C.webp", "PYR-BO-25/PYR-BO-25D.webp", "PYR-BO-25/PYR-BO-25E.webp", "PYR-BO-25/PYR-BO-25F.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Cœur Flamboyant",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-26/PYR-BO-26A.webp", "PYR-BO-26/PYR-BO-26B.webp", "PYR-BO-26/PYR-BO-26C.webp", "PYR-BO-26/PYR-BO-26D.webp", "PYR-BO-26/PYR-BO-26E.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Aurore d'Ambre",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-27/PYR-BO-27A.webp", "PYR-BO-27/PYR-BO-27B.webp", "PYR-BO-27/PYR-BO-27C.webp", "PYR-BO-27/PYR-BO-27D.webp", "PYR-BO-27/PYR-BO-27E.webp", "PYR-BO-27/PYR-BO-27F.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Flamme Éternelle",
    fee: 'pyrelia',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["PYR-BO-28/PYR-BO-28A.webp", "PYR-BO-28/PYR-BO-28B.webp", "PYR-BO-28/PYR-BO-28C.webp", "PYR-BO-28/PYR-BO-28D.webp", "PYR-BO-28/PYR-BO-28E.webp", "PYR-BO-28/PYR-BO-28F.webp", "PYR-BO-28/PYR-BO-28G.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Pendentif Flamme de Pyrélia",
    fee: 'pyrelia',
    type: 'colliers',
    prix: 29,
    stock: 1,
    photos: ["PYR-COL-01/PYR-COL-01A.webp", "PYR-COL-01/PYR-COL-01B.webp", "PYR-COL-01/PYR-COL-01C.webp", "PYR-COL-01/PYR-COL-01D.webp", "PYR-COL-01/PYR-COL-01E.webp", "PYR-COL-01/PYR-COL-01F.webp", "PYR-COL-01/PYR-COL-01G.webp", "PYR-COL-01/PYR-COL-01H.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Porte-clé Étincelle de Sagesse",
    fee: 'pyrelia',
    type: 'porte-cles',
    prix: 9,
    stock: 1,
    photos: ["PYR-PC-01/PYR-PC-01A.webp", "PYR-PC-01/PYR-PC-01B.webp", "PYR-PC-01/PYR-PC-01C.webp"],
    description: "Une pièce flamboyante et chaleureuse aux couleurs d'ambre, d'or et de feu, imprégnée de l'énergie étincelante de Pyrélia."
  },
  {
    nom: "Boucles d'oreilles Feuille d'Émeraude",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["SYL-BO-01/SYL-BO-01A.webp", "SYL-BO-01/SYL-BO-01B.webp", "SYL-BO-01/SYL-BO-01C.webp", "SYL-BO-01/SYL-BO-01D.webp", "SYL-BO-01/SYL-BO-01E.webp", "SYL-BO-01/SYL-BO-01F.webp", "SYL-BO-01/SYL-BO-01G.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Mousse de Forêt",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["SYL-BO-02/SYL-BO-02A.webp", "SYL-BO-02/SYL-BO-02B.webp", "SYL-BO-02/SYL-BO-02C.webp", "SYL-BO-02/SYL-BO-02D.webp", "SYL-BO-02/SYL-BO-02E.webp", "SYL-BO-02/SYL-BO-02F.webp", "SYL-BO-02/SYL-BO-02G.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Esprit du Bois",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["SYL-BO-03/SYL-BO-03A.webp", "SYL-BO-03/SYL-BO-03B.webp", "SYL-BO-03/SYL-BO-03C.webp", "SYL-BO-03/SYL-BO-03D.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Feuille de Papier",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["SYL-BO-04/SYL-BO-04A.webp", "SYL-BO-04/SYL-BO-04B.webp", "SYL-BO-04/SYL-BO-04C.webp", "SYL-BO-04/SYL-BO-04D.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Patchwork d'Amour",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    photos: ["SYL-BO-05/SYL-BO-05A.webp", "SYL-BO-05/SYL-BO-05B.webp", "SYL-BO-05/SYL-BO-05C.webp", "SYL-BO-05/SYL-BO-05D.webp", "SYL-BO-05/SYL-BO-05E.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Fleurs du Printemps",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-06/SYL-BO-06A.webp", "SYL-BO-06/SYL-BO-06B.webp", "SYL-BO-06/SYL-BO-06C.webp", "SYL-BO-06/SYL-BO-06D.webp", "SYL-BO-06/SYL-BO-06E.webp", "SYL-BO-06/SYL-BO-06F.webp", "SYL-BO-06/SYL-BO-06G.webp", "SYL-BO-06/SYL-BO-06H.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Chant du Bosquet",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-07/SYL-BO-07A.webp", "SYL-BO-07/SYL-BO-07B.webp", "SYL-BO-07/SYL-BO-07C.webp", "SYL-BO-07/SYL-BO-07D.webp", "SYL-BO-07/SYL-BO-07E.webp", "SYL-BO-07/SYL-BO-07F.webp", "SYL-BO-07/SYL-BO-07G.webp", "SYL-BO-07/SYL-BO-07H.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Jardin d'Encre",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-08/SYL-BO-08A.webp", "SYL-BO-08/SYL-BO-08B.webp", "SYL-BO-08/SYL-BO-08C.webp", "SYL-BO-08/SYL-BO-08D.webp", "SYL-BO-08/SYL-BO-08E.webp", "SYL-BO-08/SYL-BO-08F.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Fleur de Mandala",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-09/SYL-BO-09A.webp", "SYL-BO-09/SYL-BO-09B.webp", "SYL-BO-09/SYL-BO-09C.webp", "SYL-BO-09/SYL-BO-09D.webp", "SYL-BO-09/SYL-BO-09E.webp", "SYL-BO-09/SYL-BO-09F.webp", "SYL-BO-09/SYL-BO-09G.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Sève de Vie",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-10/SYL-BO-10A.webp", "SYL-BO-10/SYL-BO-10B.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Rameau Enchanté",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-11/SYL-BO-11A.webp", "SYL-BO-11/SYL-BO-11B.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Murmure des Arbres",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-12/SYL-BO-12A.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Sous-Bois Féérique",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-13/SYL-BO-13A.webp", "SYL-BO-13/SYL-BO-13B.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Rêve de Nature",
    fee: 'sylvae',
    type: 'boucles',
    prix: 15,
    stock: 1,
    photos: ["SYL-BO-14/SYL-BO-14A.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Trésor du Chêne",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-15/SYL-BO-15A.webp", "SYL-BO-15/SYL-BO-15B.webp", "SYL-BO-15/SYL-BO-15C.webp", "SYL-BO-15/SYL-BO-15D.webp", "SYL-BO-15/SYL-BO-15E.webp", "SYL-BO-15/SYL-BO-15F.webp", "SYL-BO-15/SYL-BO-15G.webp", "SYL-BO-15/SYL-BO-15H.webp", "SYL-BO-15/SYL-BO-15I.webp", "SYL-BO-15/SYL-BO-15J.webp", "SYL-BO-15/SYL-BO-15K.webp", "SYL-BO-15/SYL-BO-15L.webp", "SYL-BO-15/SYL-BO-15M.webp", "SYL-BO-15/SYL-BO-15N.webp", "SYL-BO-15/SYL-BO-15O.webp", "SYL-BO-15/SYL-BO-15P.webp", "SYL-BO-15/SYL-BO-15Q.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Cœur de Forêt",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-16/SYL-BO-16A.webp", "SYL-BO-16/SYL-BO-16B.webp", "SYL-BO-16/SYL-BO-16C.webp", "SYL-BO-16/SYL-BO-16D.webp", "SYL-BO-16/SYL-BO-16E.webp", "SYL-BO-16/SYL-BO-16F.webp", "SYL-BO-16/SYL-BO-16G.webp", "SYL-BO-16/SYL-BO-16H.webp", "SYL-BO-16/SYL-BO-16I.webp", "SYL-BO-16/SYL-BO-16J.webp", "SYL-BO-16/SYL-BO-16K.webp", "SYL-BO-16/SYL-BO-16L.webp", "SYL-BO-16/SYL-BO-16M.webp", "SYL-BO-16/SYL-BO-16N.webp", "SYL-BO-16/SYL-BO-16O.webp", "SYL-BO-16/SYL-BO-16P.webp", "SYL-BO-16/SYL-BO-16Q.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Feuille d'Automne",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-17/SYL-BO-17A.webp", "SYL-BO-17/SYL-BO-17B.webp", "SYL-BO-17/SYL-BO-17C.webp", "SYL-BO-17/SYL-BO-17D.webp", "SYL-BO-17/SYL-BO-17E.webp", "SYL-BO-17/SYL-BO-17F.webp", "SYL-BO-17/SYL-BO-17G.webp", "SYL-BO-17/SYL-BO-17H.webp", "SYL-BO-17/SYL-BO-17I.webp", "SYL-BO-17/SYL-BO-17J.webp", "SYL-BO-17/SYL-BO-17K.webp", "SYL-BO-17/SYL-BO-17L.webp", "SYL-BO-17/SYL-BO-17M.webp", "SYL-BO-17/SYL-BO-17N.webp", "SYL-BO-17/SYL-BO-17O.webp", "SYL-BO-17/SYL-BO-17P.webp", "SYL-BO-17/SYL-BO-17Q.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Écorce Enchantée",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-18/SYL-BO-18A.webp", "SYL-BO-18/SYL-BO-18B.webp", "SYL-BO-18/SYL-BO-18C.webp", "SYL-BO-18/SYL-BO-18D.webp", "SYL-BO-18/SYL-BO-18E.webp", "SYL-BO-18/SYL-BO-18F.webp", "SYL-BO-18/SYL-BO-18G.webp", "SYL-BO-18/SYL-BO-18H.webp", "SYL-BO-18/SYL-BO-18I.webp", "SYL-BO-18/SYL-BO-18J.webp", "SYL-BO-18/SYL-BO-18K.webp", "SYL-BO-18/SYL-BO-18L.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Lichen Féérique",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-19/SYL-BO-19A.webp", "SYL-BO-19/SYL-BO-19B.webp", "SYL-BO-19/SYL-BO-19C.webp", "SYL-BO-19/SYL-BO-19D.webp", "SYL-BO-19/SYL-BO-19E.webp", "SYL-BO-19/SYL-BO-19F.webp", "SYL-BO-19/SYL-BO-19G.webp", "SYL-BO-19/SYL-BO-19H.webp", "SYL-BO-19/SYL-BO-19I.webp", "SYL-BO-19/SYL-BO-19J.webp", "SYL-BO-19/SYL-BO-19K.webp", "SYL-BO-19/SYL-BO-19L.webp", "SYL-BO-19/SYL-BO-19M.webp", "SYL-BO-19/SYL-BO-19N.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Fougère Magique",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-20/SYL-BO-20A.webp", "SYL-BO-20/SYL-BO-20B.webp", "SYL-BO-20/SYL-BO-20C.webp", "SYL-BO-20/SYL-BO-20D.webp", "SYL-BO-20/SYL-BO-20E.webp", "SYL-BO-20/SYL-BO-20F.webp", "SYL-BO-20/SYL-BO-20G.webp", "SYL-BO-20/SYL-BO-20H.webp", "SYL-BO-20/SYL-BO-20I.webp", "SYL-BO-20/SYL-BO-20J.webp", "SYL-BO-20/SYL-BO-20K.webp", "SYL-BO-20/SYL-BO-20L.webp", "SYL-BO-20/SYL-BO-20M.webp", "SYL-BO-20/SYL-BO-20N.webp", "SYL-BO-20/SYL-BO-20O.webp", "SYL-BO-20/SYL-BO-20P.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Ombre des Bois",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-21/SYL-BO-21A.webp", "SYL-BO-21/SYL-BO-21B.webp", "SYL-BO-21/SYL-BO-21C.webp", "SYL-BO-21/SYL-BO-21D.webp", "SYL-BO-21/SYL-BO-21E.webp", "SYL-BO-21/SYL-BO-21F.webp", "SYL-BO-21/SYL-BO-21G.webp", "SYL-BO-21/SYL-BO-21H.webp", "SYL-BO-21/SYL-BO-21I.webp", "SYL-BO-21/SYL-BO-21J.webp", "SYL-BO-21/SYL-BO-21K.webp", "SYL-BO-21/SYL-BO-21L.webp", "SYL-BO-21/SYL-BO-21M.webp", "SYL-BO-21/SYL-BO-21N.webp", "SYL-BO-21/SYL-BO-21O.webp", "SYL-BO-21/SYL-BO-21P.webp", "SYL-BO-21/SYL-BO-21Q.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Éclat de Mousse",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-22/SYL-BO-22A.webp", "SYL-BO-22/SYL-BO-22B.webp", "SYL-BO-22/SYL-BO-22C.webp", "SYL-BO-22/SYL-BO-22D.webp", "SYL-BO-22/SYL-BO-22E.webp", "SYL-BO-22/SYL-BO-22F.webp", "SYL-BO-22/SYL-BO-22G.webp", "SYL-BO-22/SYL-BO-22H.webp", "SYL-BO-22/SYL-BO-22I.webp", "SYL-BO-22/SYL-BO-22J.webp", "SYL-BO-22/SYL-BO-22K.webp", "SYL-BO-22/SYL-BO-22L.webp", "SYL-BO-22/SYL-BO-22M.webp", "SYL-BO-22/SYL-BO-22N.webp", "SYL-BO-22/SYL-BO-22O.webp", "SYL-BO-22/SYL-BO-22P.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Bourgeon de Printemps",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-23/SYL-BO-23A.webp", "SYL-BO-23/SYL-BO-23B.webp", "SYL-BO-23/SYL-BO-23C.webp", "SYL-BO-23/SYL-BO-23D.webp", "SYL-BO-23/SYL-BO-23E.webp", "SYL-BO-23/SYL-BO-23F.webp", "SYL-BO-23/SYL-BO-23G.webp", "SYL-BO-23/SYL-BO-23H.webp", "SYL-BO-23/SYL-BO-23I.webp", "SYL-BO-23/SYL-BO-23J.webp", "SYL-BO-23/SYL-BO-23K.webp", "SYL-BO-23/SYL-BO-23L.webp", "SYL-BO-23/SYL-BO-23M.webp", "SYL-BO-23/SYL-BO-23N.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Brin de Nature",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-24/SYL-BO-24A.webp", "SYL-BO-24/SYL-BO-24B.webp", "SYL-BO-24/SYL-BO-24C.webp", "SYL-BO-24/SYL-BO-24D.webp", "SYL-BO-24/SYL-BO-24E.webp", "SYL-BO-24/SYL-BO-24F.webp", "SYL-BO-24/SYL-BO-24G.webp", "SYL-BO-24/SYL-BO-24H.webp", "SYL-BO-24/SYL-BO-24I.webp", "SYL-BO-24/SYL-BO-24J.webp", "SYL-BO-24/SYL-BO-24K.webp", "SYL-BO-24/SYL-BO-24L.webp", "SYL-BO-24/SYL-BO-24M.webp", "SYL-BO-24/SYL-BO-24N.webp", "SYL-BO-24/SYL-BO-24O.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Boucles d'oreilles Rosée des Bois",
    fee: 'sylvae',
    type: 'boucles',
    prix: 19,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-BO-25/SYL-BO-25A.webp", "SYL-BO-25/SYL-BO-25B.webp", "SYL-BO-25/SYL-BO-25C.webp", "SYL-BO-25/SYL-BO-25D.webp", "SYL-BO-25/SYL-BO-25E.webp", "SYL-BO-25/SYL-BO-25F.webp", "SYL-BO-25/SYL-BO-25G.webp", "SYL-BO-25/SYL-BO-25H.webp", "SYL-BO-25/SYL-BO-25I.webp", "SYL-BO-25/SYL-BO-25J.webp", "SYL-BO-25/SYL-BO-25K.webp", "SYL-BO-25/SYL-BO-25L.webp", "SYL-BO-25/SYL-BO-25M.webp", "SYL-BO-25/SYL-BO-25N.webp", "SYL-BO-25/SYL-BO-25O.webp", "SYL-BO-25/SYL-BO-25P.webp", "SYL-BO-25/SYL-BO-25Q.webp", "SYL-BO-25/SYL-BO-25R.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Esprit de Sylvaë",
    fee: 'sylvae',
    type: 'colliers',
    prix: 25,
    stock: 1,
    photos: ["SYL-COL-01/SYL-COL-01A.webp", "SYL-COL-01/SYL-COL-01B.webp", "SYL-COL-01/SYL-COL-01C.webp", "SYL-COL-01/SYL-COL-01D.webp", "SYL-COL-01/SYL-COL-01E.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Collier Sous-Bois",
    fee: 'sylvae',
    type: 'colliers',
    prix: 25,
    stock: 1,
    photos: ["SYL-COL-02/SYL-COL-02A.webp", "SYL-COL-02/SYL-COL-02B.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Esprit des Fleurs",
    fee: 'sylvae',
    type: 'colliers',
    prix: 25,
    stock: 1,
    photos: ["SYL-COL-03/SYL-COL-03A.webp", "SYL-COL-03/SYL-COL-03B.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Collier Feuille d'Or",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-04/SYL-COL-04A.webp", "SYL-COL-04/SYL-COL-04B.webp", "SYL-COL-04/SYL-COL-04C.webp", "SYL-COL-04/SYL-COL-04D.webp", "SYL-COL-04/SYL-COL-04E.webp", "SYL-COL-04/SYL-COL-04F.webp", "SYL-COL-04/SYL-COL-04G.webp", "SYL-COL-04/SYL-COL-04H.webp", "SYL-COL-04/SYL-COL-04I.webp", "SYL-COL-04/SYL-COL-04J.webp", "SYL-COL-04/SYL-COL-04K.webp", "SYL-COL-04/SYL-COL-04L.webp", "SYL-COL-04/SYL-COL-04M.webp", "SYL-COL-04/SYL-COL-04N.webp", "SYL-COL-04/SYL-COL-04O.webp", "SYL-COL-04/SYL-COL-04P.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Écaille de Paon",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-05/SYL-COL-05A.webp", "SYL-COL-05/SYL-COL-05B.webp", "SYL-COL-05/SYL-COL-05C.webp", "SYL-COL-05/SYL-COL-05D.webp", "SYL-COL-05/SYL-COL-05E.webp", "SYL-COL-05/SYL-COL-05F.webp", "SYL-COL-05/SYL-COL-05G.webp", "SYL-COL-05/SYL-COL-05H.webp", "SYL-COL-05/SYL-COL-05I.webp", "SYL-COL-05/SYL-COL-05J.webp", "SYL-COL-05/SYL-COL-05K.webp", "SYL-COL-05/SYL-COL-05L.webp", "SYL-COL-05/SYL-COL-05M.webp", "SYL-COL-05/SYL-COL-05N.webp", "SYL-COL-05/SYL-COL-05O.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Écaille de Paon Nocturne",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-06/SYL-COL-06A.webp", "SYL-COL-06/SYL-COL-06B.webp", "SYL-COL-06/SYL-COL-06C.webp", "SYL-COL-06/SYL-COL-06D.webp", "SYL-COL-06/SYL-COL-06E.webp", "SYL-COL-06/SYL-COL-06F.webp", "SYL-COL-06/SYL-COL-06G.webp", "SYL-COL-06/SYL-COL-06H.webp", "SYL-COL-06/SYL-COL-06I.webp", "SYL-COL-06/SYL-COL-06J.webp", "SYL-COL-06/SYL-COL-06K.webp", "SYL-COL-06/SYL-COL-06L.webp", "SYL-COL-06/SYL-COL-06M.webp", "SYL-COL-06/SYL-COL-06N.webp", "SYL-COL-06/SYL-COL-06O.webp", "SYL-COL-06/SYL-COL-06P.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Collier Lichen",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-07/SYL-COL-07A.webp", "SYL-COL-07/SYL-COL-07B.webp", "SYL-COL-07/SYL-COL-07C.webp", "SYL-COL-07/SYL-COL-07D.webp", "SYL-COL-07/SYL-COL-07E.webp", "SYL-COL-07/SYL-COL-07F.webp", "SYL-COL-07/SYL-COL-07G.webp", "SYL-COL-07/SYL-COL-07H.webp", "SYL-COL-07/SYL-COL-07I.webp", "SYL-COL-07/SYL-COL-07J.webp", "SYL-COL-07/SYL-COL-07K.webp", "SYL-COL-07/SYL-COL-07L.webp", "SYL-COL-07/SYL-COL-07M.webp", "SYL-COL-07/SYL-COL-07N.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Médaillon de Nature",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-08/SYL-COL-08A.webp", "SYL-COL-08/SYL-COL-08B.webp", "SYL-COL-08/SYL-COL-08C.webp", "SYL-COL-08/SYL-COL-08D.webp", "SYL-COL-08/SYL-COL-08E.webp", "SYL-COL-08/SYL-COL-08F.webp", "SYL-COL-08/SYL-COL-08G.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Pendentif Feuille Féérique",
    fee: 'sylvae',
    type: 'colliers',
    prix: 29,
    stock: 1,
    matiere: "base imitation cuir",
    photos: ["SYL-COL-09/SYL-COL-09A.webp", "SYL-COL-09/SYL-COL-09B.webp", "SYL-COL-09/SYL-COL-09C.webp", "SYL-COL-09/SYL-COL-09D.webp", "SYL-COL-09/SYL-COL-09E.webp", "SYL-COL-09/SYL-COL-09F.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  },
  {
    nom: "Porte-clé Esprit de Sylvaë",
    fee: 'sylvae',
    type: 'porte-cles',
    prix: 12,
    stock: 1,
    photos: ["SYL-PC-01/SYL-PC-01A.webp", "SYL-PC-01/SYL-PC-01B.webp", "SYL-PC-01/SYL-PC-01C.webp", "SYL-PC-01/SYL-PC-01D.webp", "SYL-PC-01/SYL-PC-01E.webp", "SYL-PC-01/SYL-PC-01F.webp"],
    description: "Un bijou poétique d'inspiration végétale et naturelle aux nuances vertes et terreuses, rappelant la magie des forêts enchantées de Sylvaë."
  }
];
