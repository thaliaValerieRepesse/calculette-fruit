let select = document.getElementById('choixFruit');
let listeFruits = ['pommes', 'poires', 'cerises', 'ananas', 'kiwis', 'pasteques', 'bananes'];
let listeOptions = '<option selected disabled >Choisir un fruit</option>';
let i = 0;

while(i < listeFruits.length){
    console.log('liste options : ' + listeOptions);
    listeOptions += `<option>${listeFruits[i]}</option>`;
    i++;
}

select.innerHTML = listeOptions;

function calcul(fruit,poids){

    let prix = 0;

    fruit = fruit.toLowerCase();

    switch(fruit){
        case 'pommes' : prix = 3.74; break;
        case 'poires' : prix = 4.15; break;
        case 'cerises' : prix = 5.03; break;
        case 'ananas' : prix = 4.58; break;
        case 'kiwis' : prix = 6.25; break;
        case 'pasteques' : prix = 2.74; break;
        case 'bananes' : prix = 3.92; break; 
        default : return 'Erreur, nous ne connaissons pas ce fruit.'; 
    }

    if(isNaN(poids) || poids == 0){
        return 'Erreur, le poids n\'est pas correct';
    }

    let resultat = (poids*prix/1000);
        resultat = resultat.toFixed(2);

    return `${poids} grammes de ${fruit} coutent ${resultat} €`  
}

console.log(calcul("kiwis",1000
));

let form = document.getElementById('monForm');
form.addEventListener('submit', function (e){
e.preventDefault();  

let fruitChoisi = select.value,
  poidChoisi = document.getElementById('choixPoids').value

document.getElementById('divMessage').innerHTML = calcul(fruitChoisi, poidChoisi);
})

let listeLiens = document.querySelectorAll('#prixKilo li a');

console.log(listeLiens);

for( let i = 0; i< listeLiens.length; i++){

    listeLiens[i].addEventListener('click', function(e){
        e.preventDefault();

        let contenuLien = this.textContent;

        document.getElementById('affichagePrixKilo').innerHTML = `<p> ${calcul(contenuLien, "1000")} </p>`
    })
}