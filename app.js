
const divBoost = document.querySelector('.div-conversor-boost')
const divCalculo = document.querySelector('.div-btn-calcular')
const btnBoost = document.querySelector('#btn-boost')

const liL = document.querySelector('#L')
const liC = document.querySelector('#C')
const liDeltaL = document.querySelector('#deltaL')
const liDeltaC = document.querySelector('#deltaC')

const inputVs =  document.querySelector('#valor-vs')
const inputVo = document.querySelector('#valor-vo')
const inputIo = document.querySelector('#valor-io')
const inputFch = document.querySelector('#valor-fch')
const inputL = document.querySelector('#valor-L')
const inputC = document.querySelector('#valor-C')
const inputDeltaL = document.querySelector('#valor-deltaL')
const inputDeltaC = document.querySelector('#valor-deltaC')

const listaInputsBoost = [inputVs,inputVo,inputIo,inputFch,inputL,inputC,inputDeltaL,inputDeltaC]

const divResultado = document.querySelector('.div-resultado')
const textoResultado = document.querySelector('.textoResultado')

const btnTrocarBoost = document.querySelector('#btn-trocar-boost')




function mostrarConversorBoost() {
    divBoost.style.display = 'initial'
    divCalculo.style.display = 'initial'

    liDeltaC.style.display = 'none'
    liDeltaL.style.display = 'none'
    btnBoost.disabled = true
}

