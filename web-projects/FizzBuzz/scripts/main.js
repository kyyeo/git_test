

function fizzbuzz() {
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    let para = document.querySelector("div");
    let phrase1 = 'FizzBUzz';
    let phrase2 = 'Buzz';
    let phrase3 = "Fizz";

    // FizzBuzz starts from number 1
    for (let i = 1; i <= answer; i++) {
        if(i%3 === 0 && i%5 ===0) {
            console.log(phrase1);
            let para = document.createElement("p");
            let text = document.createTextNode(phrase1);
            para.appendChild(text);
            continue;
        } else if(i%5 === 0) {
            console.log(phrase2);
            let text = document.createTextNode(phrase2);
            para.appendChild(text);
            continue;
        } else if(i%3 === 0 ) {
            console.log(phrase3);
            let text = document.createTextNode(phrase3);
            para.appendChild(text);
            continue;
        } else {
            console.log(i);
        }
    }
}

