
//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha 
// una lista di nomi e una lista di cognomi, e da queste vuole 
//generare una falsa lista di invitati con nome e cognome.

let Nomi = ["Mario" , "Giulio" , "Antonio" , "Giuseppe", "Domenico",];
let Cognomi = [ "Rossi", "Verdi", "Gialli", "Bianchi", "Marroni",];
let RandomNomiCognomi = [];


for (let i = 1; i <=5; i++) {
    let num = Math.floor(Math.random() * 5);
    let numSecond =  Math.floor(Math.random() * 5);
    RandomNomiCognomi.push ([Nomi[num] + "" + Cognomi[numSecond]]);

}

console.log(RandomNomiCognomi);