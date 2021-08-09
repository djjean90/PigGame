'use strict';

const resetBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

//Starting screen settings

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Roll Button

let currentScore3 = 0;

rollBtn.addEventListener('click', () => {
  const randNum = Math.trunc(Math.random() * 6 + 1);
  //   console.log(randNum);
  diceEl.src = `dice-${randNum}.png`;
  diceEl.classList.remove('hidden');

  if (randNum !== 1) {
    currentScore3 += randNum;
    currentScore0.textContent = currentScore3;
  }
  // else SWITCH TO NEXT PLAYER
});

// New Game Button

resetBtn.addEventListener('click', () => {
  console.log(currentScore3);
  currentScore3 = 0;
  currentScore0.textContent = 0;
});
