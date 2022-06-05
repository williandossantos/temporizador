
function criaSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString("pt-BR",{
        hour12:false,
        timeZone:"UTC"
    })
}


let tempo = document.querySelector(".tempo")
let iniciar = document.querySelector(".iniciar")
let pausar = document.querySelector(".pausar")
let zerar = document.querySelector(".zerar")
let segundos = 0
let timer = 0

function iniciaTempo(){
    timer = setInterval(()=>{
        segundos++
        tempo.innerText = criaSegundos(segundos) 
    },1000)
}

document.addEventListener("click", e =>{
    const el = e.target

    if(el.classList.contains('iniciar')){
        clearInterval(timer)
        iniciaTempo()
        tempo.style.color= "green"
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer)
        tempo.style.color= "orange"
    }
    if(el.classList.contains('zerar')){
        clearInterval(timer)
        tempo.innerHTML= "00:00:00"
        segundos=0
        tempo.style.color= "black"
    }
    
})

/*
iniciar.addEventListener("click",e => {
    clearInterval(timer)
    iniciaTempo()

    tempo.style.color= "green"
})

pausar.addEventListener("click",e => {
    clearInterval(timer)
    tempo.style.color= "orange"
})

zerar.addEventListener("click",e => {
    clearInterval(timer)
    tempo.innerHTML= "00:00:00"
    segundos=0
    tempo.style.color= "black"
})

*/








