function Botao() {
    let entradaNum1 = document.getElementById('numero1');
    let entradaNum2 = document.getElementById('numero2');
    let entradaOperacao = document.getElementById('operacao');
    let entradaRadiciação = document.getElementById('radiciação');
    let entradaPotencia = document.getElementById('radiciação')
  
    let resultado;
    let numero1 = 0, numero2 = 0, operacao = 0;
  
    if (entradaNum1 instanceof HTMLInputElement) {
      numero1 = parseFloat(entradaNum1.value);
    }
    if (entradaNum2 instanceof HTMLInputElement) {
      numero2 = parseFloat(entradaNum2.value);
    }
    if (entradaOperacao instanceof HTMLInputElement) {
      operacao = parseInt(entradaOperacao.value);
    }
    if(Potenciação instanceof HTMLInputElement){
      operacao = parseFloat(entradaPotencia.value)

    }
    if(Radiação instanceof HTMLInputElementElement)
      operacao = parseFloat(entradaRadiciaçãoradiação.value)
    switch (operacao) {
      case 1:
        resultado = (numero1 + numero2) / 2;
        break;
      case 2:
        resultado = numero1 - numero2;
        break;
      case 3:
        resultado = numero1 * numero2;
        break;
      case 4:
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          resultado = 'Erro:!';
        }
        break;
      default:
        resultado = 'Escolha inválida. ';
    }
  
    let saida = document.getElementById('resultado');
  
    if (saida instanceof HTMLElement) {
      saida.textContent = 'Resultado: ' + resultado;
    }
  }
  
  function operacao() {
    let calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn != null) {
      calcularBtn.addEventListener('click', botao);
    }
  }
  
  document.addEventListener('DOMContentLoaded',operacao);