export default class GameJsonSerializer {
  constructor(gameObj) {
    this.gameState = gameObj;
  }

  serialize() {
    const data = {
      player1: this.gameState.player1,
      player2: this.gameState.player2,
      boardState: [
        [],
        [],
        [],
        [],
        [],
        [],
      ]
    }

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        const tokenValue = this.gameState.getTokenAt(row, col);
        data.boardState[row].push(tokenValue)
      }

    }

    return JSON.stringify(data);
  }
}
