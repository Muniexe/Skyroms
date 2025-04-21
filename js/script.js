// Função para carregar os jogos
fetch('gamessw.json')
  .then(response => response.json())
  .then(games => {
    const gameGrid = document.querySelector('.game-grid');

    games.forEach(game => {
      const gameBlock = document.createElement('div');
      gameBlock.classList.add('game-block');

      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');

      const gameImage = document.createElement('img');
      gameImage.src = game.image;
      gameImage.alt = game.name;

      const gameInfo = document.createElement('div');
      gameInfo.classList.add('game-info');

      const gameTitle = document.createElement('h3');
      gameTitle.textContent = `🎮 ${game.name}`;

      const gameDescription = document.createElement('p');
      gameDescription.textContent = game.description;

      const downloadButton = document.createElement('a');
      downloadButton.classList.add('btn');
      downloadButton.href = game.downloadLink;
      downloadButton.textContent = '⬇️ Baixar Jogo';

      gameInfo.appendChild(gameTitle);
      gameInfo.appendChild(gameDescription);
      gameInfo.appendChild(downloadButton);

      gameCard.appendChild(gameImage);
      gameCard.appendChild(gameInfo);

      gameBlock.appendChild(gameCard);
      gameGrid.appendChild(gameBlock);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os jogos:', error);
  });
