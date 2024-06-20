
//foctions de la premier methode
let sm;
function somme(a,b){
    return a+b
}
sm = somme(44,2)
console.log(sm)
//fuctions expressions
const some=function (a,b){
    return a + b
}
console.log(some(10,6))
// arrow function
const somm= (a,b)=>{
    return a + b
}
console.log(somm(33,6))
// arrow function methode 2
const greet= (nom)=>{
    return "bonjour"
}
console.log(greet("elfakiri")) 

let nomcomplet=(nom,prenom) => {
    let fullnam=nom+""+prenom;
      return fullnam
}
console.log(nomcomplet("mariam","elfakiri"))
//les expressions lempdas
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"];
jours.map((item) => {
    if (item === "jeudi"){
        item = item + "*"  + "jour ferie"
    }
    return  console.log(item)
})
console.log(jours)
const days = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi"]
days.forEach(function(value,index,array){
    console.log("ok!!!")
})
// exercice
const stagiaire =[
    {nom: "elfakiri",prenom: "mariam",age:18},
    {nom: "kadiri",prenom: "najat",age:20},
    {nom: "saadi",prenom: "hiba", age:58}
]
let nomstagiaire
nomstagiaire = stagiaire.map((info)=> {
   fullname =info['nom']+" " +info['age']
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
    if (item["age"]>20){
        st.remarque='okkkkkk'
    }
    else {
        st.remarque='noooooo'
    }

return st;
})
console.log(namage)


// exemple3

const peaple = [
    {nom:"lhmadi",prenom:"marwa",class:"dd106"},
    {nom:"lhraichi",prenom:"marwa",class:"dd105"},
    {nom:"elfakiri",prenom:"aya",class:"dd102"},
    {nom:"meha",prenom:"kenza",class:"dd106"}
]

let body
body = peaple.map((item)=>{
    namepeaple=item['nom']+" "+item['class']
    return namepeaple
})
console.log(peaple)
console.log(body)

//exemple 4
const peaples = [
    {nom:"lhmadi",prenom:"marwa",class:"dd106"},
    {nom:"lhraichi",prenom:"marwa",class:"dd105"},
    {nom:"elfakiri",prenom:"aya",class:"dd102"},
    {nom:"meha",prenom:"kenza",class:"dd106"}
]

let bodys
bodys = peaples.map((item)=>{
    let rt
rt = {...item,filiere:"devdigital",nombre:(index+1)}
    if(item['class'] == "dd106" ){
        rt.remarque = 'yeeeeeeeeees'
    }
    else {
        rt.remarque = 'noooooooooooo'
    }
})

console.log(bodys)





































//les fonctions fleche * fihom flech
//local * makat3rfx bra l fonction
// forEtch * catbokli lina 3la liste
//arrow * kanhaydo fuction o kandiro (=>) 
//les fonctions de la deuxieme methode fonction anonime mafihache smya
//nsayfto parametre cankatboha fa ligne lifihe fleche wasste smiya dyal l fonction 
//map * ki retourne une nouvelle iste
//... * kathayd les acolade o kadir ola haja bohdha
//const * bax ta9dar t modifier
// (indice + 1) * bax ybda mn 1
//array hiya liste li khdamine 3liha
// item * hiya liste kolha