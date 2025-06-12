let milissegundos = 0
let intervalo = null

const display = document.getElementById("display")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")
const bgColorBtn = document.getElementById("bgColorBtn")

startBtn.addEventListener("click", iniciarCronometro)
pauseBtn.addEventListener("click", pausarCronometro)
resetBtn.addEventListener("click", resetCronometro)
bgColorBtn.addEventListener("click", mudarCorFundo)

function iniciarCronometro() {
  if (intervalo) return
  intervalo = setInterval(() => {
    milissegundos += 10
    atualizaDisplay()
  }, 10)
}

function pausarCronometro() {
  clearInterval(intervalo)
  intervalo = null
}

function resetCronometro() {
  pausarCronometro()
  milissegundos = 0
  atualizaDisplay()
}

function formatarTempo(ms) {
  const totalSegundos = Math.floor(ms / 1000)
  const minutos = Math.floor(totalSegundos / 60)
  const segundos = totalSegundos % 60
  const milis = Math.floor((ms % 1000) / 10)
  return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milis).padStart(2, '0')}`
}

function atualizaDisplay() {
  display.textContent = formatarTempo(milissegundos)
}

function mudarCorFundo() {
  const cores = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFA07A", "#E6E6FA", "#F0E68C", "#20B2AA", "#D3D3D3"]
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)]
  document.body.style.backgroundColor = corAleatoria
}
