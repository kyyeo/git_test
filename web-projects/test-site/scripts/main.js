/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Bob';
myVariable;

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
};

// same thing as above!
let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Ouch! Stop poking me!')
};
*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/background.jpg') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/background.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  