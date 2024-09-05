let palavras = [];
let palavrasPerto = [];
let palavrasLonge = [];

async function adivinhar(ultimaTentativa) {
    console.log(ultimaTentativa);

    const resultadosPesquisa = document.getElementById('resultados-pesquisa');

    // Construindo o prompt
    let prompt = `
        Você é um adivinha e está tentando adivinhar uma palavra no pensamento do uma pessoa.
        Você deve sempre informar uma única palavra. 
        Você não pode responder com uma frase, somente pode responder com uma única palavra.
        A palavra não pode conter pontuação exemplos: ".", "!", "?".
        A palavra não pode conter espaço vazio.
        A palavra não pode conter um emoticom.`;

    if (palavras.length > 0) {
        prompt += `
        A palavra não pode ser uma dessas palavras: ${palavras}.`;
    }

    if (palavrasPerto.length > 0) {
        prompt += `
        A palavra possui ligação direta com essas palavras: ${palavrasPerto}.`;
    }

    if (palavrasLonge.length > 0) {
        prompt += `
        A palavra NÃO possui ligação direta com essas palavras: ${palavrasLonge}.`;
    }

    // Criando o objeto a ser enviado no corpo da requisição
    const body = {
        prompt: prompt
    };

    try {
        // Fazendo a requisição POST
        const response = await fetch('https://mini-integracao-api-gemini.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.statusText}`);
        }

        const text = await response.json();
    
        console.log(text);

        palavras.push(text);
    
        console.log(palavras);
    
        resultadosPesquisa.innerHTML = ``;
        resultadosPesquisa.innerHTML = text;
    
        atualizaButtons(text);
    } catch (error) {
        console.error('Erro:', error);

        resultadosPesquisa.innerHTML = 'Tenha calma as vezes eu preciso parar e pensar. Por favor espere 30 segundos e tente novamente.';   
    }
}

async function informar(text) {   
    removeButtons();

    const jogo = document.getElementById('jogo');    
    const h1 = document.createElement('h1');
    
    h1.innerHTML = text;

    jogo.appendChild(h1);

    const reiniciar = document.createElement('button');

    reiniciar.id = 'reiniciar';
    reiniciar.innerHTML = 'Recomeçar!';
    reiniciar.addEventListener('click', function() { 
        window.location.reload();
    });

    jogo.appendChild(reiniciar);
}

function removeButtons() {   
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.remove();
    });
}

function atualizaButtons(text) {   
    removeButtons();

    const jogo = document.getElementById('jogo');
    const passouLonge = document.createElement('button');

    passouLonge.id = 'longe';
    passouLonge.innerHTML = 'Passou longe!';
    passouLonge.addEventListener('click', function() { 
        adivinhar(`O chute da palavra "${text}" passou longe de acertar.`);
        palavrasLonge.push(text);
    });

    jogo.appendChild(passouLonge);

    const passouPerto =  document.createElement('button');

    passouPerto.id = 'perto';
    passouPerto.innerHTML = 'Passou perto!';
    passouPerto.addEventListener('click', function() { 
        adivinhar(`O chute da palavra "${text}" passou perto de acertar.`);
        palavrasPerto.push(text);
    });

    jogo.appendChild(passouPerto);  

    const acertou = document.createElement('button');

    acertou.id = 'acertou';
    acertou.innerHTML = 'Acertou!';
    acertou.addEventListener('click', function() { 
        informar(`Acertei a palavra "${text}" com ${palavras.length} tentativas.`);
    });

    jogo.appendChild(acertou);  
}