document.querySelector(".btn-ajouter").addEventListener("click",function(e){
    e.preventDefault();
    let nom = document.forms["formulaire"]["nom"].value
    if (nom === ""){
        document.querySelector(".right-01").classList.add("error")
        document.querySelector(".error-01").innerText = "Le nom d'utilisateur ne peut pas être vide"
        document.querySelector(".error-01").classList.remove("error-01")
    }
    else {

        document.querySelector("#span-nom").classList.add("error-01")
        document.querySelector(".right-01").classList.remove("error")
    }
    let prenom= document.forms["formulaire"]["prenom"].value
    if (prenom === ""){
        document.querySelector(".right-02").classList.add("error")
        document.querySelector(".error-02").innerText = "Le prenom d'utilisateur ne peut pas être vide"
        document.querySelector(".error-02").classList.remove("error-02")
    }
    let pwd= document.forms["formulaire"]["pwd"].value
    if (pwd === ""){
        document.querySelector(".right-03").classList.add("error")
        document.querySelector(".error-03").innerText = "Le pwd d'utilisateur ne peut pas être vide"
        document.querySelector(".error-03").classList.remove("error-03")
    }
    let numero= document.forms["formulaire"]["number"].value
    if (numero === ""){
        document.querySelector(".right-04").classList.add("error")
        document.querySelector(".error-04").innerText = "Le numero d'utilisateur ne peut pas être vide"
        document.querySelector(".error-04").classList.remove("error-04")
    }
    
    let email = document.forms["formulaire"]["email"].value
    if (email === ""){
        document.querySelector(".right-05").classList.add("error")
        document.querySelector(".error-05").innerText = "Le email d'utilisateur ne peut pas être vide"
        document.querySelector(".error-05").classList.remove("error-05")
    }
   
    document.getElementById("formulaire").reset();
})