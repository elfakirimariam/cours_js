document.getElementById("btn-hide").addEventListener("click",function(){
    $(".title-2").hide() //bhal display none
    //$(".liste li")
    $(this).css("background-color","red")
    $(this).hide()
   
})
document.getElementById("btn-show").addEventListener("click",function(){
    $(".title-2").show()
    $("#btn-hide").show()
    $(this).addClass("info")
    
})
$("#btn-ajouter").click(function(){
    console.log("You Clicked Your b")
})
$(document).ready(function(){
    $("#btn-ajouter").click(function(){
        console.log("You Clicked Your b")
    }) 
})//kat executa apres le dom
$("#btn-ajouter").addClass("info")

$("#btn-modifier").click(function(){
    $(".liste li").each(function(item,itemvalue){
        console.log(itemvalue)
        if($(this).hasClass(tit)){

        }
    })
})



//aiouter attribut : attr(class,valeur)
//foretch = each
