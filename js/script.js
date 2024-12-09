function stopAllSounds() {
  // Seleciona todos os elementos de áudio
  const sounds = document.querySelectorAll("audio");

  // Pausa cada som e reinicia o tempo para o início
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0; // Reinicia o áudio para o começo
  });
}

// document.getElementById("AMG").addEventListener("click", function (ev) {
//   stopAllSounds();
//   ev = document.getElementById("AmericaMG");
//   ev.play();
// });
/*
document.getElementById("CAP").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("AthleticoPR");
  ev.play();
});
*/
document.getElementById("CAM").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("AtleticoMG");
  ev.play();
});

document.getElementById("BAH").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Bahia");
  ev.play();
});

document.getElementById("BOT").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Botafogo");
  ev.play();
});

document.getElementById("COR").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Corinthians");
  ev.play();
});

// document.getElementById("CFC").addEventListener("click", function (ev) {
//   stopAllSounds();
//   ev = document.getElementById("Coritiba");
//   ev.play();
// });

document.getElementById("CRU").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Cruzeiro");
  ev.play();
});
/*
document.getElementById("CUI").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Cuiaba");
  ev.play();
});
*/
document.getElementById("FLA").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Flamengo");
  ev.play();
});

document.getElementById("FLU").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Fluminense");
  ev.play();
});

document.getElementById("FOR").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Fortaleza");
  ev.play();
});

// document.getElementById("GOI").addEventListener("click", function (ev) {
//   stopAllSounds();
//   ev = document.getElementById("Goias");
//   ev.play();
// });

document.getElementById("GRE").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Gremio");
  ev.play();
});

document.getElementById("INT").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Internacional");
  ev.play();
});

document.getElementById("PAL").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Palmeiras");
  ev.play();
});

document.getElementById("RBB").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("RbBragantino");
  ev.play();
});

document.getElementById("SAN").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Santos");
  ev.play();
});

document.getElementById("SAO").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("SaoPaulo");
  ev.play();
});

document.getElementById("VAS").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Vasco");
  ev.play();
});
/*
document.getElementById("ACG").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("AtleticoGO");
  ev.play();
});
*/ /*
document.getElementById("CRI").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Criciuma");
  ev.play();
});
*/
document.getElementById("JUV").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Juventude");
  ev.play();
});

document.getElementById("VIT").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Vitoria");
  ev.play();
});

document.getElementById("CEA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ceara");
  ev.play();
});

document.getElementById("MIR").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Mirassol");
  ev.play();
});

document.getElementById("SPO").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("SportRecife");
  ev.play();
});
