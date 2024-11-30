import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTransaction from './components/AddTransaction';  // Import the AddTransaction component
import ViewTransactions from './components/ViewTransactions';  // Import the ViewTransactions component
import Chart from './components/Charts';  // Import the chart component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState(null); // For handling edit state

  // Fetch transactions from the API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  // Handle adding a new transaction
  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await axios.post('http://localhost:5000/api/expenses', newTransaction);
      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  // Handle editing a transaction
  const handleEdit = async (id, updatedTransaction) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedTransaction);
      setTransactions(
        transactions.map((transaction) =>
          transaction._id === id ? response.data : transaction
        )
      );
      setEditTransaction(null); // Close the edit form after successful update
    } catch (error) {
      console.error('Error editing transaction:', error);
    }
  };

  // Handle deleting a transaction
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      // After deletion, remove the transaction from the state
      setTransactions(transactions.filter((transaction) => transaction._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Expense Tracker</h1>

      {/* Add Transaction Component */}
      <AddTransaction onAddTransaction={handleAddTransaction} />

      {/* Display Pie Chart */}
      <Chart transactions={transactions} />

      {/* If an edit transaction is selected, show the edit form */}
      {editTransaction && (
        <div>
          <h3>Edit Transaction</h3>
          <AddTransaction
            onAddTransaction={handleEdit}
            existingTransaction={editTransaction}
          />
        </div>
      )}

      {/* View Transactions */}
      <ViewTransactions
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={setEditTransaction} // Set edit transaction to enable editing
      />
    </div>
  );
};

export default App;
