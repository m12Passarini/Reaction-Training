const allTimeEl = document.querySelector("#alltime");
const switchTimeEl = document.querySelector("#switchtime");
const initialEl = document.querySelector("#initial");
const resetEl = document.querySelector("#reset");
const paragraphEl = document.querySelector("#paragraph");
const displayEl = document.querySelector("#display");
const optionsEl = document.querySelector("#options");
const inputsEl = document.querySelector(".inputs");

const start = () => {

  if (allTimeEl.value > 0 && switchTimeEl.value > 0) {

    paragraphEl.style.display = "none";
    inputsEl.style.display = "none";
    optionsEl.style.display = "none";
    initialEl.style.display = "none";
    resetEl.style.display = "flex";
    displayEl.style.display = "flex";

    working(true);

  } else {
    alert("There may be some blank values");
  }
}

const end = () => {

  paragraphEl.style.display = "flex";
  inputsEl.style.display = "flex";
  optionsEl.style.display = "flex";
  initialEl.style.display = "flex";
  resetEl.style.display = "none";
  displayEl.style.display = "none";

  working(false);
}

let arrayal = [];

const working = (condition) => {
  switch (optionsEl.value) {
    case '2':
      arrayal = [1, 2];
    break;
    case '4':
      arrayal = [1, 2, 3, 4];
    break;
    case '6':
      arrayal = [1, 2, 3, 4, 5, 6];
    break;
    default: console.log('Error');
  }

  if (condition) {

    interval = setInterval(() => {
      const decision = Math.floor(Math.random() * (arrayal.length + 1));

      if (displayEl.classList.contains("colorDisplayYellow")) {
        displayEl.classList.remove("colorDisplayYellow");
        displayEl.classList.add("colorDisplayGreen");
      } else if (displayEl.classList.contains("colorDisplayGreen")) {
        displayEl.classList.add("colorDisplayYellow");
        displayEl.classList.remove("colorDisplayGreen");
      }

      if (decision === 0) {
        console.log(decision + 1);
        displayEl.innerHTML = decision + 1;

      } else {
        console.log(decision);
        displayEl.innerHTML = decision;
      }
    }, switchTimeEl.value * 1000);

    timeOut = setTimeout(() => {
      clearInterval(interval);
      end();
    }, allTimeEl.value * 1000);

  } else {
    clearInterval(interval);
    clearTimeout(timeOut);
  }
}

initialEl.addEventListener("click", start);
resetEl.addEventListener("click", end);
