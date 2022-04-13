var kepeim = [
  {
    kepEleresiutt: "kepek/maki.jpg",
    kepCim: "Maki",
    kepAr: 15000,
  },
  {
    kepEleresiutt: "kepek/kocka.png",
    kepCim: "kocka",
    kepAr: 5000,
  },
  {
    kepEleresiutt: "kepek/proci.jpg",
    kepCim: "proci",
    kepAr: 7500,
  },
  {
    kepEleresiutt: "kepek/neon.jpg",
    kepCim: "Neon",
    kepAr: 3000,
  },
];
window.addEventListener("load", init);
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  ID("uzenet").innerHTML = "<h1>Valami</h1>";
  ID("uzenet").innerHTML = "<h1>Képek</h1>";
  var txt = "";
  for (let index = 0; index < kepeim.length; index++) {
    txt +=
      "<div><h2>" +
      kepeim[index].kepCim +
      "</h2><img src='" +
      kepeim[index].kepEleresiutt +
      "' alt='" +
      kepeim[index].kepCim +
      "'><p>" +
      kepeim[index].kepAr +
      "</p></div>";
  }
  var sor = "<ul>";
  var sorlez = "</ul>";
  console.log(txt);
  ID("kepek").innerHTML = txt;
  var cim = "";
  for (let index = 0; index < kepeim.length; index++) {
    cim = cim + "<li>" + kepeim[index].kepCim + "</li>";
  }
  ID("cimek").innerHTML = sor + cim + sorlez;
  var ar = "";
  for (let index = 0; index < kepeim.length; index++) {
    ar = ar + "<li>" + kepeim[index].kepAr + "</li>";
  }
  ID("arak").innerHTML = sor + ar + sorlez;
  megjelenit(aktKep);

  ID("uj").addEventListener("click", kepbetoltes);
  ID("balra").addEventListener("click", balra);
  ID("jobbra").addEventListener("click", jobbra);
}

var aktKep=0;

function balra(){

    aktKep--;
    if(aktKep<0){
        aktKep=kepeim.length-1;
    }
    megjelenit(aktKep);
}
function jobbra(){

    aktKep++;
    if(aktKep>=kepeim.length){
        aktKep=0;
    }
    megjelenit(aktKep);
}

function kepbetoltes() {
  var rnd = Math.floor(Math.random() * kepeim.length);
  megjelenit(rnd);
}

function megjelenit(index) {
  ID("fokep").src = kepeim[index].kepEleresiutt;
  ID("fokep").alt = kepeim[index].kepCim;
}
