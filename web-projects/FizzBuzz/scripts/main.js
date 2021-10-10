// reference: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/problem-solving

// call this function onload on <body>
function fizzbuzz() {
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    let phrase1 = 'FizzBuzz';
    let phrase2 = 'Buzz';
    let phrase3 = "Fizz";

    // FizzBuzz starts from number 1
    for (let i = 1; i <= answer; i++) {
        if(i%3 === 0 && i%5 ===0) {
            console.log(phrase1);
            createPara(phrase1);
        } else if(i%5 === 0) {
            console.log(phrase2);
            createPara(phrase2);
        } else if(i%3 === 0 ) {
            console.log(phrase3);
            createPara(phrase3);
        } else {
            console.log(i);
            createPara(i);
        }
    }
}

// create a function for repetitive task
function createPara(phrase) {
    // reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
    let para = document.createElement("P");
    let text = document.createTextNode(phrase);
    para.appendChild(text);
    document.querySelector("div").appendChild(para);    
}
