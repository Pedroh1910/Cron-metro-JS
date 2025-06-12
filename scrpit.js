//Declaração de Variaveis
let segundos = 0
let intervalo = null
//elemenos do DOM para manipulação
const display = document.getElementById("display")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")

//botão start
startBtn.addEventListener("click", iniciarCronometro)

//botão pausar
pauseBtn.addEventListener("click", pausarCronometro)

//botão resetar
resetBtn.addEventListener("click", resetCronometro)

//função de start no cronômetro
function iniciarCronometro(){
    if(intervalo)return //evita que exista mutiplos intervalos
//guarda em intervalo o passar de 1seg ou 1000ms
    intervalo = setInterval(()=>{
        segundos++
        atualizaDisplay()
    }, 1000)
}


//função de pausar no cronômetro
function pausarCronometro(){
    clearInterval(intervalo)
    intervalo = null
}

//função reset no cronômetro
function resetCronometro(){
    pausarCronometro()
    segundos = 0
    atualizaDisplay()
}

// função de formatar o tempo
function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais/60)
    const segundos = segundosTotais %60 
    return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`
}

//função que envia o tempo para pagina
function atualizaDisplay(){
    display.textContent =formatarTempo(segundos)
}
