//BOOST
const divBoost = document.querySelector('.div-conversor-boost')
const divCalculo = document.querySelector('.div-btn-calcular')
const btnBoost = document.querySelector('#btn-boost')

const liL = document.querySelector('#L')
const liC = document.querySelector('#C')
const liDeltaL = document.querySelector('#deltaL')
const liDeltaC = document.querySelector('#deltaC')

const inputVs = document.querySelector('#valor-vs')
const inputVo = document.querySelector('#valor-vo')
const inputIo = document.querySelector('#valor-io')
const inputFch = document.querySelector('#valor-fch')
const inputL = document.querySelector('#valor-L')
const inputC = document.querySelector('#valor-C')
const inputDeltaL = document.querySelector('#valor-deltaL')
const inputDeltaC = document.querySelector('#valor-deltaC')

const listaInputsBoost = [
  inputVs,
  inputVo,
  inputIo,
  inputFch,
  inputL,
  inputC,
  inputDeltaL,
  inputDeltaC
]

const divResultado = document.querySelector('.div-resultado')
const textoResultado = document.querySelector('.textoResultado')

const textoTrocarBoost = document.querySelector('#texto-trocar-boost')

const btnTrocarMedida = document.querySelector('.btn-trocar-unidade')
const btnTrocarMedidaMili = document.querySelector('.btn-trocar-unidadeMili')
const btnTrocarMedidaMicro = document.querySelector('.btn-trocar-unidadeMicro')

const divbtnMedida = document.querySelector('.div-unidade-display')

// BUCK

const divBuck = document.querySelector('.div-conversor-Buck')
const btnBuck = document.querySelector('#btn-buck')

const liLBuck = document.querySelector('#L-buck')
const liCBuck = document.querySelector('#C-buck')
const liDeltaLBuck = document.querySelector('#deltaL-buck')
const liDeltaCBuck = document.querySelector('#deltaC-buck')

const inputVsBuck = document.querySelector('#valor-vs-buck')
const inputVoBuck = document.querySelector('#valor-vo-buck')
const inputIoBuck = document.querySelector('#valor-io-buck')
const inputFchBuck = document.querySelector('#valor-fch-buck')
const inputLBuck = document.querySelector('#valor-L-buck')
const inputCBuck = document.querySelector('#valor-C-buck')
const inputDeltaLBuck = document.querySelector('#valor-deltaL-buck')
const inputDeltaCBuck = document.querySelector('#valor-deltaC-buck')

function mostrarConversorBoost() {
  divBoost.style.display = 'initial'
  divCalculo.style.display = 'initial'

  liDeltaC.style.display = 'none'
  liDeltaL.style.display = 'none'
  btnBoost.disabled = true
}

function trocarOpcao() {
  textoResultado.innerHTML = null

  if (divBoost.style.display == 'initial') {
    if (liDeltaC.style.display == 'none' && liDeltaL.style.display == 'none') {
      liDeltaC.style.display = 'initial'
      liDeltaL.style.display = 'initial'

      liL.style.display = 'none'
      liC.style.display = 'none'

      inputL.value = 0
      inputC.value = 0

      textoTrocarBoost.innerHTML = 'Calcular L e C'

      divbtnMedida.style.display = 'none'
    } else if (
      liDeltaC.style.display != 'none' &&
      liDeltaL.style.display != 'none'
    ) {
      liDeltaC.style.display = 'none'
      liDeltaL.style.display = 'none'

      liL.style.display = 'initial'
      liC.style.display = 'initial'

      inputDeltaL.value = 0
      inputDeltaC.value = 0

      textoTrocarBoost.innerHTML = 'Calcular ΔVC e ΔIL'

      divbtnMedida.style.display = 'none'
    }
  } else if (divBoost.style.display == 0) {
    if (liDeltaC.style.display == 'none' && liDeltaL.style.display == 'none') {
      liDeltaC.style.display = 'initial'
      liDeltaL.style.display = 'initial'

      liL.style.display = 'none'
      liC.style.display = 'none'

      inputL.value = 0
      inputC.value = 0

      textoTrocarBoost.innerHTML = 'Calcular L e C'

      divbtnMedida.style.display = 'none'
    } else if (
      liDeltaC.style.display != 'none' &&
      liDeltaL.style.display != 'none'
    ) {
      liDeltaC.style.display = 'none'
      liDeltaL.style.display = 'none'

      liL.style.display = 'initial'
      liC.style.display = 'initial'

      inputDeltaL.value = 0
      inputDeltaC.value = 0

      textoTrocarBoost.innerHTML = 'Calcular ΔVC e ΔIL'

      divbtnMedida.style.display = 'none'
    }
  }
}

