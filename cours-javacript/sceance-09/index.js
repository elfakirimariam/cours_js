


document.querySelector(".btn-calculer").addEventListener("click",()=>{
    let a = Number(document.querySelector(".nombre1").value);

    let b = Number(document.querySelector(".nombre2").value);
   
    let resultat = a+b
   
    document.querySelector(".resultat").value = resultat
   
    if(resultat>20){
       document.querySelector(".resultat").style.backgroundColor = "red"
    }else{
       document.querySelector(".resultat").style.backgroundColor = "aqua"
    }
    
    console.log("ok!!!!")
}) 
 
let iresultat= document.querySelector(".resultat");

document.querySelector(".suprimer").addEventListener("click",()=>{
    let a = Number(document.querySelector(".nombre1").value=" ");//le vide kadiro fl value=" "

    let b = Number(document.querySelector(".nombre2").value=" ");
   
    let resultat = a+b
   
    document.querySelector(".btn-calculer").value = resultat
   
    if(resultat>20){
       document.querySelector(".resultat").style.backgroundColor = "red"
       document.querySelector(".resultat").value=resultat
    }else{
       document.querySelector(".resultat").style.backgroundColor = "aqua"
    } {
        document.querySelector(".resultat").style.backgroundColor = "aqua"
     }
     document.querySelector(".btn-calculer").textContent="vider" //textContent:bache nwaslo l contenue de texte
    console.log("ok!!!!")
})

let vinput =   document.querySelector("input")

for ( let i = 0 ; i <= vinput.length -1 ; i++){
    vinput[i].style.backgroundColor="red"
    vinput[i].style.color="white"
}

console.log(vinput[1]);
console.log(vinput.length);

document.querySelector(".btn-calculer").style.boder = "solid 2px green";
document.querySelector(".btn-calculer").style.marginTop = "20px";
document.querySelector(".btn-calculer").style.width = "150px";
document.querySelector(".btn-calculer").style.height = "50px";
document.querySelector(".btn-calculer").style.backgroundColor = " green";

// textcontent

let titre = document.getElementById("dd106")

titre.textContent="infrastructure";


//  ______________ge



















//queryselector * kadir rir l wahda wakha ykon nafs class radir lwla
//queryselectorall * kadir l plusieur elment
//les noeude c est les balises en html siblings h1 
//querySelector IL PERMET accede un element
//tag homa les balises
// les attribut homa likikono wasste les balise
// les selecteurs:une methode perment de accede un element
//querySelectorAll: kolchi rat appliqua 3lihe dacchi linari n modifiwhe
//querySelector:kit appliqua 3la lawla
//getselector by id("id"): bax ndiro l id
//getselector by classnam("class"): bax ndiro l class
//getselector by id("id"): bax ndiro l id