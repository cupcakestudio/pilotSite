//fra layout-øvelsen
// Lav en variabel, der refererer til body
let bodyVar = document.querySelector("body");
// Lav en variabel, der refererer til button
let buttonVar = document.querySelector("button");
// Lav en variabel, der refererer til ".mode"
let modeVar = document.querySelector(".mode");
// Lav funktionen "darkMode", som
// a) toggle'r klassen "dark" vha. classList og
// b) ændrer teksten på toggle-knappen til hhv. "Dark mode" eller "Light mode" vha. en if/else-sætning
function darkMode(){
;
bodyVar.classList.toggle("dark");
if (modeVar.classList.toggle("dark")){
  modeVar.textContent = "Light Mode";
}
else {modeVar.textContent = "Dark Mode";}
};
// Lav et klik-event på toggle, der sætter funktionen darkMode i gang
buttonVar.addEventListener("click", darkMode);