function calculosBoost() {
  let vs = inputVs.value
  let vo = inputVo.value
  let io = inputIo.value
  let fch = inputFch.value
  let C = inputC.value
  let L = inputL.value
  let deltaL = inputDeltaL.value
  let deltaC = inputDeltaC.value
  let D = ((vo - vs) / vo).toFixed(2)

  let formulas = {
    deltaL: (((vs * D) / (fch * L)) * 1000000).toFixed(0),
    deltaC: (((io * D) / (fch * C)) * 1000000).toFixed(0),
    L: (((vs * D) / (fch * deltaL)) * 1000000).toFixed(0),
    C: (((io * D) / (fch * deltaC)) * 1000000).toFixed(0)
  }

  if (L == 0 && C == 0 && deltaC == 0 && deltaL == 0 && fch == 0) {
    return {
      razaoCiclica: D
    }
  } else if (L != 0 && C != 0 && deltaC == 0 && deltaL == 0) {
    return {
      razaoCiclica: D,
      ondulacaoC: formulas.deltaC,
      ondulacaoL: formulas.deltaL,
      indutancia: L,
      capacitancia: C
    }
  } else if (L == 0 && C != 0 && deltaC == 0 && deltaL == 0) {
    return {
      razaoCiclica: D,
      ondulacaoC: formulas.deltaC,
      ondulacaoL: formulas.deltaL,
      indutancia: L,
      capacitancia: C
    }
  } else if (L != 0 && C == 0 && deltaC == 0 && deltaL == 0) {
    return {
      razaoCiclica: D,
      ondulacaoC: formulas.deltaC,
      ondulacaoL: formulas.deltaL,
      indutancia: L,
      capacitancia: C
    }
  } else if (L == 0 && C == 0 && deltaC == 0 && deltaL != 0) {
    return {
      razaoCiclica: D,
      indutancia: formulas.L,
      capacitancia: formulas.C,
      ondulacaoC: deltaC,
      ondulacaoL: deltaL
    }
  } else if (L == 0 && C == 0 && deltaC != 0 && deltaL == 0) {
    return {
      razaoCiclica: D,
      indutancia: formulas.L,
      capacitancia: formulas.C,
      ondulacaoC: deltaC,
      ondulacaoL: deltaL
    }
  } else if (L == 0 && C == 0 && deltaC != 0 && deltaL != 0) {
    return {
      razaoCiclica: D,
      indutancia: formulas.L,
      capacitancia: formulas.C,
      ondulacaoC: deltaC,
      ondulacaoL: deltaL
    }
  } else {
    return {
      razaoCiclica: 0,
      indutancia: 0,
      capacitancia: 0,
      ondulacaoC: 0,
      ondulacaoL: 0
    }
  }
}

function calculosBuck() {
  let vs = inputVs.value
  let vo = inputVo.value
  let io = inputIo.value
  let fch = inputFch.value
  let C = inputC.value
  let L = inputL.value
  let deltaL = inputDeltaL.value
  let deltaC = inputDeltaC.value

  let D = (vo / vs).toFixed(2)
  let a = vs * D * (1 - D)
  let L2 = (a / (fch * deltaL)).toFixed(0)

  let formulas = {
    C: ((a / L2) * fch * 8 * deltaC).toFixed(2),
    deltaL: a / (fch * L),
    deltaL2: a / (L2 * fch),
    deltaC: a / (fch * C * 8 * L2)
  }
}

