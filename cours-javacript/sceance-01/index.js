 console.log("hello javascript!!!")  //print//
 function greet(nom) {
    console.log("hello!" +nom)
 }

 greet("elfakiiri")



 function somme(nombre1,nombre2){
    return nombre1+nombre2
 }
console.log(somme(13,90))

//declaration des variables
const PI = 3.14
function inscrire(){
    let nom;
    let prenom;
    let age;
    nom="ELFAKIRI"
    prenom="MARIAM";
    age=21
    if (age < 22){
        var statut;
        statut ="stagiaire"
    }
    console.log(nom)
    console.log(statut)

}
let texte1 = "OFPPT";
texte1 += "";
let texte2 ="en force";
let texte3= texte1+texte2;