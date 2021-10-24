//find a div with id of 'container'
const container = document.querySelector('#container'); 

//add a <div> to 'container'
const content = document.createElement('div'); //create in memory
content.classList.add('content'); //add a class to the new div
content.textContent = 'This is the glorious text-content!'; //add text

container.appendChild(content); //append the new div

//add a <p> to 'container'
const para = document.createElement('p');
para.textContent = "Hey I'm red!";

container.appendChild(para);

//add a <h3> to 'container'
const smallHeading = document.createElement('h3');
smallHeading.textContent = "I'm a blue h3!";

container.appendChild(smallHeading);

//create a <div> with <h1> and <p> before adding to 'container'
const largeDiv = document.createElement('div');
const largeHeading = document.createElement('h1');
const largePara = document.createElement('p');

largeHeading.textContent = "I'm in a div";
largePara.textContent = "ME TOO!";

largeDiv.appendChild(largeHeading);
largeDiv.appendChild(largePara);
container.appendChild(largeDiv);

// about event handling

//method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

btn2.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