function indentificarOpcao() {
  let vs = document.getElementById('valor-vs').value
  let vo = document.getElementById('valor-vo').value
  let io = document.getElementById('valor-io').value
  let fch = document.getElementById('valor-fch').value
  let C = inputC.value
  let L = inputL.value
  let deltaL = inputDeltaL.value
  let deltaC = inputDeltaC.value

  console.log('Vs = ' + vs)
  console.log('Vo = ' + vo)
  console.log('Io = ' + io)
  console.log('Fch = ' + fch)
  console.log('C = ' + C)
  console.log('L = ' + L)
  console.log('DeltaIL = ' + deltaL)
  console.log('DeltaVC = ' + deltaC)

  while (vs != 0 && vo != 0 && fch == 0) {
    return 'D'
  }
  if (C != 0 && L != 0 && io != 0 && fch != 0) {
    return 'all type 1'
  } else if (L != 0 && fch != 0) {
    return 'oIL'
  } else if (C != 0 && io != 0 && fch != 0) {
    return 'oVC'
  } else if (deltaL != 0 && fch != 0 && deltaC == 0) {
    return 'L'
  } else if (deltaC != 0 && io != 0 && fch != 0 && deltaL == 0) {
    return 'C'
  } else if (deltaC != 0 && io != 0 && deltaL != 0 && fch != 0) {
    return 'all type 2'
  } else {
    return 'error'
  }
}

function resetarCampo() {
  textoResultado.innerHTML = null
  divbtnMedida.style.display = 'none'

  for (let i = 0; i < listaInputsBoost.length; i++) {
    listaInputsBoost[i].value = 0
  }
  console.log('resetou')
}

function mostraresultado() {
  divResultado.style.display = 'initial'

  if (indentificarOpcao() == 'error') {
    divbtnMedida.style.display = 'none'
  } else if (indentificarOpcao() == 'D') {
    divbtnMedida.style.display = 'none'
  } else {
    divbtnMedida.style.display = 'initial'
  }

  textoResultado.innerHTML = null

  let D = calculosBoost().razaoCiclica
  let L = calculosBoost().indutancia
  let C = calculosBoost().capacitancia
  let deltaC = calculosBoost().ondulacaoC
  let deltaL = calculosBoost().ondulacaoL

  if (indentificarOpcao() == 'D') {
    textoResultado.innerHTML = 'Razão Cíclica = ' + D
  } else if (indentificarOpcao() == 'all type 1') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Ondulação da Corrente no Indutor = ' +
      deltaL +
      ' mA' +
      '<br>' +
      'Ondulação da Tensão no Capacitor = ' +
      deltaC +
      ' mV'
  } else if (indentificarOpcao() == 'oIL') {
    textoResultado.innerHTML =
      'Ondulação da Corrente no Indutor = ' + deltaL + ' mA'
  } else if (indentificarOpcao() == 'oVC') {
    textoResultado.innerHTML =
      'Ondulação da Tensão no Capacitor = ' + deltaC + ' mV'
  } else if (indentificarOpcao() == 'error') {
    textoResultado.innerHTML = ' Algum campo importante esta em 0'
  } else if (indentificarOpcao() == 'L') {
    textoResultado.innerHTML = 'Indutancia = ' + L + ' µH'
  } else if (indentificarOpcao() == 'C') {
    textoResultado.innerHTML = 'Capacitancia =' + C + ' µF'
  } else if (indentificarOpcao() == 'all type 2') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Indutancia = ' +
      L +
      ' microH' +
      '<br>' +
      'Capacitancia = ' +
      C +
      ' microF'
  }
}

