
let sm;
function somme(a,b){
    return a + b
}
sm = somme(5,10)
console.log(sm)

//les fonctions la deuxieme methode fonction anonime mafihache smya
//function expressions

const somme=function (a,b){
    return a + b
}
console.log(somme(10,6))

// arrow function

const somme= (a,b)=>{
    return a + b
}
console.log(somme(10,6))

// arrow function methode 2
const greet= (nom)=>{
    return "bonjour"
}
console.log(greet(feyd)) //nsayfto parametre cankatboha fa ligne lifihe fleche wasste greet 

// forEtch catbokli lina 3la liste
const days = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi"]
days.forEach(function(value,index,array)){
    console.log("ok!!!")
}
//function expression
let somme =function(a,b){
    return a+b
}
let sm = somme(5,9)
console.log(sm)


//les expressions lempdas
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"];
jours.map((item) => {
    if (item === "jeudi"){
        item = item + "*"  + "jour ferie"
    }

    return  console.log(item)
})
console.log(jours)
// exercice
const stagiaire =[
    {nom: "elfakiri",prenom: "mariam",age:18},
    {nom: "kadiri",prenom: "najat",age:20},
    {nom: "saadi",prenom: "hiba", age:58}
]
let nomstagiaire
nomstagiaire = stagiaire.map((info)=> {
   fullname =info['nom']
   fullname =info['age']
   return fullname
})

console.log(stagiaire)
console.log(nomstagiaire)

//exemple
const personne =[
    {nom: "elfakiri",prenom: "mariam",age:18},
    {nom: "kadiri",prenom: "najat",age:20},
    {nom: "saadi",prenom: "hiba", age:58}
]
let namage;
namage = personne.map((item,index,arrpersonne)=>{  
    let st;
st = {...item,branche:"DD",id :(index+1)};
    if ("age">20){
        st.remarque='okkkkkk'
    }
    else {
        st.remarque='noooooo'
    }


return st;

})














//les fonctions flechee (arow function)
/*() => {
    return console.log("")
}*/

//local : makat3rfx bra l fonction
//
    
//les fonctions flechees
    let a = function (){
        return console.log("helloo!!javascript")
    };

    let greet=() => console.log("helloo!!python")

    let nomcomplet=(nom,prenom) => {
      let fullnam=nom+""+prenom;
        return fullnam
}
console.log(nomcomplet("meriem","feyd"))