import { saveAs } from "file-saver";
import { nilaiMahasiswa } from "../state";

const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(nilaiMahasiswa)], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "nilai.json");
});
