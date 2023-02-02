import { nilaiMahasiswa } from "../state";

export default function generateNewHtml() {
  const html = String.raw;
  const tableBody = document.getElementById("score-table-body");

  const rows = nilaiMahasiswa
    .map(
      ({ name, score }, idx) => html`
        <tr>
          <td>${idx + 1}</td>
          <td>${name}</td>
          <td>${score}</td>
        </tr>
      `
    )
    .join("");

  tableBody.innerHTML = rows;
}
