import { createSlice } from "@reduxjs/toolkit";

const gameReducer = createSlice({
  name: "snakeAndLadder",
  initialState: {
    snakeAndLadderGameData: null,
    gameStarted: false,
    player1Position: 0,
    player2Position: 0,
    diceRoll: null,
    diceRollAgain: false,
    isGameOver: false,
    message: "",
    eachTurn: "",
    currentPlayer: 1,
    error: null,
  },
  reducers: {
    setGameStarted(state, action) {
      state.gameStarted = action.payload;
    },
    setSnakeAndLadderGameData(state, action) {
      state.snakeAndLadderGameData = action.payload;
    },
    setPlayerPosition(state, action) {
      const { player, position } = action.payload;
      if (player === 1) {
        state.player1Position = position;
      } else {
        state.player2Position = position;
      }
    },
    setDiceRoll(state, action) {
      state.diceRoll = action.payload;
    },
    setDiceRollAgain(state, action) {
      state.diceRollAgain = action.payload;
    },
    setIsGameOver(state, action) {
      state.isGameOver = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setEachTurn(state, action) {
      state.eachTurn = action.payload;
    },
    setCurrentPlayer(state, action) {
      state.currentPlayer = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setGameStarted,
  setSnakeAndLadderGameData,
  setPlayerPosition,
  setDiceRoll,
  setDiceRollAgain,
  setIsGameOver,
  setMessage,
  setEachTurn,
  setCurrentPlayer,
  setError,
} = gameReducer.actions;

export default gameReducer.reducer;
