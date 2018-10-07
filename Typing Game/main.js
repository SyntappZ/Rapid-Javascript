

// gooooooo
 function go(){
  changeDif();
  screenDisplay();
  init()
}
   // display the start screen
  function screenDisplay(){
    document.getElementById("startScreen").style.display = "none";
  }




// To change difficulty
function changeDif(){
  
  
  if (checkBox.checked) {
     time = 10;
     currentLevel = 10;
   }
   else{
     time = 15;
     currentLevel = 15;
   }
}




let currentLevel;
let time;
let score = 0;
let isPlaying;
let i = 0;





// DOM Elements
const checkBox = document.querySelector("#myCheck");
const wordInput = document.querySelector('#code-input');
const currentWord = document.querySelector('#current-code');
const scoreDisplay = document.querySelector('#score');
const scoreDisplay2 = document.querySelector('#score2');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const winner = document.querySelector('#winner');



const words = [
 'this',
 'else',
 'true',
 'switch',
 'while',
 'false',
 'const',
 'import',
 'default',
 'abstract',
 'continue',
 'boolean',
 'function',
 'debugger',
 'volatile',
 'interface',
 'transient',
 'protected',
 'implements',
 'synchronized',
 'frameRate',
 'setTimeout',
 'outerHeight',
 'clearTimeout',
 'querySelector',
 'clearInterval',
 'defaultStatus',
 'javaPackage',
 'clientInformation',
 'isPrototypeOf',
 'hasOwnProperty',
 'nthMostCommon',
 'getElementsById',
 'getElementsByTagName',
 'document.write()',
 'objectName.methodName()',
 'this.favColor = red;',
 'window.addEventListener()',
 'document.body.innerHTML = "wow"',
 'document.createTextNode("you")',
 'var you = document.getElementById("can")',
 'var you = document.getElementByTagName("do it");',// 41 words 40 numbers
 ' '
];


  
  


// Init Game
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}



// Start 
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }


  

  // If score is -1, display 0
  if (words === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = ' ' + score;
    scoreDisplay2.innerHTML = ' ' + score;
  }
}


// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show word
function showWord(words) {
  const orderList = i = i + 1;
  currentWord.innerHTML = words[orderList];
  if(orderList > 41){
    winner.style.display = 'block';
  }
}

// Countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = ' ' + time;
}






 
function checkStatus(){
  if (!isPlaying && time === 0){
    document.getElementById("endScreen").style.display = "block";
  }
   

  
}
function replay(){
  location.reload();
}

