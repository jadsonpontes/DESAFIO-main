let player1Choice = null;
let player2Choice = null;
let score1 = 0;
let score2 = 0;
let roundCount = 0;
let autoPlayer = null;

function startGame() {
    const player1Name = document.getElementById('player1-name').value;
    const player2Name = document.getElementById('player2-name').value;
    autoPlayer = document.getElementById('auto-player').value;

    if (!player1Name || !player2Name) {
        alert("Por favor, insira o nome dos dois jogadores!");
        return;
    }

    document.getElementById('player1-display').textContent = player1Name;
    document.getElementById('player2-display').textContent = player2Name;

    document.querySelector('.player-input').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('.result').style.display = 'block';

    if (autoPlayer) {
        makeAutoChoice();
    }
}

function makeChoice(player, choice) {
    if (player === 'player1') {
        player1Choice = choice;
        document.getElementById('choice1').textContent = "Escolha feita";
    } else if (player === 'player2') {
        player2Choice = choice;
        document.getElementById('choice2').textContent = "Escolha feita";
    }

    if (player1Choice && player2Choice) {
        revealChoices();
        determineWinner();
    }
}

function makeAutoChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];

    if (autoPlayer === 'player1') {
        player1Choice = randomChoice();
        document.getElementById('choice1').textContent = "Escolha feita";
    } else if (autoPlayer === 'player2') {
        player2Choice = randomChoice();
        document.getElementById('choice2').textContent = "Escolha feita";
    }

    if (player1Choice && player2Choice) {
        revealChoices();
        determineWinner();
    }
}

function revealChoices() {
    document.getElementById('choice1').textContent = player1Choice;
    document.getElementById('choice2').textContent = player2Choice;
}

function determineWinner() {
    let result = "";

    if (player1Choice === player2Choice) {
        result = "Empate!";
    } else if (
        (player1Choice === 'pedra' && player2Choice === 'tesoura') ||
        (player1Choice === 'papel' && player2Choice === 'pedra') ||
        (player1Choice === 'tesoura' && player2Choice === 'papel')
    ) {
        result = document.getElementById('player1-display').textContent + " Venceu!";
        score1++;
        document.getElementById('score1').textContent = score1;
    } else {
        result = document.getElementById('player2-display').textContent + " Venceu!";
        score2++;
        document.getElementById('score2').textContent = score2;
    }

    document.getElementById('result').textContent = result;

    roundCount++;

    if (roundCount === 3) {
        declareChampion();
    } else {
        resetChoicesForNextRound();
    }
}

function resetChoicesForNextRound() {
    player1Choice = null;
    player2Choice = null;
    document.getElementById('choice1').textContent = "Nenhuma";
    document.getElementById('choice2').textContent = "Nenhuma";

    if (autoPlayer) {
        makeAutoChoice();
    }
}

function declareChampion() {
    let champion = "";
    let winRate1 = (score1 / 3) * 100;
    let winRate2 = (score2 / 3) * 100;
    const trophyImage = document.getElementById('trophy');
    
    trophyImage.style.display = 'none';

    if (score1 > score2) {
        champion = document.getElementById('player1-display').textContent + " é o campeão!";
        trophyImage.style.display = 'block';
    } else if (score2 > score1) {
        champion = document.getElementById('player2-display').textContent + " é o campeão!";
        trophyImage.style.display = 'block';
    } else {
        champion = "É um empate geral!";
    }

    document.getElementById('result').innerHTML = `
        ${champion} <br>
        ${document.getElementById('player1-display').textContent}: ${winRate1.toFixed(2)}% de vitórias<br>
        ${document.getElementById('player2-display').textContent}: ${winRate2.toFixed(2)}% de vitórias
    `;
}

function resetGame() {
    player1Choice = null;
    player2Choice = null;
    score1 = 0;
    score2 = 0;
    roundCount = 0;
    document.getElementById('score1').textContent = score1;
    document.getElementById('score2').textContent = score2;
    document.getElementById('choice1').textContent = "Nenhuma";
    document.getElementById('choice2').textContent = "Nenhuma";
    document.getElementById('result').textContent = "Aguardando...";

    document.querySelector('.container').style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.player-input').style.display = 'block';

    document.getElementById('player1-name').value = '';
    document.getElementById('player2-name').value = '';
}