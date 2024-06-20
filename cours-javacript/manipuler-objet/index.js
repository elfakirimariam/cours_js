let stagiaire = {
    nom:"elfakiri",
    prenom:"mariam",
    groupe:"dd"
}

stagiaire.groupe = "di";
console.log(stagiaire);   // pour modifier
delete stagiaire.prenom;
console.log(stagiaire);  //pour suppimer

const stagiaires = new Array("mama","baba","khoya")    // for create new array
console.log(stagiaires.length)
stagiaires.unshift("yousef")   //add in the first
stagiaires.pop()   //delete the last element o kathtafad bih
stagiaires.shift()   //delete the first element o kathtafad bih
stagiaires.splice(1,2)   //suprimer de  
console.log(stagiaires)



let findtest = stagiaires.find((item)=> {
    return item === mama
}) // its the same think  map
let filtertest =stagiaires.filter((item)=> {
    return item === baba
})
let findIndextest = stagiaires.findIndex((item)=> {
    return item === baba
})
console.log(findIndex)
stagiaires.splice(1,2,"mona") // ghatzad mona f blast li t supprima


//split: katxad l variable kathawlo ala xakl array
// stagiaires.splice(start,count,add,add)
// stagiaires.slice(start,end) : kay3tik rir dakxi li glttih f l a9was
//callback function : fonction li katkon wast filter  
//find : kat rechercher katbokli ala liste
// filter :kat rechercher katbokli ala l element 