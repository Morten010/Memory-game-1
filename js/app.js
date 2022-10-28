/*
  For at aktivere et kort, tilføj en css class med navnet active
  eks. object.classList.add("active"); . men husk også at fjerne class hvis 
  kortet ikke matcher. .classList.remove("active");
*/

// Step 1. Tilføj click event på alle kort holder elemente <figure>.
// Step 2. Tilføj check om 2 billeder som er aktive matcher.

// Ekstra opgaver.
// 1. Indbyg en score som give + point ved korret match, og - point ved forkert.
// 2. Indbyg en reset knap så spillet kan genstrate.
// 3. Udskriv billeder i tilfældig rækkefølge.

//array of the pictures for the game

const cards = document.getElementsByClassName('card');

let memoryPictures = [
    'https://picsum.photos/seed/pic-1/300/300',
    'https://picsum.photos/seed/pic-2/300/300',
    'https://picsum.photos/seed/pic-3/300/300',
    'https://picsum.photos/seed/pic-4/300/300',
    'https://picsum.photos/seed/pic-5/300/300',
    'https://picsum.photos/seed/pic-6/300/300',
    'https://picsum.photos/seed/pic-7/300/300',
    'https://picsum.photos/seed/pic-8/300/300',
    'https://picsum.photos/seed/pic-1/300/300',
    'https://picsum.photos/seed/pic-2/300/300',
    'https://picsum.photos/seed/pic-3/300/300',
    'https://picsum.photos/seed/pic-4/300/300',
    'https://picsum.photos/seed/pic-5/300/300',
    'https://picsum.photos/seed/pic-6/300/300',
    'https://picsum.photos/seed/pic-7/300/300',
    'https://picsum.photos/seed/pic-8/300/300'
];

for(i = 0; i < cards.length; i++){
  let n = i;
    cards[i].addEventListener('click', (e) => {
    alert(`you have clicked card number ${n}`);
  });
  cards[n].firstElementChild.src = memoryPictures[n];
};