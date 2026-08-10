(function(){
'use strict';

/* ============================================================
   1. QUESTIONS
   Each option carries BOTH scoring layers:
   - sP/sS  -> superpower primary(+2) / secondary(+1)
   - dP/dS  -> professional dimension primary(+2) / secondary(+1)
   ============================================================ */
const QUESTIONS = [
  { q:"Ti affidano un progetto che non hai mai fatto prima. Da dove parti?", options:[
    { label:"Mi vengono subito in mente idee diverse da provare.", sP:"ME", sS:"AL", dP:"CRE", dS:"EXP" },
    { label:"Comincio a lavorarci: so che capirò sempre di più facendo esperienza.", sP:"SI", sS:"OR", dP:"TEC", dS:"EXP" },
    { label:"Guardo il quadro generale e penso a come organizzare il lavoro.", sP:"OR", sS:"PE", dP:"ORG", dS:"ANA" },
    { label:"Cerco di capire al volo quale potrebbe essere la strada migliore.", sP:"VR", sS:"ME", dP:"ANA", dS:"DEC" },
    { label:"Anche se non so esattamente come andrà, sono curioso/a di mettermi alla prova.", sP:"GO", sS:"SI", dP:"EXP", dS:"DEC" },
  ]},
  { q:"Stai facendo qualcosa di difficile e i primi tentativi vanno male. Tu...", options:[
    { label:"Continuo a provare: ogni tentativo mi fa migliorare.", sP:"SI", sS:"OR", dP:"TEC", dS:"ORG" },
    { label:"Cambio approccio: evidentemente serve un'altra strada.", sP:"AL", sS:"VR", dP:"EXP", dS:"CRE" },
    { label:"Controllo cosa sto sbagliando e correggo il metodo.", sP:"CR", sS:"SI", dP:"ANA", dS:"PRE" },
    { label:"Non mi lascio bloccare dalla paura di sbagliare e ci riprovo.", sP:"GO", sS:"SI", dP:"DEC", dS:"EXP" },
    { label:"Elimino le distrazioni e mi concentro sul problema.", sP:"PE", sS:"ME", dP:"PRE", dS:"ANA" },
  ]},
  { q:"Lavorate in gruppo e nessuno sa bene come procedere. Tu...", options:[
    { label:"Provo a mettere ordine: chi fa cosa? Da dove partiamo?", sP:"OR", sS:"PE", dP:"ORG", dS:"DEC" },
    { label:"Cerco di spiegare il problema in modo che tutti possano dire la loro.", sP:"BV", sS:"OR", dP:"REL", dS:"DEC" },
    { label:"Se serve qualcuno che prenda l'iniziativa, mi faccio avanti.", sP:"EG", sS:"OR", dP:"DEC", dS:"REL" },
    { label:"Lancio un'idea diversa che potrebbe sbloccare la situazione.", sP:"ME", sS:"AL", dP:"CRE", dS:"EXP" },
    { label:"Osservo persone e situazione per capire velocemente cosa potrebbe funzionare.", sP:"VR", sS:"ME", dP:"ANA", dS:"REL" },
  ]},
  { q:"Domani hai una prova molto importante. Come ti comporti?", options:[
    { label:"Mi preparo con metodo: voglio arrivare sapendo di aver fatto tutto il possibile.", sP:"CR", sS:"SI", dP:"ORG", dS:"PRE" },
    { label:"Cerco soprattutto di rimanere concentrato/a quando arriverà il momento.", sP:"PE", sS:"ME", dP:"PRE", dS:"ANA" },
    { label:"Continuo ad allenarmi sulle cose che ancora non mi riescono.", sP:"SI", sS:"OR", dP:"TEC", dS:"ORG" },
    { label:"Un po' di paura c'è, ma non voglio che mi impedisca di provarci.", sP:"GO", sS:"SI", dP:"DEC", dS:"EXP" },
    { label:"Mi preparo anche all'idea che qualcosa possa cambiare e che dovrò adattarmi.", sP:"AL", sS:"ME", dP:"EXP", dS:"CRE" },
  ]},
  { q:"Durante un progetto succede qualcosa che nessuno aveva previsto.", options:[
    { label:"Cambio rapidamente il modo in cui lo stavo affrontando.", sP:"AL", sS:"PE", dP:"EXP", dS:"CRE" },
    { label:"Metto sul tavolo una proposta concreta e mi assumo la responsabilità di far ripartire il lavoro.", sP:"EG", sS:"OR", dP:"DEC", dS:"ORG" },
    { label:"Cerco di capire velocemente cosa sta davvero succedendo.", sP:"VR", sS:"AL", dP:"ANA", dS:"TEC" },
    { label:"Riorganizzo attività e priorità in base alla nuova situazione.", sP:"OR", sS:"PE", dP:"ORG", dS:"DEC" },
    { label:"Mantengo il focus: prima risolviamo la cosa più importante.", sP:"PE", sS:"SI", dP:"PRE", dS:"ORG" },
  ]},
  { q:"Quale frase ti farebbe più piacere sentirti dire?", options:[
    { label:"\"Hai sempre idee a cui gli altri non pensano.\"", sP:"ME", sS:"AL", dP:"CRE", dS:"EXP" },
    { label:"\"Quando serve qualcuno che porti avanti il risultato, ci sei.\"", sP:"EG", sS:"BV", dP:"DEC", dS:"ORG" },
    { label:"\"Sai spiegare le cose e coinvolgere gli altri.\"", sP:"BV", sS:"PE", dP:"REL", dS:"DEC" },
    { label:"\"Hai il coraggio di provarci anche quando non sai come andrà.\"", sP:"GO", sS:"AL", dP:"DEC", dS:"EXP" },
    { label:"\"Capisci le situazioni molto velocemente.\"", sP:"VR", sS:"AL", dP:"ANA", dS:"TEC" },
  ]},
  { q:"Entri in una squadra nuova in cui non conosci nessuno. Cosa fai spontaneamente?", options:[
    { label:"Osservo un po' per capire persone, ruoli e dinamiche.", sP:"VR", sS:"PE", dP:"ANA", dS:"REL" },
    { label:"Parlo con le persone e cerco subito di creare un contatto.", sP:"BV", sS:"EG", dP:"REL", dS:"DEC" },
    { label:"Mi concentro sul mio compito e cerco di farlo bene.", sP:"PE", sS:"CR", dP:"PRE", dS:"TEC" },
    { label:"Mi adatto: prima capisco come funziona quel gruppo e poi trovo il mio spazio.", sP:"AL", sS:"GO", dP:"EXP", dS:"REL" },
    { label:"Se c'è bisogno di qualcuno che si assuma una responsabilità, non mi tiro indietro.", sP:"EG", sS:"BV", dP:"DEC", dS:"ORG" },
  ]},
  { q:"Hai trovato un metodo che funziona. Un amico te ne mostra uno completamente diverso.", options:[
    { label:"Prima di cambiare metodo, confronto le alternative e scelgo quella che posso applicare con più continuità.", sP:"CR", sS:"GO", dP:"ORG", dS:"PRE" },
    { label:"Cerco di capire quale dei due funziona meglio e perché.", sP:"CR", sS:"GO", dP:"ANA", dS:"PRE" },
    { label:"Provo a prendere qualcosa da entrambi e creare una soluzione mia.", sP:"ME", sS:"BV", dP:"CRE", dS:"EXP" },
    { label:"Se il mio metodo funziona, continuo ad allenarlo e perfezionarlo.", sP:"SI", sS:"GO", dP:"TEC", dS:"PRE" },
    { label:"Anche se non sono sicuro/a che funzionerà, sono disposto/a a sperimentarlo.", sP:"GO", sS:"EG", dP:"EXP", dS:"DEC" },
  ]},
  { q:"Hai poco tempo e molte cose da fare.", options:[
    { label:"Stabilisco le priorità e organizzo cosa fare prima e cosa dopo.", sP:"OR", sS:"EG", dP:"ORG", dS:"PRE" },
    { label:"Elimino le distrazioni e mi concentro su una cosa alla volta.", sP:"PE", sS:"CR", dP:"PRE", dS:"ORG" },
    { label:"Se siamo in gruppo, chiarisco subito con gli altri cosa serve e cosa deve fare ciascuno.", sP:"BV", sS:"EG", dP:"REL", dS:"ORG" },
    { label:"Individuo subito ciò che può incidere di più sul risultato e parto da lì.", sP:"EG", sS:"BV", dP:"DEC", dS:"ANA" },
    { label:"Mi do delle regole e le rispetto fino alla fine.", sP:"CR", sS:"GO", dP:"PRE", dS:"ORG" },
  ]},
  { q:"Stai presentando un progetto e ti fanno una domanda che non avevi previsto.", options:[
    { label:"Ragiono sul momento e provo a trovare una risposta intuitiva.", sP:"VR", sS:"ME", dP:"ANA", dS:"EXP" },
    { label:"Cambio prospettiva e provo ad affrontarla da un'altra direzione.", sP:"AL", sS:"VR", dP:"EXP", dS:"CRE" },
    { label:"Mantengo la concentrazione e penso bene prima di rispondere.", sP:"PE", sS:"CR", dP:"PRE", dS:"ANA" },
    { label:"Anche se non sono sicuro/a al 100%, provo a prendere la parola.", sP:"EG", sS:"BV", dP:"DEC", dS:"REL" },
    { label:"Cerco di spiegare la mia risposta nel modo più chiaro possibile.", sP:"BV", sS:"EG", dP:"REL", dS:"DEC" },
  ]},
  { q:"Un tuo progetto sta andando bene. Cosa ti viene più naturale fare?", options:[
    { label:"Cercare comunque un piccolo miglioramento.", sP:"SI", sS:"CR", dP:"TEC", dS:"ANA" },
    { label:"Controllare che continui a funzionare come previsto.", sP:"CR", sS:"GO", dP:"PRE", dS:"ORG" },
    { label:"Pensare a una nuova idea per farlo evolvere.", sP:"ME", sS:"BV", dP:"CRE", dS:"EXP" },
    { label:"Raccontare agli altri quello che abbiamo fatto e valorizzare il risultato.", sP:"BV", sS:"EG", dP:"REL", dS:"DEC" },
    { label:"Guardare avanti e capire quale dovrebbe essere la prossima mossa.", sP:"OR", sS:"VR", dP:"ORG", dS:"ANA" },
  ]},
  { q:"Ultima domanda. Scegli d'istinto la frase che senti più tua.", options:[
    { label:"\"Se non c'è una strada, posso inventarla.\"", sP:"ME", sS:"VR", dP:"CRE", dS:"EXP" },
    { label:"\"Non devo riuscirci subito. Posso continuare a migliorare.\"", sP:"SI", sS:"CR", dP:"TEC", dS:"ORG" },
    { label:"\"Se cambia la situazione, posso cambiare anch'io.\"", sP:"AL", sS:"VR", dP:"EXP", dS:"CRE" },
    { label:"\"Prima capisco il campo. Poi faccio la mia mossa.\"", sP:"OR", sS:"VR", dP:"ANA", dS:"ORG" },
    { label:"\"Se vale la pena provarci, parto anche senza sapere come andrà.\"", sP:"GO", sS:"CR", dP:"DEC", dS:"EXP" },
  ]},
];

/* ============================================================
   2. SUPERPOWERS (player cards)
   ============================================================ */
const POWERS = {
  ME:{ athlete:"Lionel Messi", athleteEmoji:"⚽", name:"Fantasia", keywords:"CREATIVITÀ • IDEE • ORIGINALITÀ",
       desc:"Vedi possibilità che gli altri possono non vedere immediatamente e ti viene naturale cercare strade personali per affrontare un problema.",
       top:["💡 Generare idee","🧩 Trovare soluzioni originali","👀 Vedere possibilità alternative","🎨 Creare qualcosa di nuovo"],
       motto:"VEDI QUELLO CHE GLI ALTRI NON VEDONO." },
  SI:{ athlete:"Jannik Sinner", athleteEmoji:"🎾", name:"Tenacia", keywords:"COSTANZA • CRESCITA • PERSEVERANZA",
       desc:"Non hai bisogno di riuscire tutto subito. Ti viene naturale migliorare progressivamente, imparare dagli errori e continuare verso il risultato.",
       top:["🎯 Portare a termine gli obiettivi","📈 Migliorare progressivamente","🧠 Imparare dagli errori","⏱️ Lavorare con continuità"],
       motto:"OGNI COLPO È MIGLIORE DI IERI." },
  AL:{ athlete:"Carlos Alcaraz", athleteEmoji:"🎾", name:"Versatilità", keywords:"ADATTAMENTO • FLESSIBILITÀ • CAMBIAMENTO",
       desc:"Quando cambia la situazione, sai cambiare anche il tuo modo di affrontarla.",
       top:["🔄 Adattarti ai cambiamenti","🧩 Provare approcci diversi","⚡ Reagire agli imprevisti","🌍 Muoversi in situazioni nuove"],
       motto:"CAMBIA IL GIOCO." },
  OR:{ athlete:"Alessia Orro", athleteEmoji:"🏐", name:"Strategia", keywords:"VISIONE • ORGANIZZAZIONE • PIANIFICAZIONE",
       desc:"Ti viene naturale leggere il campo prima di muoverti e cercare il modo migliore per far funzionare insieme persone, informazioni e obiettivi.",
       top:["🧠 Pianificare","👥 Coordinare","🎯 Stabilire le priorità","👀 Vedere il quadro generale"],
       motto:"PRIMA DI MUOVERTI, STUDIA IL CAMPO." },
  PE:{ athlete:"Federica Pellegrini", athleteEmoji:"🏊", name:"Concentrazione", keywords:"FOCUS • LUCIDITÀ • ATTENZIONE",
       desc:"Quando hai un obiettivo sai mettere il resto in secondo piano e concentrare le tue energie su ciò che conta.",
       top:["🎯 Restare sull'obiettivo","🧠 Mantenere lucidità","📵 Gestire le distrazioni","🔍 Curare ciò che richiede attenzione"],
       motto:"FOCUS SUL TUO OBIETTIVO." },
  BV:{ athlete:"Bebe Vio", athleteEmoji:"🤺", name:"Comunicazione", keywords:"ESPRESSIONE • CONNESSIONE • COINVOLGIMENTO",
       desc:"Ti viene naturale far arrivare agli altri ciò che pensi. Parole, energia e personalità diventano strumenti per creare connessione.",
       top:["🗣️ Raccontare le tue idee","🤝 Creare connessioni","💡 Farti capire","🙋 Prendere la parola"],
       motto:"COMUNICA PER COINVOLGERE GLI ALTRI." },
  EG:{ athlete:"Paola Egonu", athleteEmoji:"🏐", name:"Impatto", keywords:"PRESENZA • RESPONSABILITÀ • INCISIVITÀ",
       desc:"Quando c'è bisogno di qualcuno che si faccia avanti, difficilmente vuoi rimanere a guardare. Ti piace poter incidere concretamente sul risultato.",
       top:["🙋 Assumerti responsabilità","🗣️ Esprimere la tua posizione","⚡ Passare all'azione","🎯 Incidere sul risultato"],
       motto:"ENTRA IN CAMPO E FAI LA DIFFERENZA." },
  GO:{ athlete:"Sofia Goggia", athleteEmoji:"🎿", name:"Coraggio", keywords:"AUDACIA • DECISIONE • SFIDA",
       desc:"Non hai bisogno di sapere già come andrà per metterti in gioco. Quando qualcosa ti sfida, sai partire e provarci.",
       top:["🚀 Metterti in gioco","⛷️ Affrontare nuove sfide","💪 Uscire dalla tua zona di comfort","🎯 Decidere anche senza avere tutte le certezze"],
       motto:"PER SCENDERE, DEVI AVERE IL CORAGGIO DI PARTIRE." },
  VR:{ athlete:"Valentino Rossi", athleteEmoji:"🏍️", name:"Intuito", keywords:"LETTURA • SENSIBILITÀ • SCELTA",
       desc:"Ti viene naturale leggere rapidamente quello che succede intorno a te, cogliere segnali e individuare una possibile direzione.",
       top:["👀 Leggere le situazioni","🧠 Fare collegamenti rapidamente","🏍️ Individuare la traiettoria migliore","⚡ Cogliere il momento"],
       motto:"MANTIENI LA TRAIETTORIA." },
  CR:{ athlete:"Cristiano Ronaldo", athleteEmoji:"⚽", name:"Disciplina", keywords:"METODO • PREPARAZIONE • CONTINUITÀ",
       desc:"Sai che il risultato non dipende soltanto dal talento. Ti viene naturale prepararti, seguire un metodo e lavorare con continuità.",
       top:["📅 Organizzare il lavoro","🎯 Seguire un obiettivo","✅ Rispettare gli impegni","📈 Alzare progressivamente i tuoi standard"],
       motto:"L'ALLENAMENTO COSTRUISCE IL TALENTO." },
};

/* ============================================================
   3. GROWTH MAP — superpower to "far fiorire"
   ============================================================ */
const GROWTH_TARGET = { ME:"CR", SI:"OR", AL:"PE", OR:"EG", PE:"ME", BV:"OR", EG:"VR", GO:"CR", VR:"OR", CR:"ME" };

const GROWTH_TEXT = {
  ME:{ desc:"Le idee sono il tuo punto di forza. Allenare metodo e continuità può aiutarti a trasformarle più facilmente in risultati.",
       actions:["📝 Dai una struttura alle tue idee","⏱️ Fissa piccoli obiettivi","✅ Porta a termine ciò che inizi"] },
  SI:{ desc:"La tua tenacia ti porta lontano. La strategia può aiutarti a scegliere meglio dove mettere le tue energie.",
       actions:["👀 Osserva prima di partire","🎯 Scegli le priorità","♟️ Pensa una mossa avanti"] },
  AL:{ desc:"Sai cambiare rapidamente strada. Allenare il focus può aiutarti a capire quando cambiare e quando continuare nella stessa direzione.",
       actions:["🎯 Scegli un obiettivo alla volta","📵 Riduci le distrazioni","⏳ Rimani sulla stessa attività quando ne vale la pena"] },
  OR:{ desc:"Sai leggere il campo e costruire un piano. Allenare la capacità di esporti può aiutarti a trasformare più velocemente la strategia in azione.",
       actions:["🙋 Fatti avanti quando hai un'idea","🗣️ Esprimi chiaramente la tua posizione","⚡ Trasforma il piano nella prima azione concreta"] },
  PE:{ desc:"Sai focalizzarti sull'obiettivo. Lasciare spazio alla fantasia può aiutarti a scoprire possibilità che non avevi considerato.",
       actions:["💡 Cerca almeno tre alternative","❓ Chiediti \"E se provassi diversamente?\"","🎨 Lascia spazio alle idee prima di scegliere"] },
  BV:{ desc:"Sai comunicare e coinvolgere le persone. Aggiungere strategia può aiutarti a capire quando, come e con chi far arrivare il tuo messaggio.",
       actions:["🎯 Chiarisci cosa vuoi ottenere","👀 Osserva chi hai davanti","♟️ Scegli come far arrivare il messaggio"] },
  EG:{ desc:"Hai voglia di incidere e non temi la responsabilità. Allenare l'intuito può aiutarti a riconoscere il momento migliore per agire.",
       actions:["👀 Osserva prima di intervenire","🧠 Ascolta le tue prime impressioni","🏍️ Cerca il momento giusto per accelerare"] },
  GO:{ desc:"Hai il coraggio di partire anche quando non hai tutte le certezze. Il metodo può aiutarti a preparare meglio il terreno prima di affrontare una nuova discesa.",
       actions:["📋 Preparati prima di partire","🎯 Definisci un obiettivo","📐 Trasforma il coraggio in azioni concrete"] },
  VR:{ desc:"Sai leggere rapidamente le situazioni. La strategia può aiutarti a trasformare una buona intuizione in un piano ancora più solido.",
       actions:["📝 Metti nero su bianco la tua idea","♟️ Pensa alla mossa successiva","🎯 Definisci prima l'obiettivo"] },
  CR:{ desc:"Metodo e preparazione sono una grande forza. Lasciare spazio alla fantasia può aiutarti a trovare possibilità nuove.",
       actions:["💡 Prova qualcosa che non hai mai fatto","🧪 Concediti un tentativo senza conoscere già il risultato","❓ Chiediti \"Quale altra strada potrei provare?\""] },
};

/* ============================================================
   4. PROFESSIONAL DIMENSIONS
   ============================================================ */
const DIM_ORDER = ["REL","ANA","CRE","ORG","TEC","DEC","PRE","EXP"];
const DIM_MAX   = { REL:12, ANA:21, CRE:16, ORG:18, TEC:15, DEC:21, PRE:15, EXP:19 };

/* ============================================================
   5. AREAS — weights follow DIM_ORDER exactly
   ============================================================ */
const AREAS = [
  { code:"HR",  name:"Risorse Umane", emoji:"👥", keywords:"PERSONE • ORGANIZZAZIONE • COMUNICAZIONE", family:"PEOPLE",
    desc:"Si lavora con le persone e con l'organizzazione: selezione, formazione, sviluppo, amministrazione e progetti HR.",
    bullets:["🤝 Ti piace lavorare con le persone","🗣️ Comunichi volentieri","📋 Ti piace organizzare","👀 Sei curioso/a di capire capacità e motivazioni"],
    weights:[3,1,1,2,0,2,1,1] },
  { code:"SAL", name:"Commerciale & Business Development", emoji:"📈", keywords:"RELAZIONE • NEGOZIAZIONE • RISULTATO", family:"PEOPLE",
    desc:"Si cercano clienti, opportunità e nuove possibilità di business costruendo relazioni e proponendo soluzioni.",
    bullets:["🤝 Ti piace conoscere persone nuove","🗣️ Ti piace presentare idee","🎯 Ti motivano gli obiettivi","🚀 Ti piace cercare opportunità"],
    weights:[3,1,1,1,0,3,0,2] },
  { code:"MKT", name:"Marketing & Comunicazione", emoji:"📣", keywords:"CREATIVITÀ • MESSAGGIO • PERSONE", family:"CREATIVE",
    desc:"Si studiano mercati e pubblico e si costruiscono idee, contenuti e campagne per raccontare prodotti, servizi e brand.",
    bullets:["💡 Ti vengono idee","🗣️ Ti piace comunicare","👀 Osservi cosa interessa alle persone","🎨 Ti piace creare"],
    weights:[2,1,3,1,0,2,0,2] },
  { code:"IT",  name:"IT & Digital", emoji:"💻", keywords:"LOGICA • TECNOLOGIA • SOLUZIONI", family:"TECH",
    desc:"Si progettano, sviluppano e gestiscono strumenti e sistemi digitali per risolvere problemi e migliorare il modo di lavorare.",
    bullets:["💻 Ti incuriosisce la tecnologia","🧩 Ti piace risolvere problemi","🧠 Ragioni in modo logico","🔧 Ti piace capire come funzionano le cose"],
    weights:[0,3,2,1,3,0,2,2] },
  { code:"ENG", name:"Engineering & R&D", emoji:"⚙️", keywords:"TECNICA • PROGETTAZIONE • INNOVAZIONE", family:"TECH",
    desc:"Si progettano prodotti, impianti, sistemi e nuove soluzioni tecniche.",
    bullets:["⚙️ Ti piace capire come funzionano le cose","📐 Ti piace progettare","🧪 Ti piace sperimentare","🧩 Ti appassionano i problemi complessi"],
    weights:[0,3,2,2,3,0,2,1] },
  { code:"OPS", name:"Produzione & Operations", emoji:"🏭", keywords:"CONCRETEZZA • PROCESSO • RISULTATO", family:"OPERATIONS",
    desc:"Si trasformano progetti e materiali in prodotti reali, organizzando persone, macchine, tempi e processi.",
    bullets:["🔧 Preferisci vedere risultati concreti","📋 Ti piace organizzare","⚙️ Ti interessano processi e macchine","🎯 Ti piace far funzionare bene le cose"],
    weights:[1,2,0,3,3,1,2,0] },
  { code:"SCM", name:"Supply Chain & Logistica", emoji:"🚚", keywords:"FLUSSI • ORGANIZZAZIONE • COORDINAMENTO", family:"OPERATIONS",
    desc:"Si organizzano materiali, fornitori, magazzini, trasporti e consegne affinché tutto arrivi dove serve, quando serve.",
    bullets:["🧩 Ti piace incastrare attività diverse","📦 Ti incuriosisce come si muovono prodotti e materiali","📊 Ti piace pianificare","⏱️ Ti interessa ottimizzare tempi e risorse"],
    weights:[1,2,0,3,2,1,2,1] },
  { code:"FIN", name:"Finance & Control", emoji:"💰", keywords:"NUMERI • ANALISI • DECISIONI", family:"NUMBERS",
    desc:"Si utilizzano numeri e dati economici per capire come sta andando l'azienda e supportare le decisioni.",
    bullets:["🔢 Ti trovi bene con i numeri","📊 Ti piace analizzare dati","🔍 Sei preciso/a","🧠 Ti piace capire il perché dei risultati"],
    weights:[0,3,0,2,1,0,3,0] },
  { code:"LEG", name:"Legal & Compliance", emoji:"⚖️", keywords:"REGOLE • ANALISI • TUTELA", family:"NUMBERS",
    desc:"Si interpretano norme, contratti e regole per aiutare l'organizzazione a operare correttamente e gestire i rischi.",
    bullets:["📚 Ti piace approfondire","🔍 Sei attento/a ai dettagli","⚖️ Ti interessano regole e diritti","🧠 Ti piace ragionare sui casi"],
    weights:[1,2,0,1,0,1,3,0] },
  { code:"ADM", name:"Amministrazione", emoji:"📋", keywords:"PRECISIONE • ORGANIZZAZIONE • AFFIDABILITÀ", family:"NUMBERS",
    desc:"Si gestiscono documenti, dati, procedure e attività necessarie al funzionamento quotidiano dell'organizzazione.",
    bullets:["📋 Ti piace tenere tutto in ordine","🔍 Sei preciso/a","📅 Ti piace organizzare","✅ Ti dà soddisfazione far quadrare le cose"],
    weights:[1,2,0,3,0,0,3,0] },
  { code:"QUA", name:"Quality", emoji:"🔎", keywords:"CONTROLLO • TECNICA • MIGLIORAMENTO", family:"TECH",
    desc:"Si verifica che prodotti e processi rispettino gli standard e si cercano modi per migliorarli.",
    bullets:["🔍 Noti facilmente ciò che non torna","⚙️ Ti interessano processi e prodotti","📏 Ti piace lavorare con criteri chiari","📈 Ti piace migliorare ciò che già funziona"],
    weights:[1,2,0,2,3,0,3,0] },
  { code:"PRO", name:"Procurement / Acquisti", emoji:"🛒", keywords:"NEGOZIAZIONE • ANALISI • SCELTA", family:"OPERATIONS",
    desc:"Si cercano e valutano fornitori, si confrontano offerte e si negoziano condizioni.",
    bullets:["🤝 Ti piace negoziare","📊 Ti piace confrontare alternative","🎯 Sai prendere decisioni","🧩 Ti piace trovare equilibri tra esigenze diverse"],
    weights:[2,2,0,2,1,3,1,1] },
  { code:"PM",  name:"Project Management", emoji:"🎯", keywords:"ORGANIZZAZIONE • PERSONE • OBIETTIVI", family:"CROSS",
    desc:"Si coordinano attività, tempi e persone per portare un progetto dall'idea al risultato.",
    bullets:["📋 Ti piace organizzare","👥 Ti piace coordinarti con gli altri","🎯 Ragioni per obiettivi","🔄 Sai gestire cambiamenti e imprevisti"],
    weights:[2,2,1,3,1,2,1,2] },
  { code:"DES", name:"Design & Product", emoji:"🎨", keywords:"CREATIVITÀ • PERSONE • SOLUZIONI", family:"CREATIVE",
    desc:"Si immaginano e sviluppano prodotti, servizi ed esperienze cercando di renderli utili, semplici e interessanti.",
    bullets:["💡 Ti piace inventare","🎨 Ti interessa creare qualcosa di nuovo","👀 Osservi come le persone usano le cose","🧪 Ti piace provare e migliorare le idee"],
    weights:[1,1,3,1,2,1,0,3] },
  { code:"CUS", name:"Customer Service / Customer Experience", emoji:"🤝", keywords:"ASCOLTO • SOLUZIONE • RELAZIONE", family:"PEOPLE",
    desc:"Si aiutano clienti e utenti, si comprendono le loro esigenze e si cercano soluzioni.",
    bullets:["👂 Sai ascoltare","🤝 Ti piace aiutare le persone","🧩 Ti piace risolvere problemi","🗣️ Sai spiegare con chiarezza"],
    weights:[3,1,1,2,1,2,1,1] },
];

/* ============================================================
   6b. AREA AFFINITY — coherence pools per superpower.
   The 3 recommended areas are drawn primarily from the main
   superpower's pool, with the growth-power's pool only used as
   an optional "flavor" for the 3rd slot when it scores higher.
   ============================================================ */
const AREA_AFFINITY = {
  ME:{ areas:["DES","MKT","ENG","IT","PM"] },
  SI:{ areas:["OPS","QUA","SCM","PRO","ENG"] },
  AL:{ areas:["MKT","PM","CUS","DES","SAL"] },
  OR:{ areas:["PM","SAL","OPS","SCM","HR"] },
  PE:{ areas:["QUA","FIN","LEG","ADM","ENG"] },
  BV:{ areas:["MKT","HR","CUS","SAL","PM"] },
  EG:{ areas:["SAL","HR","PM","MKT","CUS"] },
  GO:{ areas:["SAL","PRO","IT","ENG","PM"] },
  VR:{ areas:["MKT","SAL","DES","HR","CUS"] },
  CR:{ areas:["ADM","FIN","LEG","OPS","QUA"] },
};

/* ============================================================
   6c. CALIBRATION — Z = (raw - mean) / sd ; final = Z + correction
   ============================================================ */
const CALIBRATION = {
  HR:  { mean:0.276157, sd:0.038659, correction:0.081617 },
  SAL: { mean:0.275993, sd:0.051502, correction:-0.174814 },
  MKT: { mean:0.262955, sd:0.045332, correction:-0.450032 },
  IT:  { mean:0.246527, sd:0.038882, correction:-0.188775 },
  ENG: { mean:0.246046, sd:0.040592, correction:0.035026 },
  OPS: { mean:0.258144, sd:0.049011, correction:0.274872 },
  SCM: { mean:0.266071, sd:0.035168, correction:0.322625 },
  FIN: { mean:0.263558, sd:0.071417, correction:0.217971 },
  LEG: { mean:0.276780, sd:0.059138, correction:0.041154 },
  ADM: { mean:0.278467, sd:0.067201, correction:0.188621 },
  QUA: { mean:0.256096, sd:0.059600, correction:0.285500 },
  PRO: { mean:0.272087, sd:0.032328, correction:-0.031331 },
  PM:  { mean:0.269712, sd:0.016813, correction:-0.036345 },
  DES: { mean:0.251531, sd:0.041363, correction:-0.633579 },
  CUS: { mean:0.269799, sd:0.032243, correction:0.067492 },
};

/* ============================================================
   7. STATE
   ============================================================ */
let currentIndex = 0;
const answers = new Array(QUESTIONS.length).fill(null);

/* ============================================================
   8. DOM REFS
   ============================================================ */
const screens = {
  home:   document.getElementById('screen-home'),
  quiz:   document.getElementById('screen-quiz'),
  calc:   document.getElementById('screen-calc'),
  result: document.getElementById('screen-result'),
};
const qNumberEl   = document.getElementById('q-number');
const progressFillEl   = document.getElementById('progress-fill');
const progressMarkerEl = document.getElementById('progress-marker');
const questionTextEl   = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
let isTransitioning = false;
let autoAdvanceTimeout = null;

function showScreen(name){
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo({ top:0, behavior:'auto' });
}

/* ============================================================
   9. QUIZ RENDERING
   ============================================================ */
function renderQuestion(){
  const q = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const fillPct = (currentIndex / total) * 100;

  qNumberEl.textContent = String(currentIndex + 1).padStart(2,'0');
  progressFillEl.style.width = fillPct + '%';
  progressMarkerEl.style.left = fillPct + '%';

  questionTextEl.textContent = q.q;
  optionsContainer.innerHTML = '';

  const letters = ['A','B','C','D','E'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    if (answers[currentIndex] === i) btn.classList.add('selected');
    btn.innerHTML = '<span class="letter">' + letters[i] + '</span><span>' + opt.label + '</span>';
    btn.addEventListener('click', () => selectAnswer(i));
    optionsContainer.appendChild(btn);
  });

  btnPrev.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
}

function selectAnswer(i){
  if (isTransitioning) return;
  answers[currentIndex] = i;
  renderQuestion();
  isTransitioning = true;
  autoAdvanceTimeout = setTimeout(() => {
    isTransitioning = false;
    nextQuestion();
  }, 420);
}

function previousQuestion(){
  if (autoAdvanceTimeout){ clearTimeout(autoAdvanceTimeout); isTransitioning = false; }
  if (currentIndex > 0){
    currentIndex--;
    renderQuestion();
  }
}

function nextQuestion(){
  if (answers[currentIndex] === null) return;
  if (currentIndex < QUESTIONS.length - 1){
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

/* ============================================================
   10. SCORING — SUPERPOWER (with tie-break)
   ============================================================ */
function calculateSuperpower(){
  const totals = {};
  const primaryCounts = {};
  Object.keys(POWERS).forEach(code => { totals[code] = 0; primaryCounts[code] = 0; });

  answers.forEach((choiceIndex, qIndex) => {
    const opt = QUESTIONS[qIndex].options[choiceIndex];
    totals[opt.sP] += 2;
    totals[opt.sS] += 1;
    primaryCounts[opt.sP] += 1;
  });

  return resolveSuperpowerTie(totals, primaryCounts);
}

function resolveSuperpowerTie(totals, primaryCounts){
  const maxScore = Math.max(...Object.values(totals));
  let tied = Object.keys(totals).filter(code => totals[code] === maxScore);

  if (tied.length > 1){
    const maxPrimary = Math.max(...tied.map(code => primaryCounts[code]));
    tied = tied.filter(code => primaryCounts[code] === maxPrimary);
  }
  if (tied.length > 1){
    const q12Choice = answers[11];
    const q12Primary = QUESTIONS[11].options[q12Choice].sP;
    if (tied.includes(q12Primary)) tied = [q12Primary];
  }
  if (tied.length > 1){
    tied = [ tied[Math.floor(Math.random() * tied.length)] ];
  }
  return tied[0];
}

/* ============================================================
   11. SCORING — PROFESSIONAL DIMENSIONS
   ============================================================ */
function calculateProfessionalDimensions(){
  const totals = {};
  DIM_ORDER.forEach(code => totals[code] = 0);
  answers.forEach((choiceIndex, qIndex) => {
    const opt = QUESTIONS[qIndex].options[choiceIndex];
    totals[opt.dP] += 2;
    totals[opt.dS] += 1;
  });
  return totals;
}

function normalizeDimensions(totals){
  const norm = {};
  DIM_ORDER.forEach(code => { norm[code] = totals[code] / DIM_MAX[code]; });
  return norm;
}

function calculateAreaScores(norm){
  const raw = {};
  AREAS.forEach(area => {
    let sum = 0, wsum = 0;
    DIM_ORDER.forEach((code, i) => {
      const w = area.weights[i];
      sum += norm[code] * w;
      wsum += w;
    });
    raw[area.code] = wsum > 0 ? sum / wsum : 0;
  });
  return raw;
}

function calibrateAreaScores(raw){
  const final = {};
  AREAS.forEach(area => {
    const c = CALIBRATION[area.code];
    const z = (raw[area.code] - c.mean) / c.sd;
    final[area.code] = z + c.correction;
  });
  return final;
}

/* ============================================================
   12. AREA SELECTION — always coherent with the main superpower.
   The 3 areas are the top-scoring ones (by the person's actual
   answers) drawn exclusively from the primary superpower's
   5-area affinity pool, so the result is always thematically
   consistent while still being personalized.
   ============================================================ */
function selectRecommendedAreas(final, powerCode){
  const primaryPool = AREA_AFFINITY[powerCode].areas;
  const ranked = primaryPool.slice().sort((a,b) => final[b] - final[a]);
  return ranked.slice(0, 3);
}

/* ============================================================
   13. FLOW CONTROL
   ============================================================ */
function finishQuiz(){
  showScreen('calc');
  setTimeout(() => {
    renderResult();
    showScreen('result');
  }, 1800);
}

function restartTest(){
  if (autoAdvanceTimeout){ clearTimeout(autoAdvanceTimeout); }
  isTransitioning = false;
  currentIndex = 0;
  answers.fill(null);
  document.getElementById('areas-detail-card').hidden = true;
  document.getElementById('btn-discover-areas').textContent = '🔎 Scopri cosa si fa in queste aree';
  renderQuestion();
  showScreen('home');
}

/* ============================================================
   14. RESULT RENDERING
   ============================================================ */
function renderResult(){
  const powerCode = calculateSuperpower();
  const power = POWERS[powerCode];
  const growthCode = GROWTH_TARGET[powerCode];
  const growthPower = POWERS[growthCode];
  const growthText = GROWTH_TEXT[powerCode];

  const dimTotals = calculateProfessionalDimensions();
  const dimNorm = normalizeDimensions(dimTotals);
  const areaRaw = calculateAreaScores(dimNorm);
  const areaFinal = calibrateAreaScores(areaRaw);
  const topAreaCodes = selectRecommendedAreas(areaFinal, powerCode);

  /* -- player card -- */
  document.getElementById('pc-athlete-emoji').textContent = power.athleteEmoji;
  document.getElementById('pc-athlete-name').textContent = power.athlete;
  document.getElementById('pc-power-name').textContent = power.name;
  document.getElementById('pc-keywords').textContent = power.keywords;
  document.getElementById('pc-description').textContent = power.desc;
  document.getElementById('pc-motto').textContent = power.motto;

  const topGrid = document.getElementById('pc-top-grid');
  topGrid.innerHTML = '';
  power.top.forEach(item => {
    const [icon, ...rest] = item.split(' ');
    const chip = document.createElement('div');
    chip.className = 'stat-chip';
    chip.innerHTML = '<span class="stat-icon">' + icon + '</span><span>' + rest.join(' ') + '</span>';
    topGrid.appendChild(chip);
  });

  /* -- growth card -- */
  document.getElementById('gc-athlete-emoji').textContent = growthPower.athleteEmoji;
  document.getElementById('gc-athlete-name').textContent = growthPower.athlete;
  document.getElementById('gc-power-name').textContent = growthPower.name;
  document.getElementById('gc-description').textContent = growthText.desc;

  const actionsList = document.getElementById('gc-actions');
  actionsList.innerHTML = '';
  growthText.actions.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a;
    actionsList.appendChild(li);
  });

  /* -- areas -- */
  const areasListEl = document.getElementById('areas-list');
  areasListEl.innerHTML = '';
  const areaObjs = topAreaCodes.map(code => AREAS.find(a => a.code === code));
  areaObjs.forEach(area => {
    const pill = document.createElement('div');
    pill.className = 'area-pill';
    pill.innerHTML = '<span class="area-emoji">' + area.emoji + '</span><span>' + area.name + '</span>';
    areasListEl.appendChild(pill);
  });

  const detailListEl = document.getElementById('areas-detail-list');
  detailListEl.innerHTML = '';
  areaObjs.forEach(area => {
    const block = document.createElement('div');
    block.className = 'area-detail-block';
    const bulletsHtml = area.bullets.map(b => {
      const [icon, ...rest] = b.split(' ');
      return '<li><span>' + icon + '</span><span>' + rest.join(' ') + '</span></li>';
    }).join('');
    block.innerHTML =
      '<div class="area-detail-title">' + area.emoji + ' ' + area.name + '</div>' +
      '<div class="area-detail-keywords">' + area.keywords + '</div>' +
      '<p class="body-text">' + area.desc + '</p>' +
      '<h4 class="section-label">Potrebbe piacerti se...</h4>' +
      '<ul class="area-bullets">' + bulletsHtml + '</ul>';
    detailListEl.appendChild(block);
  });

  /* -- summary recap card -- */
  document.getElementById('sc-power-name').textContent = power.name;
  document.getElementById('sc-power-athlete').textContent = power.athlete;
  document.getElementById('sc-growth-name').textContent = growthPower.name;
  document.getElementById('sc-growth-athlete').textContent = growthPower.athlete;
  document.getElementById('sc-areas').textContent = areaObjs.map(a => a.name).join(' • ');
}

/* ============================================================
   15. EVENTS
   ============================================================ */
document.getElementById('btn-start').addEventListener('click', () => {
  renderQuestion();
  showScreen('quiz');
});
btnPrev.addEventListener('click', previousQuestion);
document.getElementById('btn-restart').addEventListener('click', restartTest);
document.getElementById('btn-discover-areas').addEventListener('click', function(){
  const detail = document.getElementById('areas-detail-card');
  const isHidden = detail.hidden;
  detail.hidden = !isHidden;
  this.textContent = isHidden ? '🔼 Nascondi i dettagli' : '🔎 Scopri cosa si fa in queste aree';
  if (isHidden){
    detail.scrollIntoView({ behavior:'smooth', block:'start' });
  }
});

/* ============================================================
   16. QR CODE — encodes the page's own live URL, so it always
   points to wherever this site is actually deployed.
   ============================================================ */
function renderHomeQR(){
  const box = document.getElementById('home-qr');
  if (!box || typeof qrcode !== 'function') return;
  try {
    const qr = qrcode(0, 'M');
    qr.addData(window.location.href);
    qr.make();
    box.innerHTML = qr.createSvgTag(4, 8);
  } catch (e){
    box.remove(); // fail silently if generation ever breaks; link/button still works
  }
}
renderHomeQR();

showScreen('home');

})();
