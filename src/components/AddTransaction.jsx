import React, { useState, useContext } from 'react';
import GlobalContext from '../context/globalContext';

function AddTransaction() {
  const { setData } = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('expense'); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (title && amount) {

      const parsedAmount = parseFloat(amount);

      const adjustedAmount = transactionType === 'expense' ? -parsedAmount : parsedAmount;

      const newTransaction = {
        title: title,
        amount: adjustedAmount,
      };

      setData((prevData) => [...prevData, newTransaction]);

      setTitle('');
      setAmount('');
      setTransactionType('expense');
    } else {
      alert('Please fill out both fields');
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="text-sm font-medium">Title: </label>
        <input
          className="w-full p-2 focus:outline-none my-3"
          type="text"
          placeholder="Enter Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
        <label htmlFor="amout" className="text-sm font-medium mt-3">Amout: </label>
        <input
          className="w-full p-2 focus:outline-none mt-3"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update amount state
        />

        <div className="mt-3">
          <label htmlFor="transactionType" className="text-sm font-medium mb-3">Transaction Type: </label>
          <select
            id="transactionType"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}  // Update transaction type
            className="w-full p-2 mt-3 focus:outline-none"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <button
          type="submit"
          className="p-3 bg-blue-500 w-full text-center mt-3 text-white font-medium text-xl"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
