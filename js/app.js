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

let cardsOpen = document.getElementsByClassName('open');
let score = 0;
let scoreKeeper = document.getElementById('score');
let cardsMatched = document.getElementsByClassName('matched') ;

let picname = memoryPictures[1].slice(27, 32);
for(i = 0; i < cards.length; i++){
  let n = i;
    cards[i].addEventListener('click', (e) => {
    cards[n].classList.add('open')
    //if the 2 cards match remove open and but match class
      if(cardsOpen.length == 2){
        if(cardsOpen[0].childNodes[1].src == cardsOpen[1].childNodes[1].src){
          cardsOpen[1].classList.add('matched');
          cardsOpen[0].classList.add('matched');

          cardsOpen[1].classList.remove('open');
          cardsOpen[0].classList.remove('open');
          
          score += 20
          scoreKeeper.innerHTML = score;
        } else{
          function resetPair() {
            cardsOpen[0].classList.remove('open');
            cardsOpen[0].classList.remove('open');
            score -= 10
            scoreKeeper.innerHTML = score;
          };
          setTimeout(resetPair, 500)
        };
      }
      if(cardsMatched.length === 16){
        console.log('Congratulation you won');
        document.getElementById('won').classList.add('done');
        confetti.start();
      }
  });
  cards[n].firstElementChild.src = memoryPictures[n];
  let picname = memoryPictures[n].slice(27, 32);
  cards[n].classList.add(picname);
};

let newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', () =>{
  for(i = 0; i < cards.length; i++){
    cards[i].classList.remove('matched')
    score = 0;
    scoreKeeper.innerHTML = score;
    confetti.stop();
    document.getElementById('won').classList.remove('done');
  }
});