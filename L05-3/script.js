// hier definiere ich meine Stories mit index 0, 1, 2, 3

story = [
    "Die Stimmen werden immer lauter. Ihr betretet einen düsteren Raum mit einer seltsamen Atmosphäre. Von den Wänden krabbeln große spinnenartige Kreaturen. Langsam aber sicher krabbeln sie auf euch zu. Ein Archäologe wurde bereits von einer Kreatur angegriffen. Was machst du, wegrennen oder kämpfen?",
    "Die Stimmen werden leiser. Ihr entscheidet euch dafür die Stimmen zu ignorieren und macht weiter mit der Ausgrabung.", 
    "Die Kreaturen werden immer schneller und verfolgen dich. Du findest eine Falltür und versteckst dich drunter. Die Kreaturen verschwinden und du kannst gerade noch so entkommen. Glückwuuuunsch", 
    "Du versuchst gegen sie zu kämpfen, jedoch merkst du schnell, dass sie dir überlegen sind. you dead"
]

/* const input entspricht beim html dokument der id "inputfield"
const label entspricht beim html dokument der id "textLabel"
const output entspricht beim html dokument der id "output"
*/

const input = document.getElementById("inputfield")
const label = document.getElementById("textLabel")
const output = document.getElementById("output")

/* Folgend wird die if-Funktion eingefügt. 
input.style.display = "none" und label.style.display = "none" sind dafür zuständig, dass keine 
Eingabe mehr erfolgen kann.
 input.value = "" sorgt dafür, dass das Eingabefeld nach der Eingabe der Antwort gelöscht wird
*/

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter"); {
        if (input.value == "rechts") {
            output.innerHTML = story[0]
            input.value = ""
        } else if (input.value == "links") {
            output.innerHTML = story[1]
            input.value = ""
            input.style.display = "none"
            label.style.display = "none"
        } else if (input.value == "wegrennen") {
            output.innerHTML = story[2]
            input.value = ""
            input.style.display = "none"
            label.style.display = "none"
        } else if (input.value == "kämpfen") {
            output.innerHTML = story[3]
            input.value = ""
            input.style.display = "none"
            label.style.display = "none"
        }

  }
})