function trocaropcao () {

    
    textoResultado.innerHTML= null
    if ( liDeltaC.style.display== 'none' && liDeltaL.style.display == 'none') {
        
        liDeltaC.style.display = 'initial'
        liDeltaL.style.display = 'initial'

        liL.style.display = 'none'
        liC.style.display = 'none'

        inputL.value = 0
        inputC.value = 0

        btnTrocarBoost.innerHTML = 'Calcular L e C'

    } else if (liDeltaC.style.display!= 'none' && liDeltaL.style.display != 'none') {

        liDeltaC.style.display = 'none'
        liDeltaL.style.display = 'none'
        
        liL.style.display = 'initial'
        liC.style.display = 'initial'

        inputDeltaL.value = 0
        inputDeltaC.value = 0

        btnTrocarBoost.innerHTML = 'Calcular ΔVC e ΔIL'
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

    if (L==0 && C==0 && deltaC==0 && deltaL==0 &&fch==0) {
        return{
            razaoCiclica: D
        }    
    } else if (L!=0 && C!=0 && deltaC==0 && deltaL==0) {
        return {
            razaoCiclica: D,
            ondulacaoC:formulas.deltaC,
            ondulacaoL:formulas.deltaL,
            indutancia:L,
            capacitancia:C
        }
    } else if (L==0 && C!=0 && deltaC==0 && deltaL==0) {
        return {
            razaoCiclica: D,
            ondulacaoC:formulas.deltaC,
            ondulacaoL:formulas.deltaL,
            indutancia:L,
            capacitancia:C
        }
    } else if (L!=0 && C==0 && deltaC==0 && deltaL==0) {
        return {
            razaoCiclica: D,
            ondulacaoC:formulas.deltaC,
            ondulacaoL:formulas.deltaL,
            indutancia:L,
            capacitancia:C
        }
    } else if (L==0 && C==0 && deltaC==0 && deltaL!=0) {
        return {
            razaoCiclica: D,
            indutancia:formulas.L,
            capacitancia:formulas.C,
            ondulacaoC:deltaC,
            ondulacaoL:deltaL
        } 
    } else if (L==0 && C==0 && deltaC!=0 && deltaL==0) {
        return {
            razaoCiclica: D,
            indutancia:formulas.L,
            capacitancia:formulas.C,
            ondulacaoC:deltaC,
            ondulacaoL:deltaL
        } 
    } else if (L==0 && C==0 && deltaC!=0 && deltaL!=0) {
        return {
            razaoCiclica: D,
            indutancia:formulas.L,
            capacitancia:formulas.C,
            ondulacaoC:deltaC,
            ondulacaoL:deltaL
        }
    } else {
        return {
            razaoCiclica: 0,
            indutancia:0,
            capacitancia:0,
            ondulacaoC:0,
            ondulacaoL:0
        }
    }
};

function indentificarOpcao () {

    let vs = document.getElementById('valor-vs').value;
    let vo = document.getElementById('valor-vo').value;
    let io = document.getElementById('valor-io').value;
    let fch = document.getElementById('valor-fch').value;
    let C = document.getElementById('valor-C').value;
    let L = document.getElementById('valor-L').value;
    let deltaL = document.getElementById('valor-deltaL').value;
    let deltaC = document.getElementById('valor-deltaC').value;


    console.log('vs = '+vs)
    console.log('vo = '+vo)
    console.log('io = '+io)
    console.log('fch = '+ fch)
    console.log('C = ' + C)
    console.log('L = ' + L)
    console.log('deltaL = '+ deltaL)
    console.log('deltaC = '+ deltaC)

    
      while (vs != 0 && vo != 0 && fch ==0) {
        return 'D'
    }; if ( C != 0 && L !=0 && io!=0 && fch != 0) {
        return 'all type 1'
    } else if ( L !=0 && fch != 0 ) {
        return 'oIL'
    } else if ( C != 0 && io != 0 && fch != 0) {
        return 'oVC'
    } else if ( deltaL != 0 && fch != 0 && deltaC ==0) {
        return 'L'
    } else if ( deltaC !=0 && io !=0 && fch != 0 && deltaL ==0) {
        return 'C'
    } else if ( deltaC !=0 && io !=0 && deltaL != 0 && fch != 0) {
        return 'all type 2'
    }  else {
        return 'error'
    }
}

function mostraresultado () {

    console.log(calculosBoost())
    divResultado.style.display = 'initial'

   let D = calculosBoost().razaoCiclica
   let L = calculosBoost().indutancia
   let C = calculosBoost().capacitancia
   let deltaC = calculosBoost().ondulacaoC
   let deltaL = calculosBoost().ondulacaoL

    textoResultado.innerHTML= null

    if (indentificarOpcao() == 'D') {
        textoResultado.innerHTML = 'Razão Cíclica = '+ D
    } else if (indentificarOpcao() == 'all type 1') {
        textoResultado.innerHTML = 'Razão Cíclica = '+ D +'<br>'+'Ondulação da Corrente no Indutor = ' + deltaL+' mA' + '<br>' + 'Ondulação da Tensão no Capacitor = ' + deltaC + ' mV'
    } else if (indentificarOpcao() == 'oIL') {
        textoResultado.innerHTML = 'Ondulação da Corrente no Indutor = ' + deltaL +' mA'
    } else if ( indentificarOpcao() == 'oVC') {
        textoResultado.innerHTML = 'Ondulação da Tensão no Capacitor = ' + deltaC + ' mV'
    } else if (indentificarOpcao() == 'error') {
        textoResultado.innerHTML = ' Algum campo importante esta em 0'
    } else if (indentificarOpcao() == 'L') {
        textoResultado.innerHTML = 'Indutancia = '+ L + ' µH' 
    } else if (indentificarOpcao() == 'C') {
        textoResultado.innerHTML = 'Capacitancia ='+C+' µF'
    } else if ( indentificarOpcao() == 'all type 2') {
        textoResultado.innerHTML = 'Razão Cíclica = '+ D +'<br>'+'Indutancia = ' + L+' microH' + '<br>' + 'Capacitancia = ' + C + ' microF'
    }
}; 

function resetarCampo() {

    textoResultado.innerHTML= null

    for (let i = 0 ; i < listaInputsBoost.length ;i++) {
        listaInputsBoost[i].value = 0
        
    }
    console.log('resetou') 
}