let testdate = new Date()
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}

console.log("Today is " + day);
//exemple
let abreviation;
let labelle ;
abreviation = "DD"

switch (abreviation ) {
    case "DD":
       labelle = "developpement digatale";
        break;
    case "ID":
        labelle  = "infrastructure digitale";
        break;
    case "MEC":
        labelle = "mecanique";
        break;
    default:
        labelle  = "Unknown abreviation";
}

console.log(labelle);















let domaine;
switch(domaine){
    case "dev_digital":
        domaine = "gooood"
        break;
    case "infra_digital":
        domaine = "pass"
        break;
    default:
        domaine = "bra"   
}
