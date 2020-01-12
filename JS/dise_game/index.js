let = winText = document.getElementsByClassName('win-text')[0];
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2) {
  winText.innerHTML = '🚩 Player one won!!!';
} else if (randomNumber1 < randomNumber2) {
  winText.innerHTML = 'Player two won!!! 🚩';
} else {
  winText.innerHTML = "🚩 It's a draw!!! 🚩";
}

document.getElementsByClassName('img1')[0].src = 'images/dice' + randomNumber1 + '.png';
document.getElementsByClassName('img2')[0].src = 'images/dice' + randomNumber2 + '.png';
