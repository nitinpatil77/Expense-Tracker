/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import GlobalContext from '../context/globalContext';

function Balance() {
  const {data}=useContext(GlobalContext);
  const amounts = data.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className="mt-5">
        <h2 className='text-sm uppercase font-medium'> Your Balance</h2>
        <span className='text-xl uppercase font-medium'>₹ {total}</span>
      </div>  
    </>
  )
}

export default Balance