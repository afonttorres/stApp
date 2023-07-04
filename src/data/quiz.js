let data = [
  {
    answer:
      "L’eficàcia clínica es refereix als efectes i beneficis d’un tractament farmacològic en la població general",
    correction: false,
    index: 1,
  },
  {
    answer:
      "L’ADN recombinant utilitzat en la teràpia gènica no es pot considerar un medicament biotecnològic perquè no es de naturalesa proteica",
    correction: false,
    index: 2,
  },
  {
    answer:
      "Perceptiv es una barreja comercial de vitamines i nutrients que millora la cognició en malalts d’Alzheimer en estudis clínics. Per tant, es pot considerar que es un nutricèutic",
    correction: true,
    index: 3,
  },
  {
    answer:
      "Diferents lligands d’un mateix receptor nuclear poden induir diferents canvis conformacionals en aquest receptor",
    correction: true,
    index: 4,
  },
  {
    answer:
      "El mecanisme de transrepressió dels PPARs es independent de la unió a la regió promotora dels gens diana",
    correction: true,
    index: 5,
  },
  {
    answer:
      "Són un tipus de receptor nuclears de la Classe III, que inclou també els receptor orfes",
    correction: false,
    index: 6,
  },
  {
    answer:
      "En absència de lligand, aquest receptor es troben inactius en el citoplasma, units a proteïnes de xoc tèrmic (HSP)",
    correction: false,
    index: 7,
  },
  {
    answer:
      "Els receptors amb activitat guanilat-ciclasa pròpia incrementen els nivells intracel·lulars AMPc",
    correction: false,
    index: 8,
  },
  {
    answer:
      "Les proteïnes supressores del senya de citoquines (SOCS) contribueixen a finalitzar el senyal del receptora amb activitat tirosina- quinasa extrínseca",
    correction: true,
    index: 9,
  },
  {
    answer:
      "Els receptors amb activitat tirosina-quinasa extrínseca nomes dimeritzaren després d’unir-se al lligand",
    correction: false,
    index: 10,
  },
  {
    answer:
      "En els receptors metabotropics de tipus PAR, l’activació de la proteïna G es produeix però proteòlisis del propi receptor",
    correction: true,
    index: 11,
  },
  {
    answer:
      "Receptors metabotropics: la mobilització del calci intracel·lular per activació d la via de a fosfolipasa C pot induir la secreció de neurotransmissors i hormones",
    correction: true,
    index: 12,
  },
  {
    answer:
      "El fet que un fàrmac agonista presenti una CE50 major que la KD suggereix la presencia de receptors de reserva",
    correction: false,
    index: 13,
  },
  {
    answer:
      "Donada la següent representació de Gaddum and Schild, en que A i A´ son dosis equiefectives de l’agonista A, i X i Y son dos antagonistes diferents del mateix receptor al qual s’uneix A, podem afirmar que l’antagonista X es mes potent que Y",
    correction: false,
    index: 14,
  },
  {
    answer:
      "Un pacient tractat crònicament amb AINE potencialment nefrotoxic ha de començar un tractament antihipertensiu, i el metge dubta entre dos fàrmacs antagonistes adrenèrgics, carvedilol i metoprolol. Basant-te nomes en la informació indicada en la taula, indica quines de les següents afirmacions son vertaderes o falses",
    index: 15,
  },
  {
    answer:
      "El carvedilol te mes probabilitat que el metoprolol de sofrir una interacció farmacocinètica amb l’AINE per desplaçament de la unió a proteïnes plasmàtiques",
    correction: true,
    parent: 15,
    index: 16,
  },
  {
    answer: "Carvedilol i metoprolol es metabolitzen molt poc",
    correction: false,
    parent: 15,
    index: 17,
  },
  {
    answer:
      "Probablement tots dos fàrmacs antihipertensius podran arribar al sistema nerviós central",
    correction: true,
    parent: 15,
    index: 18,
  },
  {
    answer:
      "Si tots dos fàrmac tenen un pka i un pes molecular similars, el carvedilol (logKow = 3,4) probablement s’absorbirà millor que el metoprolol (logKow = 1,8)",
    correction: true,
    parent: 15,
    index: 19,
  },
  {
    answer:
      "Si el pacient desenvolupa una malaltia hepàtica i els dos hipertensius es metabolitzen en el fetge, es preferirà el carvedilol perquè es metabolitza menys",
    correction: false,
    parent: 15,
    index: 20,
  },
  {
    answer:
      "Si el pacient desenvolupa insuficiència renal, es altament probable que el carvedilol presenti una interacció farmacocinètica amb l’AINE amb conseqüència clínica",
    correction: true,
    index: 21,
  },
  {
    answer:
      "Els pacients A i B es troben ambdós sota tractament amb dabigatran degut a una trombosi venosa profunda. Segons l’anàlisi farmacocinètica (veure gràfics)",
    index: 22,
  },
  {
    answer:
      "Si el dabigatran s’excreta per secreció tubular activa (via OAT), El pacient b podria estar també sota tractament amb un agent com el probenecid",
    correction: true,
    index: 23,
    parent: 22,
  },
  {
    answer: "El pacient B podria estar sota tractament conjunt amb rifampicina",
    correction: false,
    index: 24,
    parent: 22,
  },
  {
    answer:
      "Un pacient es ates a urgències degut a una intoxicació aguda per cocaïna (base feble; pka = 8,5;substrat Glyc-P i CYP3A)",
    index: 25,
  },
  {
    answer: "L’administració de bicarbonat reduirà la seva vida mitja",
    correction: false,
    index: 26,
    parent: 25,
  },
  {
    answer:
      "A un pH urinari de 6,5 la cocaïna s’excretarà millor que a un pH de 8.5",
    correction: true,
    parent: 25,
    index: 27,
  },
  {
    answer:
      "Si es provoca un desplaçament de la unió a les proteïnes plasmàtiques, empitjorarà la taxa de filtració glomerular",
    correction: false,
    parent: 25,
    index: 28,
  },
  {
    answer:
      "La inhibició de la Glicoproteïna-P pot provocar un augment del metabolisme hepàtic de la cocaïna",
    correction: true,
    index: 29,
    parent: 25,
  },
  {
    answer:
      "La diana terapèutica de molts fàrmacs antidepressius, com la paroxetina i el citalopram, son proteïnes transportadors del tipus ABC",
    correction: false,
    index: 30,
  },
  {
    answer:
      "Alguns inductors de la Glicoproteina-P s’utilitzen com a coadjuvants en alguns tractaments antitumorals",
    correction: false,
    index: 31,
  },
  {
    answer:
      "La nicotina del tabac pot contrarestar l’efecte d’alguns fàrmacs antihipertensius",
    correction: true,
    index: 32,
  },
  {
    answer: "Les RAM son mes freqüents en dones que en homes",
    correction: true,
    index: 33,
  },
  {
    answer:
      "L’efecte rebot es una de les manifestacions típiques de les RAM de tipus D",
    correction: false,
    index: 34,
  },
  {
    answer:
      "Les “Torsades de Pointes” causades per mutacions en el gen hERG provoquen el bloqueig dels canal iònics de potassi de tipus ràpid",
    correction: true,
    index: 35,
  },
  {
    answer:
      "La coadministració d’un fàrmac que redueix el metabolisme hepàtic de l’amiodarona pot afavorir l’aparició de les “Torsades de Pointes” en indivís genèticament susceptibles",
    correction: true,
    index: 36,
  },
  {
    answer:
      "El consum crònic de cocaïna redueix la producció de dopamina presinàptica",
    correction: true,
    index: 37,
  },
  {
    answer:
      "La tolerància creuada es la capacitat d’una droga per suprimir les manifestacions de la síndrome d’abstinència d’una altra",
    correction: false,
    index: 38,
  },
  {
    answer:
      "La desintoxicació de l’heroïnòman amb metadona es basa en la dependència creuada",
    correction: true,
    index: 39,
  },
  {
    answer: "El disulfiram esta indicat per al tractament del delirium tremens",
    correction: false,
    index: 40,
  },
  {
    answer:
      "Les benzodiazepines, emprades en la síndrome d’abstinència a l’alcohol, poden provocar dependència",
    correction: true,
    index: 41,
  },
  {
    answer:
      "Alguns antagonistes de receptors dopaminergics com la tiaprida s’utilitzen en la desintoxicació a l’heroïna",
    correction: false,
    index: 42,
  },
  {
    answer:
      "Els receptors muscarínics M1, M3 i M5 activen la via de la fosfolipasa C",
    correction: true,
    index: 43,
  },
  {
    answer:
      "L’activitat de les cèl·lules cromafins de les glàndules suprarenals es regulada per neurones del sistema nerviós simpàtic",
    correction: true,
    index: 44,
  },
  {
    answer:
      "El sistema nerviós autònom es caracteritza per presentar una estructura mononeuronal",
    correction: false,
    index: 45,
  },
  {
    answer:
      "El sistema nerviós parasimpàtic connecta el sistema nerviós central amb la placa motora",
    correction: false,
    index: 46,
  },
  {
    answer: "Es un bloqueador neuromuscular de tipo despolarizador",
    correction: true,
    index: 47,
  },
  {
    answer:
      "La administración de un inhibidor de la acetilcolinesterasa potencia el bloqueo neuromuscular",
    correction: true,
    index: 48,
  },
  {
    answer:
      "Está indicado en procesos que se requiera una relajación muscular de corta duración",
    correction: true,
    index: 49,
  },
  {
    answer: "Puede provocar la aparición de hipertermia maligna",
    correction: true,
    index: 50,
  },
  {
    answer:
      "En países de la selva amazónica es frecuente la intoxicación por ingestión de comida contaminada con curare",
    correction: false,
    index: 51,
  },
  {
    answer:
      "En la intoxicación por dimetoato, las dificultades respiratorias derivan de la parálisis neuromuscular y la hipersecreción bronquial",
    correction: true,
    index: 52,
  },
  {
    answer:
      "En la prueba del edrofonio, si el paciente tiene miastenia gravis, la mejora de la sintomatología que se producirá será de larga duración (días)",
    correction: false,
    index: 53,
  },
  {
    answer:
      "La monoamino oxidasa A (MAO-A) metabolitza noradrenalina, dopamina i serotonina",
    correction: true,
    index: 54,
  },
  {
    answer:
      "Els receptors adrenèrgics alfa actuen sempre activant la fosfolipasa C i augmentant el calci intracel·lular",
    correction: false,
    index: 55,
  },
  {
    answer:
      "La utilitat terapèutica de la dobutamina en el tractament del xoc cardiogenic deriva del seu efecte alfa1",
    correction: false,
    index: 56,
  },
  {
    answer:
      "El mirabegró es un agonista adrenèrgic beta3 útil en el tractament de la incontinència urinària",
    correction: true,
    index: 57,
  },
  {
    answer:
      "La fentolamina es un antagonista alfa adrenèrgic no selectiu de tipus irreversible",
    correction: false,
    index: 58,
  },
  {
    answer:
      "Els que tenen major utilitat terapèutica en les malalties cardiovasculars són els selectius beta2",
    correction: false,
    index: 59,
  },
  {
    answer:
      "Els selectius beta1 son útils en el tractament de les arrítmies cardíaques",
    correction: true,
    index: 60,
  },
  {
    answer:
      "L’administració immediata d’antagonistes adrenèrgics beta no selectius pot afavorir la hipoglucèmia en pacients diabètics pels seus efectes hepàtics",
    correction: false,
    index: 61,
  },
  {
    answer: "Pot revertir-se mitjançant atropina",
    correction: true,
    index: 62,
  },
  {
    answer: "Es veurà potenciada amb hexametoni",
    correction: false,
    index: 63,
  },
  { answer: "S’inhibirà amb propranolol", correction: false, index: 64 },
  {
    answer:
      "La reacció enzimàtica catalitzada per la dopamina beta-hidroxilasa es produeix dins la vesícula del neurotransmissor",
    correction: true,
    index: 65,
  },
  {
    answer:
      "Les neurones dopaminergiques es caracteritzen per no tenir l’activitat enzimàtica dopamina beta-hidroxilasa",
    correction: true,
    index: 66,
  },
  {
    answer:
      "L’alfa-metiltirosina bloquejarà ka síntesi de dopamina, però no de la noradrenalina",
    correction: false,
    index: 67,
  },
  {
    answer:
      "La unió de dopamina als receptors de la família D2 provocarà un increment dels nivells intracel·lulars d’AMPc",
    correction: false,
    index: 68,
  },
  {
    answer:
      "Els agonistes 5-HT4 tenen aplicació terapèutica en el reflux esofàgic",
    correction: true,
    index: 69,
  },
  {
    answer:
      "Els antipsicòtics atípics presenten mes efectes extrapiramidals que els antipsicòtics típics",
    correction: false,
    index: 70,
  },
  {
    answer:
      "Els antagonistes 5-HT2 tenen aplicació terapèutica en el tractament de la psicosi i l’esquizofrènia",
    correction: true,
    index: 71,
  },
  {
    answer: "Els agonistes dopaminergics D2 son útils com antiemètics",
    correction: false,
    index: 72,
  },
  {
    answer:
      "Zafirlukast es un antagonista competitiu reversible del receptor de leucotriens Cist-LT1",
    correction: true,
    index: 73,
  },
  {
    answer:
      "La relació entre concentracions inhibitòries IC50 cox2/IC50 cox1 per l’àcid acetilsalicílic presentarà menys reaccions gastrointestinals adverses que el valdecoxib",
    correction: false,
    index: 74,
  },
  {
    answer:
      "Els efectes adversos cardiovasculars dels AINE deriven principalment de la inhibició de la COX2",
    correction: true,
    index: 75,
  },
  {
    answer:
      "L’acetilcolina indueix l’activitat de la síntesi d’òxid nítric endotelial (Enos) - V Bradicinina",
    correction: true,
    index: 76,
  },
  {
    answer:
      "La seva acumulació es la responsable de la tos seca que provoquen els antihipertensius del tipus IECA/ACE-I",
    correction: true,
    index: 77,
  },
  {
    answer:
      "El seu efecte vasodilatador depèn de la producció d’òxid nítric i prostaglandines",
    correction: true,
    index: 78,
  },
  {
    answer:
      "Els receptors de la bradicinina B1 i B2 son de tipus metabotropics",
    correction: true,
    index: 79,
  },
  {
    answer: "Provoca la relaxació de la musculatura llisa bronquial",
    correction: false,
    index: 80,
  },
  {
    answer:
      "En farmacologia de la seguretat, les proves bàsiques (core battery tests) inclouen l’estudi del efectes sobre sistema nerviós central, sistema respiratori i sistema cardiovascular",
    correction: true,
    index: 81,
  },
  {
    answer: "La dosi MABEL es menor que la DE50 per a un mateix fàrmac",
    correction: true,
    index: 82,
  },
  {
    answer:
      "Un dels avantatges que presenta un assaig clínic controlat sobre un estudi epidemiològic observacional es que el primer representa millor la població general",
    correction: false,
    index: 83,
  },
  {
    answer:
      "En un assaig clínic controlat els paràmetres a avaluar han de ser objectius",
    correction: false,
    index: 84,
  },
  {
    answer:
      "Les RAM de tipus A nomes poden detectar-se en estudis de farmacovigilancia",
    correction: false,
    index: 85,
  },
  {
    answer:
      "El pictograma en forma de triangle negre invertit indica que el medicament esta subjecte a un seguiment mes intensiu, ates que es disposa d’informació limitada sobre la seva toxicitat",
    correction: true,
    index: 86,
  },
  {
    answer:
      "El següent gràfic mostra ka concentració plasmàtica en funció de temps d’un fàrmac administrat en dosis repetides i intervals de temps regulats. Es mostren les corbes d’un pacient amb la funció renal normal (línia gris prima) i d’un pacient amb insuficiència renal (línia negra gruixuda), i el nivell eficaç (línia gris horitzontal)",
    index: 87,
  },
  {
    answer:
      "En el pacient amb insuficiència renal no s’ha modificat la dosi ni l’interval d’administració del fàrmac",
    correction: false,
    index: 88,
    parent: 87,
  },
  {
    answer:
      "En el pacient amb insuficiència renal probablement s’ha incrementat la dosi del fàrmac",
    correction: false,
    parent: 87,
    index: 89,
  },
  {
    answer:
      "La concentració plasmàtica estable (o mitjana) en el pacient amb insuficiència renal s’ha incrementat",
    correction: true,
    parent: 87,
    index: 90,
  },
  {
    answer:
      "Alguns dels canvis que es produeixen en la funció renal com conseqüència de l’envelliment son:",
    index: 91,
  },
  {
    answer: "Augment de la secreció tubular",
    correction: false,
    index: 92,
    parent: 91,
  },
  {
    answer: "Reducció de la taxa de filtració glomerular",
    correction: true,
    index: 93,
    parent: 91,
  },
  {
    answer:
      "Els marcadors de toxicitat per al tractament oncològic es determinen a partir de l’àcid nucleic de la cèl·lula tumoral",
    correction: false,
    index: 94,
  },
  {
    answer:
      "Per personalitzar el tractament amb neurolèptics s’analitzen com a marcadors diversos CYP determinats en l’àcid nucleic dels glòbuls blancs",
    correction: true,
    index: 95,
  },
];

export const quiz = data.filter(v => v.correction).reduce((res, val, i) => {
  let getParentVal = parent => data.filter(v => v.index == parent)[0].answer;
  let value = !val.parent ? val : {...val, answer:`${getParentVal(val.parent)}. ${val.answer}` }
    res = [...res, { ...value}];
  return res;
}, []);
