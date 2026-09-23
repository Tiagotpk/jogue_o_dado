'use strict';

//Seletores de elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
