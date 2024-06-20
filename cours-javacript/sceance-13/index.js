//methode-01
function Achat (v_id,v_article,v_prix,v_qte){
    this.id=v_id;
    this.prix=v_prix;
    this.article=v_article;
    this.qte=v_qte;
    //keys= value

    this.calculeTVA=function(){
        let TVA = 20/100;
        let totale = this.prix*this.qte;
        let totalettc = totale + (totale*TVA)
        
        return totalettc ;
    }
}




// const achat1 = new Achat(1,"clavier",150,10);//objet
// console.log(achat1.article) 
// console.log(achat1.calculeTVA())
class Personne{
  constructor(nom,prenom,age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  Afficher(){
    return "je m'appelle " + ""+this.nom + ""+this.prenom+""+"j'ai"+""+this.age
  }
}
const per1 = new Personne ("elfakiri","mariam",18)
console.log(per1.Afficher())


//methode-02
class Achat {
    constructor(v_id, v_article,v_prix,v_qte){
      this.id = v_id;
      this.article = v_article;
      this.prix = v_prix;
      this.qte = v_qte;
    }
    calculerTVA(){
     const TVA= 20/100
     let total = this.prix * this.qte;
     let  totalttc = total + (total*TVA)
       return totalttc;
    }
  }
  const achat1 = new Achat(1,"pc","300",3); 
  // console.log(achat1.article)
  // console.log(achat1.prix)
  console.log(achat1.calculerTVA())


  let branche = "devloppemen_digitale"
  console.log(branche.length) // xhal mn element fih   
  console.log(branche.charAt(6)) // ratjbd l element li i indice dyalo 6
  console.log(branche.substring(2,3)) // for delete 
  console.log(branche.toLowerCase()) // minuscule
  console.log(branche.toUpperCase()) //majuscule
  console.log(branche.split("")) // kathawalha l liste o ; 
  console.log(Array.from(branche)) // 
  console.log(branche.startsWith("d",1))// wach had string kibda b harf i radir true *ama dik 3 mnax braytih ybda *




let vDate = new Date(2021-3-20);
vDate.setMonth(5)
vDate.setHours(12.00)
console.log(vDate)

// set pour modifier 
// get makatodifiyax : kat3tk lyoma   

let nombre = 12.3
let mNombre = 54.7
let Nombre = -3.6
console.log(Math.ceil(nombre))//kay3tik le nombre max
console.log(Math.trunc(mNombre))//kayhayad l fasila
console.log(Math.floor(Nombre))// kay3tik nombre li srare o kayhayad fasila

console.log(Math.max(12,45,87,57))
console.log(Math.min(12,45,87,57))

let stagiaires = [
  {id:1,nom:"elfakiri",prenom:"mariam",note:16},
  {id:2,nom:"feyd",prenom:"mariam",note:18},
  {id:3,nom:"elkadiri",prenom:"najat",note:17},
]
liste_notes = stagiaires.map(function(item){
  return item.note
})
let maxNote = Math.max(...liste_notes);
let stagiaireList = stagiaires.filter(function(item){
  return item.note ===  maxNote
})
console.log(stagiaireList)
console.log(Math.max(...liste_notes ))
//round : majorite o kathayad fasila ila kant fayta .5 katzid wahed 

// open :   








