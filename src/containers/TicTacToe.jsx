import React, { Component } from 'react';
import { Stage } from 'react-konva';

import { Board, Squares } from '../styled/TicTacToe';

class TicTacToc extends Component {
  constructor(props) {
    super(props);

    this.combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false,
  };

  componentWillMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const size = height < width ? height * 0.8 : width * 0.8;
    const rows = this.state.rows;
    const unit = size / rows;

    const coordinates = [];

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < rows; x += 1) {
        coordinates.push([x * unit, y * unit]);
      }
    }

    this.setState({
      size,
      unit,
      coordinates,
    });
  }

  move = (index, marker) => {
    this.setState((prevState, prop) => {
      let { gameState, yourTurn, gameOver, winner } = prevState;

      yourTurn = !yourTurn;
      gameState.splice(index, 1, marker);
      const foundWin = this.winChecker(gameState);

      if (foundWin) {
        winner = gameState[foundWin[0]];
      }

      if (foundWin || !gameState.includes(false)) {
        gameOver = true;
      }

      console.log(yourTurn, gameOver);

      if (!yourTurn && !gameOver) {
        console.log('hi');
        setTimeout(() => {
          this.makeAiMove(gameState);
        }, 1000);
      }

      return {
        gameState,
        yourTurn,
        gameOver,
        win: foundWin || false,
        winner,
      };
    });
  };

  makeAiMove = gameState => {
    const { otherMark } = this.state;

    const openSquares = [];
    gameState.forEach((square, index) => {
      if (!square) {
        openSquares.push(index);
      }
    });

    const aiMove = openSquares[this.random(0, openSquares.length)];
    this.move(aiMove, otherMark);
  };

  turingTest = () => {};

  recordGame = () => {};

  random = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  };

  winChecker = gameState => {
    let combos = this.combos;
    return combos.find(combo => {
      let [a, b, c] = combo;
      return (
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c] &&
        gameState[a]
      );
    });
  };

  render() {
    return (
      <div>
        <Stage width={this.state.size} height={this.state.size}>
          <Board {...this.state} />
          <Squares {...this.state} move={this.move} />
        </Stage>
      </div>
    );
  }
}

export default TicTacToc;
