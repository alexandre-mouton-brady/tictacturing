import React from 'react';
import { Layer, Line, Text } from 'react-konva';

export const Board = ({ unit, size, rows }) => {
  const grid = [];

  const stroke = 'grey';
  const strokeWidth = 10;

  for (let i = 1; i < rows; i += 1) {
    const position = unit * i;

    grid.push(
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'v'}
      />,
    );

    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'h'}
      />,
    );
  }

  return <Layer>{grid}</Layer>;
};

export const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move,
}) => {
  const squares = coordinates.map((position, index) => {
    let makeMove = move;
    let fill = 'black';
    const mark = gameState[index];
    if (win && win.includes(index)) {
      fill = 'lightgreen';
    }
    if (gameOver || !yourTurn) {
      makeMove = () => console.log('nope!');
    }
    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={mark}
        fill={fill}
        fontFamily={'Arial'}
        align={'center'}
        onClick={e => {
          const index = e.target.index;
          makeMove(index, ownMark);
        }}
      />
    );
  });

  return <Layer>{squares}</Layer>;
};
