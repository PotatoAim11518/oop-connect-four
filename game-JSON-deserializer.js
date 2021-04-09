export default class GameJsonDeserializer {
  constructor(gameJSON) {
    this.gameState = gameJSON;
  }

  deserialize() {
    const saveData = this.gameState.parse();
    const recoveredGame = new Game(saveData.player1, saveData.player2);

    let currentPlayer = 1;
    for (let row = 5; row >= 0; row--) {
      for (let col = 0; col < 7; col++) {
        let currentToken = saveData.boardState[row][col];
        if (currentToken === currentPlayer) {
          recoveredGame.playInColumn(col);
          currentPlayer
        }

      }

    }

  }


  }
