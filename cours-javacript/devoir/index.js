const stagiaireslist = [];
document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault();
    let stagiaire = {nom:"",prenom:"",age:null}
    
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let age =Number (document.getElementById('age').value);
    
    stagiaire.nom = nom;
    stagiaire.prenom = prenom;
    stagiaire.age = age;

    stagiaireslist.push(stagiaire);
})
 document.querySelector(".afficher").addEventListener("click",(e)=>{
   e.preventDefault();
    stagiaireslist.map(function(item,indice){
        console.log(item);
        ////////////////////conteneur data
        let dataDiv = document.createElement("div");
        dataDiv.classList.add("data");
        document.body.append(dataDiv)
        /////////////////
        let nomSpan = document.createElement("span");
        nomSpan.innerHTML = item.nom;
        let prenomSpan = document.createElement("span");
        prenomSpan.innerHTML = item.prenom;
        let ageSpan = document.createElement("span");
        ageSpan.innerHTML = item.age;
        console.log(indice)
        console.log( document.querySelectorAll(".data")[indice]);
        document.querySelectorAll(".data")[indice].append(nomSpan);
        document.querySelectorAll(".data")[indice].append(prenomSpan);
        document.querySelectorAll(".data")[indice].append(ageSpan);

        stagiaireslist.map((stagiaire)=>{
            let ligne = document.createElement("tr");
            document.querySelector(".data").append(ligne);
            let td_nom = document.createElement("td");
            td_nom.innerHTML = stagiaire.nom;
            ligne.append(td_nom);
            let td_prenom = document.createElement("td");
            td_prenom.innerHTML = stagiaire.prenom;
            ligne.append(td_prenom);
            let td_age = document.createElement("td");
            td_age.innerHTML = stagiaire.age;
            ligne.append(td_age);
            


        })




    })
 }) 
let btnAfficher = document.querySelector("affiher");




// c'est une methode bach nhaydo aya haja par defaut








































/*
document.querySelector(".btn").addEventListener("click" , () =>{
    const nom = document.querySelector(".nom").value
    const prenom = document.querySelector(".prenom").value
    const email = document.querySelector(".email").value
    const pwd = document.querySelector(".pwd").value
    console.log("nom :",)
    console.log("prenom :",)
    console.log("email :",)
    console.log("pwd :", )
})*/