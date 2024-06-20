const article = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sed modi, beatae neque quo voluptas mariama, eaque commodi magni hic maryam dolores minima similique, minus mariam nihil deserunt maiores. Ex!"
let nameSearch = /mar[iy]ama?/ig;
//search method == resolt =-1 or index //rakkharaj lk lawal o ila mal9ahx ray3tk -1
const pos = article.search(nameSearch)
console.log(pos)

//match method == result == null or [] 
const matchSearch = article.match(nameSearch)
console.log(matchSearch);

//matchAll method


//replace method
const updatArticle = article.replace(nameSearch,"elfakiri");
console.log(updatArticle)

listModules = "POO HTML/JAVASCRIPT-CSS PHP"
arrModules = listModules.split(/[\s\-\/]/)
console.log(arrModules)

//test method === true fals
const tester = nameSearch.test(article);
console.log(tester)


//exec method === null or array ))) the same of match
const chercher = nameSearch.exec(article);
console.log(chercher)



let patternSt = /(\b^[a-zA-Z]+\b)\s(\b[a-zA-Z]+)\s([ID][D][0-9]{3})/gi;

stagiaires = [
    "NAOUAL ELADNANI DD106",
    "HIBA MRIBEH DD106",
    "NADA RACHIDI ID105"
];
for 
(let i=0 ; i<stagiaires.length ; i++ ){
    let patItem =stagiaires[i].replace(patternSt,"le groupe $3 le stagiare $1 $2 ");
    console.log(patItem);
}

