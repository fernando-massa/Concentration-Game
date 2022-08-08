
let cardsFlipped = 0;

const cardTypes=[
    'images/dragon-solid.svg','images/dragon-solid.svg','images/fire-solid.svg','images/fire-solid.svg',
    'images/floppy-disk-solid.svg', 'images/floppy-disk-solid.svg', 'images/ghost-solid.svg', 'images/ghost-solid.svg',
    'images/guitar-solid.svg', 'images/guitar-solid.svg', 'images/ice-cream-solid.svg', 'images/ice-cream-solid.svg',
    'images/poo-solid.svg', 'images/poo-solid.svg', 'images/skull-crossbones-solid.svg', 'images/skull-crossbones-solid.svg',
    'images/umbrella-beach-solid.svg', 'images/umbrella-beach-solid.svg', 'images/user-astronaut-solid.svg', 'images/user-astronaut-solid.svg'
]

// RANDONMIZE CARDS
cardTypes.sort(()=>(Math.random()*2)-1)

console.log(cardTypes);

// element references
const cells = document.querySelectorAll("img");

//const backImg = document.querySelectorAll('img');
// backImg.src="images/dragon-solid.svg";
// document.querySelectorAll('img').src="images/dragon-solid.svg";

for (let index = 0; index < cardTypes.length; index++) {
    const cell = cells[index];
cell.src=cardTypes[index];
}

function starGame() {
    //document.querySelectorAll('img').src="/images/dragon-solid.svg";
    
    
    cells.innerHTML = '<img src="images/dragon-solid.svg"></img>';
}

console.log(cells)
//document.querySelectorAll("img").addEventListener('click', showIcon)
//document.querySelectorAll('.picture').addEventListener('click', showIcon)
 //this.innerHTML = '<img src="images/dragon-solid.svg"></img>'
 //cells.addEventListener('click', showIcon)

//document.querySelector('table').addEventListener('click', handleMove);

function showIcon(evt) {
    console.log("click")
    //this.innerHTML = '<img src="images/dragon-solid.svg"></img>'

  }

