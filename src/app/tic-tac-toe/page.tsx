'use client';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const initialState = Array.from({ length: 9 }, () => 0);

const Page = () => {
  const [boxValues, setValue] = useState(initialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  useEffect(() => {
    // check diagonal
    if (
      boxValues[0] != 0 &&
      boxValues[0] === boxValues[4] &&
      boxValues[0] === boxValues[8]
    ) {
      return setWinner(boxValues[0]);
    }

    //   check Rows
    for (let i = 0; i < boxValues.length; i += 3) {
      if (
        boxValues[i] !== 0 &&
        boxValues[i] === boxValues[i + 1] &&
        boxValues[i] === boxValues[i + 2]
      )
        return setWinner(boxValues[i]);
    }

    //   check Columns
    for (let i = 0; i < boxValues.length / 3; i++) {
      if (
        boxValues[i] !== 0 &&
        boxValues[i] === boxValues[i + 3] &&
        boxValues[i] === boxValues[i + 6]
      )
        return setWinner(boxValues[i]);
    }

    //draw
    if (_.every(boxValues, (value) => !!value)) {
      alert("It's a draw!");
      onResetGame();
    }
  }, [boxValues]);

  useEffect(() => {
    if (winner) {
      alert(`player ${winner} has won the game!`);
      onResetGame();
    }
  }, [winner]);

  const onBoxClick = (i: number) => {
    if (boxValues[i]) {
      alert('Already used, use another slot');
      return;
    }

    const newArr = [...boxValues];
    newArr[i] = player;

    setPlayer((prevState) => (prevState === 1 ? 2 : 1));
    setValue(newArr);
  };

  const onResetGame = () => {
    setValue(initialState);
    setPlayer(1);
    setWinner(0);
  };

  const renderSymbol = (id: number) => {
    const symbol = boxValues[id];
    switch (symbol) {
      case 1:
        return <span>X</span>;
      case 2:
        return <span>O</span>;
      default:
        return <span />;
    }
  };

  return (
    <div>
      <section className={'w-full flex justify-evenly my-6'}>
        <button
          className={'border-2 py-2 rounded-full px-5'}
          onClick={onResetGame}
        >
          Reset to New Game
        </button>
      </section>
      <section
        className={
          'flex-1 bg-red-500 h-full w-full grid grid-cols-3 gap-8 p-4 min-w-80'
        }
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            className={
              'bg-blue-500 flex justify-center items-center sm:text-8xl sm:min-h-36 sm:min-w-36 text-2xl  min-h-20 min-w-20'
            }
            key={index}
            onClick={() => onBoxClick(index)}
          >
            {renderSymbol(index)}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Page;
