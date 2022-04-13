/*var kepEleresiut = [
  "kepek/maki.jpg",
  "kepek/kek.jpg",
  "kepek/kocka.png",
  "kepek/neon.jpg",
];
var kepCim = ["Maki", "NFT", "Kocka", "Neon"];
var kepAr = [15000, 5000, 7500, 3000];*/

var kepeim = [
  {
    kepEleresiutt: "kepek/maki.jpg",
    kepCim: "Maki",
    kepAr: 15000,
  },
  {
    kepEleresiutt: "kepek/kek.jpg",
    kepCim: "NFT",
    kepAr: 5000,
  },
  {
    kepEleresiutt: "kepek/kocka.png",
    kepCim: "Kocka",
    kepAr: 7500,
  },
  {
    kepEleresiutt: "kepek/neon.jpg",
    kepCim: "Neon",
    kepAr: 3000,
  },
];
console.log(kepeim);

console.log(atlagAr());
hosszabb();
if (dragabb) {
    console.log("van");
  }

  else {
    console.log("nincs");
  }

/*Mennyi a képek átlagára? */
function atlagAr() {
  var atlag = 0;
  for (let index = 0; index < kepeim.length; index++) {
    atlag = kepeim[index].kepAr + atlag;
  }
  ossz = atlag / kepeim.length;
  return ossz;
}

/*console.log(atlag / kepeim.length);*/

/*Van-e 10000-mél drágább kép */
function dragabb(){
  var i = 0;
  while (i < kepeim.length && !(kepeim[i].kepAr > 10000)) {
    i++;
  }
  return i < kepeim.length
}


/*Melyik az a kép, amelyiknek a címe 20 karakternél hosszabb */
function hosszabb(){
    for (let k = 0; k < kepeim.length; k++) {
        if (kepeim[k].kepCim.length >= 20) {
          console.log(kepeim[k]);
        }
      }
}
 

/*objektumok*/

var szemely = {
  nev: "Béla",
  kor: 12,
  nem: "férfi",
};

console.log(szemely);
szemely.szmeSzin = "kék";
console.log(szemely);
szemely.nem = "nő";
console.log(szemely);

var szemely2 = {
  nev: "Bjuci",
  kor: 122,
  nem: "nő",
  szmeSzin: "szürke",
};
console.log(szemely2);
