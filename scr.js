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

const numbers = () => {
  const arrayal = {
    "2": [1, 2],
    "4": [1, 2, 3, 4],
    "6": [1, 2, 3, 4, 5, 6]
  }

  return arrayal[optionsEl.value] || "Error"
}

const working = (condition) => {

  if (condition) {

    displayEl.innerHTML = "";

    interval = setInterval(() => {
      const decision = () => {
        number = Math.floor(Math.random() * (numbers().length + 1));
        return number;
      }

      if (displayEl.classList.contains("colorDisplayYellow")) {
        displayEl.classList.remove("colorDisplayYellow");
        displayEl.classList.add("colorDisplayGreen");
      } else if (displayEl.classList.contains("colorDisplayGreen")) {
        displayEl.classList.add("colorDisplayYellow");
        displayEl.classList.remove("colorDisplayGreen");
      }

      decision()

      if (number === 0) {
        while (number === 0) {
          decision()
        }
        console.log(number);
        displayEl.innerHTML = number;

      } else {
        console.log(number);
        displayEl.innerHTML = number;
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
