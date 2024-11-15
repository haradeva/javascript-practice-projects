const head1 = document.getElementById("wordH");
const head2 = document.getElementById("wordE");
const head3 = document.getElementById("wordL1");
const head4 = document.getElementById("wordL2");
const head5 = document.getElementById("wordO");
const inputName = document.getElementById("name");

head1.textContent = `H`;
head2.textContent = `E`;
head3.textContent = `L`;
head4.textContent = `L`;
head5.textContent = `O`;

const userName = window.prompt("Please enter your Name");

inputName.textContent = `${userName}`;

console.log(
  `saty still and check the hover over to HELLO if you haven't ${userName}`
);