function mudarMedida() {
  textoResultado.innerHTML = null

  let D = calculosBoost().razaoCiclica
  let L = calculosBoost().indutancia
  let C = calculosBoost().capacitancia
  let deltaC = calculosBoost().ondulacaoC
  let deltaL = calculosBoost().ondulacaoL

  if (indentificarOpcao() == 'all type 1') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Ondulação da Corrente no Indutor = ' +
      deltaL / 1000 +
      ' A' +
      '<br>' +
      'Ondulação da Tensão no Capacitor = ' +
      deltaC / 1000 +
      ' V'
  } else if (indentificarOpcao() == 'oIL') {
    textoResultado.innerHTML =
      'Ondulação da Corrente no Indutor = ' + deltaL / 1000 + ' A'
  } else if (indentificarOpcao() == 'oVC') {
    textoResultado.innerHTML =
      'Ondulação da Tensão no Capacitor = ' + deltaC / 1000 + ' V'
  } else if (indentificarOpcao() == 'L') {
    textoResultado.innerHTML = 'Indutancia = ' + L / 1000000 + ' H'
  } else if (indentificarOpcao() == 'C') {
    textoResultado.innerHTML = 'Capacitancia =' + C / 1000000 + ' F'
  } else if (indentificarOpcao() == 'all type 2') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Indutancia = ' +
      L / 1000000 +
      ' H' +
      '<br>' +
      'Capacitancia = ' +
      C / 1000000 +
      'F'
  }
  console.log('mudou para unidade normal')
}

function mudarMedidaMili() {
  textoResultado.innerHTML = null

  let D = calculosBoost().razaoCiclica
  let L = calculosBoost().indutancia
  let C = calculosBoost().capacitancia
  let deltaC = calculosBoost().ondulacaoC
  let deltaL = calculosBoost().ondulacaoL

  if (indentificarOpcao() == 'all type 1') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Ondulação da Corrente no Indutor = ' +
      deltaL +
      ' mA' +
      '<br>' +
      'Ondulação da Tensão no Capacitor = ' +
      deltaC +
      ' mV'
  } else if (indentificarOpcao() == 'oIL') {
    textoResultado.innerHTML =
      'Ondulação da Corrente no Indutor = ' + deltaL + ' mA'
  } else if (indentificarOpcao() == 'oVC') {
    textoResultado.innerHTML =
      'Ondulação da Tensão no Capacitor = ' + deltaC + ' mV'
  } else if (indentificarOpcao() == 'error') {
    textoResultado.innerHTML = ' Algum campo importante esta em 0'
  } else if (indentificarOpcao() == 'L') {
    textoResultado.innerHTML = 'Indutancia = ' + L / 1000 + ' mH'
  } else if (indentificarOpcao() == 'C') {
    textoResultado.innerHTML = 'Capacitancia =' + C / 1000 + ' mF'
  } else if (indentificarOpcao() == 'all type 2') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Indutancia = ' +
      L / 1000 +
      ' mH' +
      '<br>' +
      'Capacitancia = ' +
      C / 1000 +
      ' mF'
  }
  console.log('mudou para unidade mili')
}

function mudarMedidaMicro() {
  textoResultado.innerHTML = null

  let D = calculosBoost().razaoCiclica
  let L = calculosBoost().indutancia
  let C = calculosBoost().capacitancia
  let deltaC = calculosBoost().ondulacaoC
  let deltaL = calculosBoost().ondulacaoL

  if (indentificarOpcao() == 'all type 1') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Ondulação da Corrente no Indutor = ' +
      deltaL * 1000 +
      ' µA' +
      '<br>' +
      'Ondulação da Tensão no Capacitor = ' +
      deltaC * 1000 +
      ' µV'
  } else if (indentificarOpcao() == 'oIL') {
    textoResultado.innerHTML =
      'Ondulação da Corrente no Indutor = ' + deltaL * 1000 + ' µA'
  } else if (indentificarOpcao() == 'oVC') {
    textoResultado.innerHTML =
      'Ondulação da Tensão no Capacitor = ' + deltaC * 1000 + ' µV'
  } else if (indentificarOpcao() == 'error') {
    textoResultado.innerHTML = ' Algum campo importante esta em 0'
  } else if (indentificarOpcao() == 'L') {
    textoResultado.innerHTML = 'Indutancia = ' + L + ' µH'
  } else if (indentificarOpcao() == 'C') {
    textoResultado.innerHTML = 'Capacitancia =' + C + ' µF'
  } else if (indentificarOpcao() == 'all type 2') {
    textoResultado.innerHTML =
      'Razão Cíclica = ' +
      D +
      '<br>' +
      'Indutancia = ' +
      L +
      ' µH' +
      '<br>' +
      'Capacitancia = ' +
      C +
      ' µF'
  }

  console.log('mudou para unidade micro')
}
