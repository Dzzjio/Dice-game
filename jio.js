'use strict'


// 1 btn pressed, random num generated from 1-6
// 2 if else the num to imn
// render that img 

const guess = Number(prompt('enter your guess'))

const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

let num = Math.floor(Math.random() * 6) + 1
btn.addEventListener('click', function(){
   if(num == 1){
      img.src = 'dice-one.png';
   }else if (num == 2) {
      img.src = 'dice-two.png';
   }else if (num == 3) {
      img.src = 'dice-three.png';
   }else if (num == 4) {
      img.src = 'dice-four.png';
   }else if (num == 5) {
      img.src = 'dice-five.png';
   }else if (num == 6) {
      img.src = 'dice-six.png';
   }
})

if(guess == num){
   alert('gj dude')
}else {
   alert('ehh')
}