/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import GlobalContext from '../context/globalContext';
function IncomeExpense() {
  const {data}=useContext(GlobalContext);

  const amounts = data.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  return (
    <>
      <div className="mt-5">
        <div className="p-4 bg-white shadow-md flex justify-around">
            <div className="w-1/2 text-center border-r">
                <h4 className='text-sm uppercase font-medium mb-1'>Income</h4>
                <span className='text-xl text-green-500 uppercase font-medium'>₹ {income}</span>
            </div>
            <div className="w-1/2 text-center">
                <h4 className='text-sm uppercase font-medium mb-1'>Expense</h4>
                <span className='text-xl text-red-500 uppercase font-medium'>₹ {expense}</span>
            </div>
        </div>
      </div>  
    </>
  )
}

export default IncomeExpense