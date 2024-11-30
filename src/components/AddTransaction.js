import React, { useState, useEffect } from 'react';

const AddTransaction = ({ onAddTransaction, existingTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    amount: '',
    category: 'Food',
    type: 'expense',
  });

  // If editing an existing transaction, set the values to the existing transaction details
  useEffect(() => {
    if (existingTransaction) {
      setNewTransaction({
        title: existingTransaction.title,
        amount: existingTransaction.amount,
        category: existingTransaction.category,
        type: existingTransaction.type,
      });
    }
  }, [existingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTransaction) {
      onAddTransaction(existingTransaction._id, newTransaction); // If editing, pass ID and updated transaction
    } else {
      onAddTransaction(newTransaction); // If adding, just pass the new transaction
    }
    setNewTransaction({ title: '', amount: '', category: 'Food', type: 'expense' }); // Reset the form
  };

  return (
    <div className="my-4">
      <h3>{existingTransaction ? 'Edit Transaction' : 'Add Transaction'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newTransaction.title}
            onChange={(e) => setNewTransaction({ ...newTransaction, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            value={newTransaction.category}
            onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
          >
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select
            className="form-select"
            id="type"
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {existingTransaction ? 'Update Transaction' : 'Add Transaction'}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
