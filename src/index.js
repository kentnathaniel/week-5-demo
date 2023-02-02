import StudentScore from "./class/StudentScore";
import { nilaiMahasiswa } from "./state";
import renderTableHTML from "./utils/renderToHtml";
import "./utils/saveButton";

const scoringForm = document.getElementById("scoring-form");
const nameInput = scoringForm.elements["name"];
const scoreInput = scoringForm.elements["score"];

scoringForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nilaiBaru = new StudentScore(nameInput, scoreInput);

  if (nilaiBaru.isValid) {
    nilaiMahasiswa.push({
      name: nilaiBaru.name,
      score: nilaiBaru.score,
    });

    renderTableHTML();
  }
});
