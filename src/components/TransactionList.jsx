import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function TransactionList() {
  // Accessing the data from GlobalContext
  const { data, setData } = useContext(GlobalContext);

  // Function to handle deletion of a transaction
  const deleteTransaction = (index) => {
    // Remove transaction at the specified index
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-5">
      <h2 className="text-xl font-medium border-b pb-2">History</h2>
      <ul className="mt-3 flex flex-col gap-3">
        {/* Map through data and display each transaction */}
        {data.map((transaction, index) => (
          <li
            key={index}
            className={`p-2 bg-white shadow-md flex justify-between ${
              transaction.amount < 0 ? 'border-r-4 border-red-500' : 'border-r-4 border-green-500'
            }`}
          >
            <span className='w-1/2 capitalize'>{transaction.title}</span>
            <span className='w-1/4'>{transaction.amount}</span>
            <span className='w-1/4 text-right'>
            <button
              className="text-red-500 font-semibold"
              onClick={() => deleteTransaction(index)}
            >
              Delete
            </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
