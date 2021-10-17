
const divBoost = document.querySelector('.div-conversor-boost')
const divCalculo = document.querySelector('.div-btn-calcular')
const btnBoost = document.querySelector('#btn-boost')

const liL = document.querySelector('#L')
const liC = document.querySelector('#C')
const liDeltaL = document.querySelector('#deltaL')
const liDeltaC = document.querySelector('#deltaC')

const inputL = document.querySelector('#valor-L')
const inputC = document.querySelector('#valor-C')
const inputDeltaL = document.querySelector('#valor-deltaL')
const inputDeltaC = document.querySelector('#valor-deltaC')

const divResultado = document.querySelector('.div-resultado')
const textoResultado = document.querySelector('.textoResultado')




function mostrarConversorBoost() {
    divBoost.style.display = 'initial'
    divCalculo.style.display = 'initial'

    liDeltaC.style.display = 'none'
    liDeltaL.style.display = 'none'

}

function trocaropcao () {

    if ( liDeltaC.style.display== 'none', liDeltaL.style.display == 'none') {
        
        liDeltaC.style.display = 'initial'
        liDeltaL.style.display = 'initial'
        liL.style.display = 'none'
        liC.style.display = 'none'

        inputL.value = 0
        inputC.value = 0

    } else if (liDeltaC.style.display!= 'none', liDeltaL.style.display != 'none') {

        liDeltaC.style.display = 'none'
        liDeltaL.style.display = 'none'
        liL.style.display = 'initial'
        liC.style.display = 'initial'

        inputDeltaL.value = 0
        inputDeltaC.value = 0
    }
}

function calculosBoost() {

    let vs = document.getElementById('valor-vs').value;
    let vo = document.getElementById('valor-vo').value;
    let io = document.getElementById('valor-io').value;
    let fch = document.getElementById('valor-fch').value;
    let C = inputC.value;
    let L = inputL.value;
    let deltaL =inputDeltaL.value;
    let deltaC = inputDeltaC.value;
    let D = ((vo-vs)/vo).toFixed(2)

    let formulas = {
        deltaL:(((vs*D)/(fch*L))*1000000).toFixed(0),
        deltaC:(((io*D)/(fch*C))*1000000).toFixed(0),
        L:(((vs*D)/(fch*deltaL))*1000000).toFixed(0),
        C:(((io*D)/(fch*deltaC))*1000000).toFixed(0)

    }

    if (L==0,C==0,deltaC==0,deltaL==0,fch==0) {
        return{
            razaoCiclica: D
        }    
    } else if (L!=0,C!=0,deltaC==0,deltaL==0) {
        return {
            ondulacaoC:formulas.deltaC,
            ondulacaoL:formulas.deltaL,
            indutancia:L,
            capacitancia:C
        }
    } else if (L==0,C==0,deltaC!=0,deltaL!=0) {
        return {
            indutancia:formulas.L,
            capacitancia:formulas.C,
            ondulacaoC:deltaC,
            ondulacaoL:deltaL
        }
    }
};

function mostraresultado () {

    console.log(calculosBoost())
    divResultado.style.display = 'initial'

   let D = calculosBoost().razaoCiclica
   let L = calculosBoost().indutancia
   let C = calculosBoost().capacitancia
   let deltaC = calculosBoost().ondulacaoC
   let deltaL = calculosBoost().ondulacaoL

   let vs = document.getElementById('valor-vs').value;
   let vo = document.getElementById('valor-vo').value;
   let io = document.getElementById('valor-io').value;
   let fch = document.getElementById('valor-fch').value;
   let cV = inputC.value;
   let iL = inputL.value;
   let oiL =inputDeltaL.value;
   let ovC = inputDeltaC.value;

    textoResultado.innerHTML= null
    textoResultado.innerHTML = 'Razão Ciclica = '+ D
    console.log(fch)
}; 