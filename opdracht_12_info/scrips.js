const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length){
    console.log (colors[i]);
    i++;
}

for (let i=0; i < colors.length; i++) {
    console.log (colors[i]);
}

colors.forEach((kleur) => console.log (kleur));

//for loop = 3 regels
//while loop = 6 regels
//forEach method = 1 regel
//voordeel array method (for each) is dat het maar op 1 regel staat
//nadeel is voor mij dat ik het minder leesbaar vindt. Ik zou liever de for loop gebruiken. 


const kleur = {
    kleur1: "blauw",
    kleur2: "paars",
    kleur3: "groen",
    kleur4: "zwart",
    kleur5: "geel",
    kleur6: "rood",
    kleur7: "blauw",
    kleur8: "paars",
    kleur9: "groen",
    kleur10: "zwart",
    kleur11: "geel",
    kleur12: "rood",
    kleur13: "blauw",
    kleur14: "paars",
    kleur15: "groen",
    kleur16: "zwart",
    kleur17: "geel",
    kleur18: "rood",
    kleur19: "blauw",
    kleur20: "paars",
}

//kleur.forEach ((verf) => console.log (verf));
//nee je kan niet de forEach methode gebruiken bij een object.

for (x in kleur) {
    console.log (kleur[x]);
}
//Ja wel aan het herhalen, je gebruikt een for loop. 
// Weet neit of het daadwerkelijk ook het object is wat je herhaald. 
