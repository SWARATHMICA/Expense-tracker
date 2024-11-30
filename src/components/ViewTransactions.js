import React from 'react';

const ViewTransactions = ({ transactions, onDelete, onEdit }) => {
  return (
    <div>
      <h3>View Transactions</h3>
      <ul className="list-group">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{transaction.title} - {transaction.amount} - {transaction.category} - {transaction.type}</span>

            <div>
              {/* Edit Button */}
              <button className="btn btn-warning btn-sm mx-2" onClick={() => onEdit(transaction)}>
                Edit
              </button>

              {/* Delete Button */}
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(transaction._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTransactions;
