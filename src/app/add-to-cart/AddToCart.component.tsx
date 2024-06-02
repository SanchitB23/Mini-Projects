'use client';
import React, { useState } from 'react';
import FoodItemsListComponent from '@/app/add-to-cart/FoodItemsList.component';

const AddToCartComponent = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  return (
    <div className='w-full'>
      <FoodItemsListComponent
        setTotalCount={setTotalCount}
        setTotalAmt={setTotalAmt}
      />
      <div className={'flex justify-center mt-16'}>
        <h1 className={'text-xl'}>
          Items in Cart:&nbsp; <span>{totalCount}</span>
        </h1>
      </div>
      <div className={'flex justify-center mt-16'}>
        <h1 className={'text-xl'}>
          Total Amount:&nbsp; <span>${totalAmt}</span>
        </h1>
      </div>
    </div>
  );
};

export default AddToCartComponent;
