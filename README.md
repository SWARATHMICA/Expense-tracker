# Expense-tracker
A full-stack Expense Tracker Application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to manage and track their income and expenses. It supports functionalities like adding, editing, deleting transactions, viewing financial summaries, and visualizing data through charts.

# Features

Add Transactions: Users can add income or expense transactions with details like title, amount, category, and type (income or expense).

Edit Transactions: Users can edit any transaction's details.

Delete Transactions: Users can delete transactions from the records.

View Transactions: A list of all added transactions, categorized by type and amount.

Total Balance: The app calculates the total balance by adding incomes and subtracting expenses.

Charts: Displays a pie chart of expenses and incomes across different categories.

# Tech Stack
# Frontend:
React.js

React-Bootstrap for UI components

Chart.js for data visualization

# Backend:

Node.js with Express.js

MongoDB for database storage

Axios for making API requests

# Installation

# Backend Setup
Clone the repository:

git clone https://github.com/swarathmica/expense-tracker.git

Navigate to the backend directory:

cd expense-tracker/backend

Install the required dependencies:

npm install

Make sure MongoDB is running on your local machine or use a cloud database service (like MongoDB Atlas).

Start the server:

npm start

The backend will run on http://localhost:5000.

# Frontend Setup

Navigate to the frontend directory:

cd expense-tracker/frontend

Install the required dependencies:

npm install

Start the React app:

npm start

The frontend will run on http://localhost:3000.

# Screenshots

![image](https://github.com/user-attachments/assets/54f0bc88-2e8c-4d74-9b65-3e3d072f5d4a)

![image](https://github.com/user-attachments/assets/5085e0a4-9faa-4fb9-b22a-373ce20b9d02)
![image](https://github.com/user-attachments/assets/f825e727-2986-4683-914b-832df5fd3117)

![image](https://github.com/user-attachments/assets/985e7a07-21ff-4870-9085-3b7fe52d6e15)

# Future Enhancements

User authentication (login/logout functionality).

Allow users to filter transactions by date or category.

Create user-specific dashboards for personal finance tracking.

Implement email notifications for large expenses.

# Note

src folder contains front end files

backend folder contains backend files

navigate to frontend folder and install react app using: npm create-react-app expense-tracker 

then replace the files from src folder.

