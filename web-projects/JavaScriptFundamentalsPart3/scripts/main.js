let heading = document.querySelector("h1");

function fizzbuzz() {
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    let i;
    // FizzBuzz starts from number 1
    for (i = 1; i <= answer; i++) {
        if(i%3 === 0 && i%5 ===0) {
            console.log("FizzBuzz");
            continue;
        } else if(i%5 === 0) {
            console.log("Buzz");
            continue;
        } else if(i%3 === 0 ) {
            console.log("Fizz");
            continue;
        }else {
            console.log(i);
        }
        
    }

}

