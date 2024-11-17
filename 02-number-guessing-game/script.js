const minimum = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// console.log(answer);

let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minimum} - ${maximum}`);

  guess = Number(guess);

  if (isNaN(guess) || guess < minimum || guess > maximum) {
    window.alert("Please enter a valid Number");
  } else {
    attempt++;
    if (guess > answer) {
      window.alert(`TOO HIGH, TRY AGAIN!`);
    } else if (guess < answer) {
      window.alert(`TOO LOW, TRY AGAIN!`);
    } else {
      window.alert(
        `FINALLY! ${answer} you got it right on ${attempt} attempts`
      );
      running = false;
    }
  }
}
