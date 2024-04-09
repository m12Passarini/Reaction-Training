
/* Objetos */
const allTimeEl = document.querySelector("#alltime")
const switchTimeEl = document.querySelector("#switchtime")
const optionsEl = document.querySelector("#options")
const initialEl = document.querySelector("#initial")
const resetEl = document.querySelector("#reset")
const inputsEl = document.querySelector(".inputs")
const paragraphEl = document.querySelector("#paragraph")


/*
  allTimeEl = o tempo total em que vai acontecer os eventos de troca
  switchTimeEl = o tempo para que mude a cor da pagina
  optionsEl  = quantidade cores/numeros que irao aparecer na pagina por vez
  initialEl = começa o evento
  resetEl = termina o evento
  inputsEl = Dados para a operação
  paragraphEl = texto de explicação
*/

function start() {

  paragraphEl.style.display = "none"
  inputsEl.style.display = "none"
  initialEl.style.display = "none"
  resetEl.style.display = "flex"

  working(true)
}

function end() {

  paragraphEl.style.display = "flex"
  inputsEl.style.display = "flex"
  initialEl.style.display = "flex"
  resetEl.style.display = "none"

  working(false)
}

optionsnumbers = [1, 2, 3, 4, 5, 6]  //* Input do optionsEl

/* optionsnumbers = [] */

/* while (optionsEl.value > 0) {
  amount = optionsEl.value  -1
  optionsnumbers.push(amount)
}
 */

function working(condition) {

  if (condition) {
    interval = setInterval(() => {
      const decision = Math.floor(Math.random() * (optionsnumbers.length + 1))
      console.log(decision)
    }, switchTimeEl.value * 1000); 
  } else {
    clearInterval(interval)
  }
  
    if(condition) {
    setTimeout(() => {
      clearInterval(interval)
      end()
    }, allTimeEl.value * 1000); 
  }
    
}
  
/* eventos */
initialEl.addEventListener("click", start)
resetEl.addEventListener("click", end)