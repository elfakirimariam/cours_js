console.log(document.querySelector(".age").value) // 1

let a =Number(document.querySelector(".n1").value)
let b =Number(document.querySelector(".n2").value)
let resultat =a+b
console.log(resultat)

document.querySelector(".resultat").value=resultat
if (resultat>20){
    document.querySelector(".resultat").style.backgroundColor ="red"
}
else {
    document.querySelector(".resultat").style.backgroundColor ="aqua"
}

document.querySelector(".btn-calculer").addEventListener("click",() => {
    let a =Number(document.querySelector(".n1").value)
    let b =Number(document.querySelector(".n2").value)
    let resultat =a+b
    console.log(resultat)
    
    document.querySelector(".resultat").value=resultat
   
})

document.querySelector(".btn-inicialiser").addEventListener("click",() => {
    let a =Number(document.querySelector(".n1").value="")
    let b =Number(document.querySelector(".n2").value="")
    let resultat ="a+b"
    console.log(resultat)
    console.log("no")
})


























// f java kandiro else if 
// 1 * kansta3mloha bax bjbdo l value