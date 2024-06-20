const stagiaire =[ {
    id:1,
    nom:"",
    age:20,
    branche:"DD106"
},
{
    id:1,
    nom:"yassine",
    age:21,
    branche:"DD"
}]
console.log(stagiaire)
console.log(stagiaire.nom)
console.log(stagiaire[1].nom)


//stagiaire sous forme json
let stagiairejson =JSON.stringify(stagiaire)
console.log(stagiairejson)

//bax traj3o objet 
let stagiairejsons =JSON.parse(stagiairejson)
console.log(stagiairejsons)

//AJAX
document.getElementById("load-data").addEventListener("click",loadDtata);
function loadDtata(){
    let etudiant;
    let content="";
    const request = new XMLHttpRequest();
    request.open("GET","index.json",true);
    request.onreadystatechange=function(){
        if(this.readyState ==4 && this.status ===200){
            let data = JSON.parse(this.responseText);
            etudiant=data.stagiaire;
            console.log(etudiant);
            for(let i=0;i<etudiant.length;i++){
                content+=`<li>${etudiant[i].nom}</li>`;                                                                                                                                                                                                 
            }``
            console.log(content);
            document.getElementById("liste_stagiaire").innerHTML=content;
        }
    }
    request.send()
}






































