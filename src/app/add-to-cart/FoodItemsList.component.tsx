import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { foodItems } from '@/constants';

interface Props {
  setTotalCount: React.Dispatch<SetStateAction<number>>;
  setTotalAmt: React.Dispatch<SetStateAction<number>>;
}

type FoodItemMap = { [id: string]: number };

const FoodItemsListComponent = (props: Props) => {
  const { setTotalCount, setTotalAmt } = props;
  const [cartItems, setCartItems] = useState<{
    [key: number]: number;
  }>({});

  const idToPriceMap: FoodItemMap = useMemo(
    () =>
      foodItems.reduce((acc: FoodItemMap, item) => {
        acc[item.id] = item.price;
        return acc;
      }, {}),
    [foodItems],
  );

  useEffect(() => {
    setTotalCount(Object.values(cartItems).reduce((a, b) => a + b, 0));
    setTotalAmt(
      Object.entries(cartItems).reduce(
        (a, b) => a + idToPriceMap[b[0]] * b[1],
        0,
      ),
    );
  }, [cartItems]);

  function onAdd(id: number) {
    setCartItems((prevState) => ({
      ...prevState,
      [id]: (prevState[id] ?? 0) + 1,
    }));
  }

  function onSubtract(id: number) {
    setCartItems((prevState) => ({
      ...prevState,
      [id]: (prevState[id] ?? 0) - 1,
    }));
  }

  return (
    <section className={'flex flex-col items-center mt-36'}>
      {_.sortBy(foodItems, 'price').map((value) => {
        return (
          <div
            className={'border w-full max-w-2xl p-4 flex justify-around'}
            key={value.id}
          >
            <span className={'font-extrabold'}>{value.name}</span>
            <span>Price: ₹{value.price}</span>
            <div>
              <button
                onClick={() => onSubtract(value.id)}
                disabled={cartItems[value.id] < 1 || !cartItems[value.id]}
                className={'disabled:cursor-not-allowed'}
              >
                -
              </button>
              <span>{cartItems[value.id] ?? 0}</span>
              <button onClick={() => onAdd(value.id)}>+</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FoodItemsListComponent;
