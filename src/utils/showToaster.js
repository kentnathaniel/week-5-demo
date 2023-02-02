import { waitFor } from "./waitFor";

const toasterNotif = document.getElementById("success-notif");

export default async function showToaster() {
  toasterNotif.classList.add("show");
  await waitFor(2500);
  toasterNotif.classList.remove("show");
}
