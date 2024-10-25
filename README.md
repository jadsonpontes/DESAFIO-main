1º Estrutura HTML
foi criado HTML basico para a interface do jogo, dividindo a tela em duas partes para os jogadores, além de adicionar campo para que o os jogadores insiram seu nome antes de jogar
e foi adicionado um "dropdown" para jogador selecionar o modo automatico, onde o jogador poderá interagir com a PC.

2º Estilo CSS
estilizei a interface usando o CSS para garantir que os alementos estejam bem organizados e a tela seja dividida corretamente entre os jogadores

3º logica de JavaScript
implementei ao jogo usando jS.para captura e escolhas dos jogadores, comparar e determinar o vencendor.
  .cada jogador faz uma escolha (pedra, papel e tesoura) clicando nos botões.
  .quando ambos os jogadores tiverem feito suas escolhas, o vencedor é determinado e o resultado é exigido.
  .o jogo pode ser reiniciado usando o botão "reiniciar jogo"

  .adicionado autoPlayer armazena qual jogador está no modo automático.
	.makeAutoChoice() faz o jogador automático escolher aleatoriamente entre pedra, papel e tesoura.
	.determineWinner() para permitir que o modo automático faça a sua escolha se necessário.
