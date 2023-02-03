const btnRandomNumber = document.querySelector(".random-number-generator");
const insertHereDiv = document.querySelector(".insert-here");

function genereteNumberNode() {
  const newNumber = document.createElement("p");
  newNumber.textContent = Math.floor(Math.random() * 100);

  return newNumber;
}

btnRandomNumber.addEventListener("click", () => {
  const newNode = genereteNumberNode();

  insertHereDiv.appendChild(newNode);
});
