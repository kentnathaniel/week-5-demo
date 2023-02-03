const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const btn = document.querySelector(".btn");

// --------------------------------
// Synchronous
/* btn.addEventListener("click", () => {

  setTimeout(() => {
    red.style.color = "red";
  }, 1500);

  setTimeout(() => {
    yellow.style.color = "yellow";
  }, 1500);

  setTimeout(() => {
    green.style.color = "green";
  }, 1500);
}); */

// --------------------------------
// Callback hell style
/* btn.addEventListener("click", () => {
  setTimeout(() => {
    red.style.color = "red";
    setTimeout(() => {
      yellow.style.color = "yellow";
      setTimeout(() => {
        green.style.color = "green";
      }, 1500);
    }, 1500);
  }, 1500);
});
 */

// --------------------------------
// Promise chaining style
/* function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

btn.addEventListener("click", () => {
  delay(1500)
    .then(() => {
      red.style.color = "red";
      return delay(1500);
    })
    .then(() => {
      yellow.style.color = "yellow";
      return delay(1500);
    })
    .then(() => {
      green.style.color = "green";
    });
}); */

// --------------------------------
// Async-await style
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

btn.addEventListener("click", async () => {
  await delay(1500);
  red.style.color = "red";

  await delay(1500);
  yellow.style.color = "yellow";

  await delay(1500);
  green.style.color = "green";
});
