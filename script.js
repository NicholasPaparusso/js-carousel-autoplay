//dichiaro gli elementi del dom
let slider = document.querySelector('.slider');
let thumbnail = document.querySelector('.thumbnail');
let body = document.querySelector('body')

// Dichiaro le variabili
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];
let counter = 0;
let imagesTag ='';
let thumbTag ='';





// ciclo l'arrey e creo le stringhe da inserire all'iterno di .slider e .thumbnail

for (let i = 0 ; i < images.length ; i++){
  imagesTag += `
     <img class="item-slider" src="./img/${images[i]}" alt="${images[i]}">
  `;
  thumbTag += `
  <img class="item-thumb" src="./img/${images[i]}" alt="${images[i]}">
`;

}


// Stampo gli elementi all'interno dell'html dinamicamente
slider.innerHTML += imagesTag;
thumbnail.innerHTML += thumbTag;



//Creo 2 class-list per le immagini

const itemSlider = document.getElementsByClassName('item-slider');
const itemThumb = document.getElementsByClassName('item-thumb');

// aggiungo di default a indice 0 della class-list la classe active per visualizzare il primo elemento della lista 

itemSlider[0].classList.add('active');
itemThumb[0].classList.add('active');


const up = document.querySelector('.up');
const down = document.querySelector('.down');
down.addEventListener('click', function() {
 changeDown();
})

up.addEventListener('click', function() {
  changeUp();
})

// Aggiunta delle timing function 
// Creo una variabile booleana per far ripartire il corousel
let isPaused = false;

let slide = setInterval(function(){
  if(!isPaused){
    changeDown();
    console.log(counter);
  }
}, 2000)

slider.addEventListener('mouseover', function(){
  if(!isPaused){
  isPaused= true;
  console.log(isPaused);
  };
})

slider.addEventListener('mouseout', function(){
  if(isPaused){
    isPaused=false;
    console.log(isPaused);
  };
})




//
function changeUp(){
  itemSlider[counter].classList.remove('active');
  itemThumb[counter].classList.remove('active');
  counter--;
  if(counter < 0){counter = images.length -1;}
  itemSlider[counter].classList.add('active');
  itemThumb[counter].classList.add('active');
}

function changeDown(){
  itemSlider[counter].classList.remove('active');
  itemThumb[counter].classList.remove('active');
  counter++;
  if(counter === images.length){counter=0;}
  itemSlider[counter].classList.add('active');
  itemThumb[counter].classList.add('active');
}





