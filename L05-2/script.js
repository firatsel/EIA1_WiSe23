// myStories wird in ein Array "let" gepackt, Index definiert [0, 1, 2, 3, 4]:

let myStories = [
    "Du nimmst gemeinsam mit Archäologen an einer Expedition teil. Ihr befindet euch in einer Ruine und hört seltsame Stimmen. Einige der Teilnehmer meinen die Stimmen von rechts zu hören und andere meinen sie kommen von links. Für welchen Weg entscheidest du dich, rechts oder links?",
    "Die Stimmen werden immer lauter. Ihr betretet einen düsteren Raum mit einer seltsamen Atmosphäre. Von den Wänden krabbeln große spinnenartige Kreaturen. Langsam aber sicher krabbeln sie auf euch zu. Ein Archäologe wurde bereits von einer Kreatur angegriffen. Was machst du? Wegrennen oder Kämpfen?",
    "Die Stimmen werden leiser. Ihr entscheidet euch dafür die Stimmen zu ignorieren und macht weiter mit der Ausgrabung.", 
    "Die Kreaturen werden immer schneller und verfolgen dich. Du findest eine Falltür und versteckst dich drunter. Die Kreaturen verschwinden und du kannst gerade noch so entkommen. Glückwuuuunsch", 
    "Du versuchst gegen sie zu kämpfen, jedoch merkst du schnell, dass sie dir überlegen sind. you dead"
]

// Start-Text definiert:

let myPrompt = prompt(myStories[0]);

// if und else Funktion: 

if (myPrompt == "rechts") {
    let myPrompt = prompt(myStories[1]);

    if (myPrompt == "wegrennen") {
        let myPrompt = prompt(myStories[3]);
    } else (myPrompt == "kämpfen"); {
        let myPrompt = prompt(myStories[4]);
    }
}   else if (myPrompt == "links") {
    myPrompt = prompt(myStories[2]);
}

// Ausführung der if und else Funktion wird definiert durch "function":
// Notiz: Mir wurde gesagt, dass ich die function am Ende hinschreiben soll,
// jedoch bin ich mir unsicher, ob das so passt. 

function textAdventure(myStories) {
    let result;
    if ("rechts") {
      result = 'positive';
      if ("wegrennen") {
        result = 'positive';
    } else ("kämpfen"); {
      result = 'NOT positive';
    }
    } else if ("links"); {
    result = 'positive'; }
    return result;
  }

  