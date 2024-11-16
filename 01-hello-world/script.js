const letterElements = document.querySelectorAll(".greeting-letter");

const userNameDisplay = document.getElementById("userName");

let userName = window.prompt("Please enter your Name");

if (!userName) {
  userName = `you don't know your NAME`;
  userNameDisplay.style.letterSpacing = `0px`;
}

userNameDisplay.textContent = `${userName}!`;

console.log(`Hover over "HELLO" to see magic!`);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

letterElements.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    letter.style.color = getRandomColor();
    letter.style.transform = `scale(1.5)`;
  });
  letter.addEventListener("mouseleave", () => {
    letter.style.transform = `scale(1)`;
  });
});
