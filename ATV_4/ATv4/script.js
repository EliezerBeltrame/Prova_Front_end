function Multiplos(mensagem){
    let resultado = document.getElementById('saida');


    let EntradaNumero1 = document.getElementById('numero1')
    let EntradaNumero2 = document.getElementById('numero2')

    let resultado;
    let (numero1 * numero2);

    if (saida instanceof HTMLParagraphElement){ 
        resultado.textContent = 'Erro: ' + mensagem;
    }
}
    function Multiplos(numero){
    try{
    if (isNaN(numero)) {
        throw new Error('Digite um número válido.');
    }
    if (numero < 0) {
        throw new Error('Multiplos ');
        
    }
    }catch (error){
    Multiplos(error.message);
    }
}
    function configBotao(){
        let botaoValidar = document.getElementById('ValidarBtn');
        let idadeInput = document.getElementById('numero')
   

        if((botaoValidar instanceof HTMLButtonElement) && (idadeInput instanceof HTMLInputElement)){
            botaoValidar.addEventListener("click", () => {
                let numero = parseInt(idadeInput.value);
                Multiplos(numero);

            });
        }
    }
    
document.addEventListener('DOMContentLoaded', configBotao);