let myNumer = 13;
let myString = "Hallo";
let myBoolean = true;

let myPrompt = prompt("Du nimmst gemeinsam mit Archäologen an einer Expedition teil. Ihr befindet euch in einer Ruine und hört seltsame Stimmen. Einige der Teilnehmer meinen die Stimmen von rechts zu hören und andere meinen sie kommen von links. Für welchen Weg entscheidest du dich, rechts oder links?");
console.log(myPrompt)

if (myPrompt == "rechts"){
    myPrompt = prompt("Die Stimmen werden immer lauter. Ihr betretet einen düsteren Raum mit einer seltsamen Atmosphäre. Von den Wänden krabbeln große spinnenartige Kreaturen. Langsam aber sicher krabbeln sie auf euch zu. Ein Archäologe wurde bereits von einer Kreatur angegriffen. Was machst du? Wegrennen oder Kämpfen?");
} else if (myPrompt == "links") {
    myPrompt = prompt("Die Stimmen werden leiser. Ihr entscheidet euch dafür die Stimmen zu ignorieren und macht weiter mit der Ausgrabung.");
} 

if (myPrompt == "wegrennen"){
    myPrompt = prompt("Die Kreaturen werden immer schneller und verfolgen dich. Du findest eine Falltür und versteckst dich drunter. Die Kreaturen verschwinden und du kannst gerade noch so entkommen. Glückwuuuunsch");
} else if (myPrompt == "kämpfen") {
    myPrompt = prompt("Du versuchst gegen sie zu kämpfen, jedoch merkst du schnell, dass sie dir überlegen sind. you dead :)");
} 