// ===== LE PARCOURS EN LEÇONS =====
// Chaque leçon :
//   titre       : le nom de la leçon
//   explication : { en: "...", nl: "..." }  (les mots entre <em>...</em> se lisent à voix haute quand on clique dessus)
//   mots        : des mots de mots.js (on écrit le mot français exactement comme dans mots.js)
//   phrases     : [ "français", "anglais", "néerlandais" ]

const LECONS = [

// ================= MOIS 1 : SURVIVRE =================

{ mois: 1, titre: "Dire bonjour et se présenter",
  explication: {
    en: "Pour dire ton nom : <em>My name is Sam.</em> ou plus court <em>I'm Sam.</em><br>" +
        "Pour demander le nom de quelqu'un : <em>What's your name?</em><br>" +
        "D'où tu viens : <em>I'm from Belgium.</em> — Où tu habites : <em>I live in Brussels.</em><br><br>" +
        "💡 En anglais, <b>I</b> (je) s'écrit <b>toujours</b> avec une majuscule.",
    nl: "Pour dire ton nom : <em>Ik heet Sam.</em> ou <em>Mijn naam is Sam.</em><br>" +
        "Pour demander le nom de quelqu'un : <em>Hoe heet jij?</em><br>" +
        "D'où tu viens : <em>Ik kom uit België.</em> — Où tu habites : <em>Ik woon in Brussel.</em><br><br>" +
        "💡 <b>ij</b> se prononce un peu comme « aï » : <em>jij</em>, <em>wij</em>. " +
        "Et <b>g</b> se prononce du fond de la gorge, comme un « r » qui racle : <em>goedemorgen</em>."
  },
  mots: ["bonjour", "salut", "au revoir", "merci", "je m'appelle...", "comment tu t'appelles ?", "enchanté", "à demain"],
  phrases: [
    ["Bonjour, je m'appelle Sam.",   "Hello, my name is Sam.",      "Hallo, ik heet Sam."],
    ["Comment tu t'appelles ?",      "What is your name?",          "Hoe heet jij?"],
    ["Je viens de Belgique.",        "I am from Belgium.",          "Ik kom uit België."],
    ["J'habite à Bruxelles.",        "I live in Brussels.",         "Ik woon in Brussel."],
    ["Enchanté !",                   "Nice to meet you!",           "Aangenaam!"],
    ["Ça va bien, merci.",           "I am fine, thank you.",       "Het gaat goed, dank je."],
    ["Au revoir, à demain !",        "Goodbye, see you tomorrow!",  "Tot ziens, tot morgen!"]
  ]
},

{ mois: 1, titre: "Être : je suis, tu es...",
  explication: {
    en: "Le verbe <b>to be</b> (être) :<table>" +
        "<tr><td>je suis</td><td><em>I am</em></td><td>(I'm)</td></tr>" +
        "<tr><td>tu es</td><td><em>you are</em></td><td>(you're)</td></tr>" +
        "<tr><td>il / elle est</td><td><em>he is / she is</em></td><td>(he's / she's)</td></tr>" +
        "<tr><td>nous sommes</td><td><em>we are</em></td><td></td></tr>" +
        "<tr><td>vous êtes</td><td><em>you are</em></td><td></td></tr>" +
        "<tr><td>ils / elles sont</td><td><em>they are</em></td><td></td></tr></table>" +
        "Pour poser une question, on inverse : <em>You are tired</em> → <em>Are you tired?</em>",
    nl: "Le verbe <b>zijn</b> (être) :<table>" +
        "<tr><td>je suis</td><td><em>ik ben</em></td></tr>" +
        "<tr><td>tu es</td><td><em>jij bent</em></td></tr>" +
        "<tr><td>il / elle est</td><td><em>hij is / zij is</em></td></tr>" +
        "<tr><td>nous sommes</td><td><em>wij zijn</em></td></tr>" +
        "<tr><td>vous êtes</td><td><em>jullie zijn</em></td></tr>" +
        "<tr><td>ils / elles sont</td><td><em>zij zijn</em></td></tr></table>" +
        "Pour poser une question, on met le verbe devant : <em>Ben jij ziek?</em> (Tu es malade ?)<br>" +
        "💡 « à la maison » = <em>thuis</em> : <em>Ik ben thuis.</em>"
  },
  mots: ["je", "tu", "il", "elle", "nous", "vous", "ils / elles", "être"],
  phrases: [
    ["Je suis fatigué.",          "I am tired.",           "Ik ben moe."],
    ["Tu es gentil.",             "You are kind.",         "Jij bent aardig."],
    ["Elle est contente.",        "She is happy.",         "Zij is blij."],
    ["Nous sommes prêts.",        "We are ready.",         "Wij zijn klaar."],
    ["Ils sont à l'école.",       "They are at school.",   "Zij zijn op school."],
    ["Je suis à la maison.",      "I am at home.",         "Ik ben thuis."],
    ["Tu es malade ?",            "Are you sick?",         "Ben jij ziek?"],
    ["Le café est chaud.",        "The coffee is hot.",    "De koffie is heet."]
  ]
},

{ mois: 1, titre: "Avoir : j'ai, tu as...",
  explication: {
    en: "Le verbe <b>to have</b> (avoir) :<table>" +
        "<tr><td>j'ai</td><td><em>I have</em></td></tr>" +
        "<tr><td>tu as</td><td><em>you have</em></td></tr>" +
        "<tr><td>il / elle a</td><td><em>he has / she has</em></td><td>⚠️ has !</td></tr>" +
        "<tr><td>nous avons</td><td><em>we have</em></td></tr>" +
        "<tr><td>ils / elles ont</td><td><em>they have</em></td></tr></table>" +
        "Question : <em>Do you have a bike?</em> (on ajoute <b>do</b> devant).<br>" +
        "⚠️ Piège : « avoir faim » = <b>être</b> faim en anglais : <em>I am hungry</em>, <em>I am thirsty</em>.",
    nl: "Le verbe <b>hebben</b> (avoir) :<table>" +
        "<tr><td>j'ai</td><td><em>ik heb</em></td></tr>" +
        "<tr><td>tu as</td><td><em>jij hebt</em></td></tr>" +
        "<tr><td>il / elle a</td><td><em>hij heeft / zij heeft</em></td><td>⚠️ heeft !</td></tr>" +
        "<tr><td>nous avons</td><td><em>wij hebben</em></td></tr>" +
        "<tr><td>vous avez</td><td><em>jullie hebben</em></td></tr>" +
        "<tr><td>ils / elles ont</td><td><em>zij hebben</em></td></tr></table>" +
        "💡 Dans une question, le <b>t</b> de <i>hebt</i> disparaît devant jij : <em>Heb jij een fiets?</em><br>" +
        "Comme en français : <em>Ik heb honger</em> (j'ai faim), <em>ik heb dorst</em> (j'ai soif).<br>" +
        "un / une = <em>een</em>."
  },
  mots: ["avoir", "le chien", "le chat", "le vélo", "la voiture", "le frère", "la sœur", "la maison"],
  phrases: [
    ["J'ai un chien.",                    "I have a dog.",                        "Ik heb een hond."],
    ["Tu as un vélo ?",                   "Do you have a bike?",                  "Heb jij een fiets?"],
    ["Il a une sœur.",                    "He has a sister.",                     "Hij heeft een zus."],
    ["Nous avons faim.",                  "We are hungry.",                       "Wij hebben honger."],
    ["Elle a un frère et une sœur.",      "She has a brother and a sister.",      "Zij heeft een broer en een zus."],
    ["J'ai soif.",                        "I am thirsty.",                        "Ik heb dorst."],
    ["Ils ont une grande maison.",        "They have a big house.",               "Zij hebben een groot huis."]
  ]
},

{ mois: 1, titre: "Les nombres et l'âge",
  explication: {
    en: "De 21 à 99, on met un tiret : <em>twenty-one</em>, <em>thirty-five</em>.<br>" +
        "⚠️ Piège : on ne dit <b>pas</b> « I have 15 years » ! On utilise <b>to be</b> : " +
        "<em>I am fifteen</em> ou <em>I am fifteen years old.</em><br>" +
        "Pour demander : <em>How old are you?</em>",
    nl: "⚠️ De 21 à 99, on dit l'unité <b>d'abord</b> : 21 = <em>eenentwintig</em> (un-et-vingt), " +
        "35 = <em>vijfendertig</em> (cinq-et-trente).<br>" +
        "Pour l'âge, on utilise <b>zijn</b> (être) : <em>Ik ben vijftien jaar.</em><br>" +
        "Pour demander : <em>Hoe oud ben jij?</em><br>" +
        "💡 Le pluriel se fait souvent avec <b>-en</b> ou <b>-s</b> : kat → <em>katten</em>, appel → <em>appels</em>."
  },
  mots: ["un", "deux", "trois", "cinq", "dix", "quinze", "vingt", "cent"],
  phrases: [
    ["J'ai quinze ans.",                  "I am fifteen years old.",     "Ik ben vijftien jaar oud."],
    ["Quel âge as-tu ?",                  "How old are you?",            "Hoe oud ben jij?"],
    ["Mon frère a vingt et un ans.",      "My brother is twenty-one.",   "Mijn broer is eenentwintig."],
    ["J'ai deux chats.",                  "I have two cats.",            "Ik heb twee katten."],
    ["Ça coûte dix euros.",               "It costs ten euros.",         "Het kost tien euro."],
    ["Il y a trois pommes.",              "There are three apples.",     "Er zijn drie appels."],
    ["Ma mère a quarante ans.",           "My mother is forty.",         "Mijn moeder is veertig."]
  ]
},

{ mois: 1, titre: "Poser des questions",
  explication: {
    en: "Les mots pour questionner : <em>who</em> (qui), <em>what</em> (quoi), <em>where</em> (où), " +
        "<em>when</em> (quand), <em>why</em> (pourquoi), <em>how</em> (comment), <em>how many</em> (combien).<br><br>" +
        "Avec un verbe normal, on ajoute <b>do</b> : <em>Where do you live?</em><br>" +
        "Avec <b>to be</b>, pas besoin : <em>Who is that?</em>",
    nl: "Les mots pour questionner : <em>wie</em> (qui), <em>wat</em> (quoi), <em>waar</em> (où), " +
        "<em>wanneer</em> (quand), <em>waarom</em> (pourquoi), <em>hoe</em> (comment), <em>hoeveel</em> (combien).<br><br>" +
        "L'ordre est toujours : <b>mot question + verbe + sujet</b> : <em>Waar woon jij?</em><br>" +
        "💡 Devant <i>jij</i>, le verbe perd son <b>t</b> : jij woont → <em>woon jij?</em>"
  },
  mots: ["qui", "quoi", "où", "quand", "pourquoi", "comment", "combien"],
  phrases: [
    ["Où habites-tu ?",                  "Where do you live?",              "Waar woon jij?"],
    ["Qui est-ce ?",                     "Who is that?",                    "Wie is dat?"],
    ["Qu'est-ce que tu fais ?",          "What are you doing?",             "Wat doe jij?"],
    ["Pourquoi es-tu triste ?",          "Why are you sad?",                "Waarom ben jij verdrietig?"],
    ["Quand est-ce que tu viens ?",      "When are you coming?",            "Wanneer kom jij?"],
    ["Comment vas-tu à l'école ?",       "How do you go to school?",        "Hoe ga jij naar school?"],
    ["Combien de frères as-tu ?",        "How many brothers do you have?",  "Hoeveel broers heb jij?"]
  ]
},

{ mois: 1, titre: "Le présent : je travaille, je mange...",
  explication: {
    en: "C'est facile : le verbe ne change presque pas !<br>" +
        "<em>I work</em>, <em>you work</em>, <em>we work</em>, <em>they work</em>...<br>" +
        "⚠️ Sauf avec <b>he / she / it</b> : on ajoute un <b>s</b> → <em>he works</em>, <em>she eats</em>.<br><br>" +
        "💡 « Je bois <b>de l'</b>eau » = <em>I drink water</em> (pas de « de » en anglais).",
    nl: "On prend l'infinitif et on enlève <b>-en</b> : werken → <b>werk</b>.<table>" +
        "<tr><td>je travaille</td><td><em>ik werk</em></td></tr>" +
        "<tr><td>tu travailles</td><td><em>jij werkt</em></td></tr>" +
        "<tr><td>il / elle travaille</td><td><em>hij werkt</em></td></tr>" +
        "<tr><td>nous / vous / ils</td><td><em>wij werken</em></td></tr></table>" +
        "💡 Question : le <b>t</b> disparaît devant jij : <em>Werk jij?</em><br>" +
        "Attention à l'orthographe : eten → <em>ik eet</em>, lezen → <em>ik lees</em>, spreken → <em>ik spreek</em>."
  },
  mots: ["travailler", "jouer", "manger", "boire", "lire", "habiter", "parler", "écouter"],
  phrases: [
    ["Je travaille le lundi.",       "I work on Mondays.",        "Ik werk op maandag."],
    ["Tu joues au foot ?",           "Do you play football?",     "Speel jij voetbal?"],
    ["Il mange une pomme.",          "He eats an apple.",         "Hij eet een appel."],
    ["Nous habitons à Bruxelles.",   "We live in Brussels.",      "Wij wonen in Brussel."],
    ["Elle lit un livre.",           "She reads a book.",         "Zij leest een boek."],
    ["Je bois de l'eau.",            "I drink water.",            "Ik drink water."],
    ["Ils parlent anglais.",         "They speak English.",       "Zij spreken Engels."]
  ]
},

{ mois: 1, titre: "Dire non : ne... pas",
  explication: {
    en: "Avec un verbe normal : <b>don't</b> (ou <b>doesn't</b> avec he/she) + le verbe :<br>" +
        "<em>I don't work today.</em> — <em>He doesn't like cheese.</em> (⚠️ pas de s à like)<br><br>" +
        "Avec <b>to be</b>, on ajoute juste <b>not</b> : <em>I am not tired.</em> — <em>It isn't difficult.</em><br>" +
        "« Je n'ai pas de voiture » = <em>I don't have a car.</em>",
    nl: "Il y a deux mots : <b>niet</b> et <b>geen</b>.<br><br>" +
        "<b>geen</b> remplace <i>een</i> ou un nom sans article : " +
        "<em>Ik heb geen auto.</em> (je n'ai pas de voiture) — <em>Ik heb geen honger.</em><br><br>" +
        "<b>niet</b> pour tout le reste, souvent à la fin : <em>Ik werk vandaag niet.</em> — <em>Het is niet moeilijk.</em>"
  },
  mots: ["non", "jamais", "rien", "personne", "aussi"],
  phrases: [
    ["Je ne travaille pas aujourd'hui.",   "I don't work today.",          "Ik werk vandaag niet."],
    ["Il n'aime pas le fromage.",          "He doesn't like cheese.",      "Hij houdt niet van kaas."],
    ["Je n'ai pas de voiture.",            "I don't have a car.",          "Ik heb geen auto."],
    ["Elle ne parle pas néerlandais.",     "She doesn't speak Dutch.",     "Zij spreekt geen Nederlands."],
    ["Nous ne sommes pas fatigués.",       "We are not tired.",            "Wij zijn niet moe."],
    ["Ce n'est pas difficile.",            "It is not difficult.",         "Het is niet moeilijk."],
    ["Je n'ai pas faim.",                  "I am not hungry.",             "Ik heb geen honger."]
  ]
},

{ mois: 1, titre: "Le, la, un, une",
  explication: {
    en: "Super simple : le / la / les = <b>the</b> (un seul mot pour tout !).<br>" +
        "un / une = <b>a</b>, et <b>an</b> devant un son de voyelle : <em>a dog</em>, <em>an apple</em>.",
    nl: "Il y a deux articles : <b>de</b> et <b>het</b>.<br>" +
        "• Environ 2 mots sur 3 prennent <b>de</b> : <em>de tafel</em>, <em>de kat</em>.<br>" +
        "• Les mots qui finissent par <b>-je</b> prennent toujours <b>het</b> : <em>het meisje</em>.<br>" +
        "• Beaucoup de mots courts prennent <b>het</b> : <em>het huis</em>, <em>het boek</em>, <em>het raam</em>.<br>" +
        "• Au pluriel, c'est <b>toujours de</b> : <em>de huizen</em>.<br>" +
        "un / une = <em>een</em> pour tous les mots.<br><br>" +
        "💡 Le secret : apprends <b>toujours</b> le mot <b>avec</b> son article."
  },
  mots: ["la table", "le livre", "la fenêtre", "l'enfant", "la fille", "le jardin", "la pomme"],
  phrases: [
    ["Le chat est noir.",                  "The cat is black.",                   "De kat is zwart."],
    ["La maison est grande.",              "The house is big.",                   "Het huis is groot."],
    ["J'ai une pomme.",                    "I have an apple.",                    "Ik heb een appel."],
    ["Le livre est sur la table.",         "The book is on the table.",           "Het boek ligt op de tafel."],
    ["Un enfant joue dans le jardin.",     "A child is playing in the garden.",   "Een kind speelt in de tuin."],
    ["La fenêtre est ouverte.",            "The window is open.",                 "Het raam is open."],
    ["La fille a un chien.",               "The girl has a dog.",                 "Het meisje heeft een hond."]
  ]
},

{ mois: 1, titre: "Ma famille : mon, ton, son...",
  explication: {
    en: "<table>" +
        "<tr><td>mon / ma / mes</td><td><em>my</em></td></tr>" +
        "<tr><td>ton / ta / tes</td><td><em>your</em></td></tr>" +
        "<tr><td>son / sa (à lui)</td><td><em>his</em></td></tr>" +
        "<tr><td>son / sa (à elle)</td><td><em>her</em></td></tr>" +
        "<tr><td>notre</td><td><em>our</em></td></tr>" +
        "<tr><td>leur</td><td><em>their</em></td></tr></table>" +
        "💡 « le frère de Sam » = <em>Sam's brother</em>.",
    nl: "<table>" +
        "<tr><td>mon / ma / mes</td><td><em>mijn</em></td></tr>" +
        "<tr><td>ton / ta / tes</td><td><em>jouw</em> (ou <em>je</em>)</td></tr>" +
        "<tr><td>son / sa (à lui)</td><td><em>zijn</em></td></tr>" +
        "<tr><td>son / sa (à elle)</td><td><em>haar</em></td></tr>" +
        "<tr><td>notre</td><td><em>ons</em> / <em>onze</em></td></tr>" +
        "<tr><td>votre</td><td><em>jullie</em></td></tr>" +
        "<tr><td>leur</td><td><em>hun</em></td></tr></table>" +
        "💡 <b>ons</b> pour les mots en <i>het</i> (<em>ons huis</em>), <b>onze</b> pour les autres (<em>onze moeder</em>)."
  },
  mots: ["la famille", "la mère", "le père", "les parents", "mon / ma", "ton / ta", "notre", "leur"],
  phrases: [
    ["Voici ma mère.",                       "This is my mother.",            "Dit is mijn moeder."],
    ["Mon père travaille beaucoup.",         "My father works a lot.",        "Mijn vader werkt veel."],
    ["Comment s'appelle ton frère ?",        "What is your brother's name?",  "Hoe heet jouw broer?"],
    ["Sa sœur a douze ans.",                 "His sister is twelve.",         "Zijn zus is twaalf."],
    ["Notre maison est petite.",             "Our house is small.",           "Ons huis is klein."],
    ["Leurs enfants sont gentils.",          "Their children are kind.",      "Hun kinderen zijn aardig."],
    ["J'aime ma famille.",                   "I love my family.",             "Ik hou van mijn familie."]
  ]
},

{ mois: 1, titre: "Les jours et l'heure",
  explication: {
    en: "Quelle heure est-il ? <em>What time is it?</em> → <em>It's three o'clock.</em><br>" +
        "3h30 = <em>half past three</em> — à 8h = <em>at eight o'clock</em>.<br>" +
        "💡 Les jours prennent une majuscule : <em>Monday</em>, <em>Sunday</em>.",
    nl: "Quelle heure est-il ? <em>Hoe laat is het?</em> → <em>Het is drie uur.</em><br>" +
        "⚠️ Gros piège : 3h30 = <em>half vier</em> (« la moitié vers quatre ») !<br>" +
        "à 8h = <em>om acht uur</em>.<br><br>" +
        "💡 Certains verbes se coupent en deux : opstaan (se lever) → <em>Ik sta om zeven uur op.</em> " +
        "(le petit morceau <b>op</b> part à la fin)."
  },
  mots: ["lundi", "mardi", "samedi", "dimanche", "aujourd'hui", "demain", "le matin", "le soir"],
  phrases: [
    ["Il est trois heures.",                  "It is three o'clock.",               "Het is drie uur."],
    ["Il est trois heures et demie.",         "It is half past three.",             "Het is half vier."],
    ["Je me lève à sept heures.",             "I get up at seven o'clock.",         "Ik sta om zeven uur op."],
    ["L'école commence à huit heures.",       "School starts at eight o'clock.",    "De school begint om acht uur."],
    ["Aujourd'hui, c'est lundi.",             "Today is Monday.",                   "Vandaag is het maandag."],
    ["À demain matin !",                      "See you tomorrow morning!",          "Tot morgenochtend!"],
    ["Le week-end, je dors beaucoup.",        "At the weekend I sleep a lot.",      "In het weekend slaap ik veel."]
  ]
},

{ mois: 1, titre: "Vouloir, pouvoir, aimer",
  explication: {
    en: "Vouloir : <em>I want to eat.</em> (want <b>to</b> + verbe)<br>" +
        "Pouvoir : <em>I can swim.</em> (⚠️ <b>sans</b> to après can)<br>" +
        "Aimer faire : <em>I like reading.</em> (like + verbe en <b>-ing</b>)",
    nl: "Vouloir : <em>ik wil</em>, <em>jij wilt</em>, <em>hij wil</em>.<br>" +
        "Pouvoir : <em>ik kan</em>, <em>jij kunt</em>, <em>hij kan</em>.<br>" +
        "⚠️ Le 2e verbe part <b>à la fin</b> : <em>Ik wil naar het strand gaan.</em><br><br>" +
        "💡 Pour « aimer faire », on ajoute juste <b>graag</b> : <em>Hij leest graag.</em> (il aime lire)"
  },
  mots: ["vouloir", "pouvoir", "aimer", "aller", "la plage", "le café"],
  phrases: [
    ["Je veux un café.",                     "I want a coffee.",                 "Ik wil een koffie."],
    ["Tu peux m'aider ?",                    "Can you help me?",                 "Kun jij mij helpen?"],
    ["Je sais nager.",                       "I can swim.",                      "Ik kan zwemmen."],
    ["J'aime jouer au foot.",                "I like playing football.",         "Ik voetbal graag."],
    ["Elle veut aller à la plage.",          "She wants to go to the beach.",    "Zij wil naar het strand gaan."],
    ["Nous voulons manger.",                 "We want to eat.",                  "Wij willen eten."],
    ["Il aime lire.",                        "He likes reading.",                "Hij leest graag."]
  ]
},

{ mois: 1, titre: "Questions oui/non et ordre des mots",
  explication: {
    en: "Pour une question oui/non : <b>Do</b> (ou <b>Does</b> avec he/she) + sujet + verbe :<br>" +
        "<em>Do you work today?</em> — <em>Does she live here?</em><br>" +
        "Avec <b>to be</b> ou <b>can</b>, on inverse juste : <em>Are you ready?</em> — <em>Can you help me?</em>",
    nl: "⭐ La règle d'or du néerlandais : <b>le verbe est toujours en 2e position</b>.<br>" +
        "Si la phrase commence par autre chose que le sujet, le sujet passe <b>après</b> le verbe :<br>" +
        "<em>Vandaag werk ik.</em> (aujourd'hui travaille je) — <em>Morgen ga ik naar school.</em><br><br>" +
        "Question oui/non : le verbe en <b>1re</b> position : <em>Werk jij vandaag?</em>"
  },
  mots: ["maintenant", "souvent", "toujours", "parfois", "le chocolat", "ici"],
  phrases: [
    ["Tu travailles aujourd'hui ?",                "Do you work today?",                        "Werk jij vandaag?"],
    ["Elle habite ici ?",                          "Does she live here?",                       "Woont zij hier?"],
    ["Aujourd'hui, je travaille.",                 "Today I am working.",                       "Vandaag werk ik."],
    ["Demain, je vais à l'école.",                 "Tomorrow I am going to school.",            "Morgen ga ik naar school."],
    ["Tu aimes le chocolat ?",                     "Do you like chocolate?",                    "Hou jij van chocolade?"],
    ["Le soir, nous mangeons à sept heures.",      "In the evening we eat at seven o'clock.",   "'s Avonds eten wij om zeven uur."],
    ["Est-ce qu'il parle anglais ?",               "Does he speak English?",                    "Spreekt hij Engels?"]
  ]
}

];

// Les leçons des mois 2 et 3 (on les écrira ensuite)
const LECONS_A_VENIR = {
  2: ["Au magasin", "Au restaurant", "Demander son chemin", "Ma journée", "Chez moi",
      "Les vêtements et les couleurs", "Ce que je vais faire (futur proche)", "La météo",
      "Chez le médecin", "Mes loisirs", "Comparer : plus grand que...", "Bilan du mois 2"],
  3: ["Le passé : j'ai travaillé", "Le passé des verbes irréguliers", "J'étais, j'avais",
      "Raconter mon week-end", "Donner mon avis", "Relier les phrases : parce que, mais",
      "Quand, si...", "Le futur", "Au téléphone", "Écrire un message",
      "Comprendre une vidéo", "Bilan final"]
};
