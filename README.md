# AIdivinha
Utilizando a IA do Google Gemini, será realizado uma tentativa de descobrir qual palavra você está pensando.

![image](https://github.com/user-attachments/assets/83d2b303-a0c7-4b4c-849b-27cc17cf5845)

1- O usuário pensa em uma palavra e clica em Iniciar. Exemplo pensei em "Cadeira".

2- O Gemini será acionado e chutará uma palavra.

![image](https://github.com/user-attachments/assets/4e50fa93-e44f-405a-9ced-6deaf63bb084)

3- O usuário responde se "Passou Longe", "Passou Perto" ou "Acertou". Neste exemplo o chute errou então responderia "Passou Perto", pois existe uma analogia em entre "Banco" e "Cadeira".

4- O passo 3 se repete até que o usuário responda "Acertou", nesse tempo as palavras vão sendo categorizadas para ajudar o Gemini a acertar.

5- Mostra o resultado.

![image](https://github.com/user-attachments/assets/921c807a-c051-47ba-864e-0ea7f5b36331)

Para testar: https://aidivinha.vercel.app/

Ideia:

Adivinhando uma palavra existente no dicionário direto do seu pensamento

	- Um botão para "Iniciar"
	- Depois aparece tres botões "Proximo" da resposta, "Longe" da resposta e "Acertou"
	- Um lugar para exibir a ultima palavra chutada
	- Um lugar para exibir um contador de chutes
	- Uma mensagem de resultado
	- Após concluir um botão para "Recomeçar"
	- Melhorar acertividades, pois está repetindo palavras
	- Esconder key
