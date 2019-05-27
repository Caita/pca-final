

function ler(){
	var pergunta;
	var recebep = document.querySelector("#questao");
	pergunta = recebep.innerText;
	responsiveVoice.speak(pergunta, "Brazilian Portuguese Female");

	}
	
var pontos;

var respostaAtual;

const restpPergunta1 = "Mother";

function alternativa(obj) {
	responsiveVoice.speak(obj.innerText, "US English Female");
	respostaAtual = obj.innerText;
}


function verResposta () {

	// Verificar a resposta 1
	if (respostaAtual == restpPergunta1) { 
	}

}

