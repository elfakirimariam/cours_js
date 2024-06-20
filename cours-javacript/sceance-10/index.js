//___________________________creation et supression d'un element DOM______________________________________________





//____________________________________exemple-02____________________________________________





//___________________________________button-01___________________________________________

document.querySelector(".btn-click").addEventListener("click",()=>{

    const parent =document.querySelector(".section-1")

const enfant =document.createElement("h1")

enfant.innerHTML ="learn JS "

enfant.style.backgroundColor = "aqua"

parent.append(enfant)




const shildren =document.createElement("p")

shildren.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut quo voluptatem ut sequi nam eligendi, aliquid quos corrupti quia aperiam nobis facilis cupiditate qui rerum deleniti. Saepe, officiis! Unde."

shildren.style.color="blue"
shildren.style.fontSize="20px"

parent.append(shildren)

})
//___________________________________button-02 (suprimer)___________________________________________


document.querySelector(".btn").addEventListener("click",()=>{

    document.querySelector("h2").remove()

})
//___________________________________button-02 (suprimer enfant)__________________________________

let famille = document.querySelector(".section")
let enfants = document.querySelector("h3")
famille.removeChild(enfants)

//___________________________________button-02 (remplacer)___________________________________
encien.replaceChild(nauveau)

//__________________________________ajout de style___________________________________________
selection.classList.add(classe)

//__________________________________supression  style_________________________________________
selection.classList.remove(classe)

//__________________________________attributs______________________________________________________

selection.setattributs(id,value)

//__________________________________remove attribute______________________________________

selection.removeattributs(id,value)









