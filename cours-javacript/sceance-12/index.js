//document.querySelector(".right").addEventListener("keypress",function(event){
//    event.preventDefault()
//    console.log(event.keyCode);
//     if (event.keyCode === 13){
//        document.querySelector(".btn").classList.add("change_border_color");
//         document.querySelector(".btn").classList.remove("error");
//    }
//    else if (event.keyCode === 32){
//        document.querySelector(".btn").classList.add("error");
//        document.querySelector(".btn").classList.remove("change_border_color")
//     }
// console.log("you clicked on a button")
// })
document.querySelector(".btn-ajouter").addEventListener("click",function(e){
    e.preventDefault();
    // document.getelementbyid("").submit();
    let nom = document.forms["SignUpForm"]["login"].value

    if(nom === ""){
        document.querySelector(".right").classList.add("error");
    }
    else if(nom.length < 3 || nom.length > 25){
        console.log("hello")
        document.querySelector(".error-login").innerText = "login doit etre entre 3 et 25"
        document.querySelector(".error-login").classList.remove("error-login");
    }
    document.getElementById("SignUpForm").reset();

})





























// e.preventDefault : bax nkhali dakxi itsayft
// submit : bax itsayfto les donne dyal formulaire
//classlist : bax nzido une class l un element  