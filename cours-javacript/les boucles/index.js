
for(let i=0 ; i<=5 ;i++){
    console.log(i)
}
//exemple-1
let jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"]

for(let i=0; i<=5;i++){
    console.log(jours[i])
}
console.log()

//exemple-2

for(let j=0; j<=jours.lenght -1;i++){
    console.log(jours[i])
}
//for in

for (let j in  jours){
    console.log(j)
}
// for / of

for (let j of  jours){
    console.log(j)
}

//while
let n;
n=10
while (n>=0){
    console.log(n)
    n -= 1
}

//do
let x = -1;
do{
    console.log(x)
    x -= 1
}
while(x>=0)

// for each
let textjours = "";

jours.forEach(myFunction)

function myFunction(value,index,array){
    textjours+= "" + value;
    console.log(textjours)
}
//break 
for (let i=0; i<=(jours.length -1);i++){
    if (i === 3){
        console.log("stoop")
        break;
    }
    console.log(jours[i])
}
//continue
for (let i=0; i<=(jours.length -1);i++){
    if (i === 3){
        console.log("stoop")
        continue;
    }
    console.log(jours[i])
}


let xam;
do{
    console.log(xam)
    xam+=1
}while(xam >0)






//i++ kola mara ytzad wahed
// in katjbd indice
// of kayjbd l valeur
//jours[3] bach njabdo li indice dyalha 3
//lenght ch7al mn element feh
// while hta katha9a9 l condition
// do hta ki executer 3ala a9al mera
//let kat3rf rir f block
//var kat
// java est n'executer pas line par line
// continue le code li wra contenu makat executach
// break katstopa lina 

