import { saveAs } from "file-saver";
import JSZip from "jszip";
import { nilaiMahasiswa } from "../state";

const saveButton = document.getElementById("save-button");
const fileName = document.getElementById("file-name");

/* saveButton.addEventListener("click", () => {
  const zip = new JSZip();
  zip.file("nilai.json", JSON.stringify(nilaiMahasiswa));

  zip
    .generateAsync({ type: "blob" })
    .then(function (content) {
      saveAs(content, "file.zip");
    })
    .catch((e) => console.log(e));
}); */

saveButton.addEventListener("click", async () => {
  try {
    const zip = new JSZip();
    zip.file("nilai.json", JSON.stringify(nilaiMahasiswa));

    const content = await zip.generateAsync({ type: "blob" });

    saveAs(content, `${fileName.value}.zip`);
    fileName.value = "";
  } catch (e) {
    console.log(e);
  }
});
