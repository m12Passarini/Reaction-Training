
/* Objects */
const allTimeEl = document.querySelector("#alltime")
const switchTimeEl = document.querySelector("#switchtime")
const initialEl = document.querySelector("#initial")
const resetEl = document.querySelector("#reset")
const paragraphEl = document.querySelector("#paragraph")
const inputsEl = document.querySelector(".inputs")
const optionsEl = document.querySelector("#options")
const displayEl = document.querySelector("#display")

/*
  allTimeEl = o tempo total em que vai acontecer os eventos de troca
  switchTimeEl = o tempo para que mude a cor da pagina
  optionsEl  = quantidade cores/numeros que irao aparecer na pagina por vez
  initialEl = começa o evento
  resetEl = termina o evento
  inputsEl = Dados para a operação
  paragraphEl = texto de explicação
  displayEl = lugar em que aparece o resultado
*/

/* Functions */
function start() {

  paragraphEl.style.display = "none"
  inputsEl.style.display = "none"
  optionsEl.style.display = "none"
  initialEl.style.display = "none"
  resetEl.style.display = "flex"
  displayEl.style.display = "flex"

  working(true)
}

function end() {

  paragraphEl.style.display = "flex"
  inputsEl.style.display = "flex"
  optionsEl.style.display = "flex"
  initialEl.style.display = "flex"
  resetEl.style.display = "none"
  displayEl.style.display = "none"

  working(false)
}

let arrayal = []

function working(condition) {

  switch (optionsEl.value) {
    case '2':
      arrayal = [1, 2]
    break; 
    case '4':
      arrayal = [1, 2, 3, 4]
    break;
    case '6': 
      arrayal = [1, 2, 3, 4, 5, 6]
    break;
  }
  

  if (condition) {
    interval = setInterval(() => {
      const decision = Math.floor(Math.random() * (arrayal.length + 1))
      if (decision === 0) {
        console.log(decision + 1)
        displayEl.innerHTML = decision + 1
      } else {
        console.log(decision)
        displayEl.innerHTML = decision
      }
    }, switchTimeEl.value * 1000);
  
    timeOut = setTimeout(() => {
      clearInterval(interval)
      end()
    }, allTimeEl.value * 1000); 

  } else {

    clearInterval(interval)
    clearTimeout(timeOut)

  }
}
  
/* events */
initialEl.addEventListener("click", start)
resetEl.addEventListener("click", end)