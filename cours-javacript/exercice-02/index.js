let formulaires = [];
document.querySelector(".btn-ajouter").addEventListener("click",function(e){
   e.preventDefault();
   let formulaire = {nom:"",prenom:"",pwd:"",option1:"",option2:""}

    let nom = document.querySelector(".nom").value;
    let prenom = document.querySelector(".prenom").value;
    let pwd = document.querySelector(".pwd").value;
    let option1 = document.querySelector(".option1").value;
    let option2 = document.querySelector(".option2").value;

    formulaire.nom = nom
    formulaire.prenom = prenom
    formulaire.pwd = pwd
    formulaire.option1 = option1
    formulaire.option2 = option2


    formulaires.push(formulaire)
    console.log(formulaires)
})
document.querySelector(".btn-modifier").addEventListener("click",function(e){
    e.preventDefault();
    let findtest = formulaires.find((item)=> {
         
         return item === mama
    })
    
})

// bax nzido xi haja f l methode (this.nom)
// ES2015 se sont des version de js
// bax n3ayto 3la xi class kandiro l harf lwl majuscule  





























//find : element1
// filter : map