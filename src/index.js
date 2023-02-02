import StudentScore from "./class/StudentScore";
import { nilaiMahasiswa } from "./state";
import renderTableHTML from "./utils/renderToHtml";
import "./utils/saveButton";

const scoringForm = document.getElementById("scoring-form");
const nameInput = scoringForm.elements["name"];
const scoreInput = scoringForm.elements["score"];
const nameErrorMessage = document.getElementById("name-error-message");
const scoreErrorMessage = document.getElementById("score-error-message");

scoringForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nilaiBaru = new StudentScore(nameInput, scoreInput);

  if (!nilaiBaru.isNameValid) {
    nameErrorMessage.innerHTML = "Nama tidak valid";
  }

  if (!nilaiBaru.isScoreValid) {
    scoreErrorMessage.innerHTML = "Nilai tidak valid";
  }

  if (nilaiBaru.isValid) {
    nilaiMahasiswa.push({
      name: nilaiBaru.name,
      score: nilaiBaru.score,
    });

    event.target.reset();

    renderTableHTML();
  }
});

nameInput.addEventListener("input", () => {
  nameErrorMessage.innerHTML = "";
});

scoreInput.addEventListener("input", () => {
  scoreErrorMessage.innerHTML = "";
});
