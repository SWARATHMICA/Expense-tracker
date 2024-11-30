const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Get all transactions (incomes and expenses)
router.get("/", async (req, res) => {
  try {
    const transactions = await Expense.find(); // Fetches all records from the database
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new transaction (income or expense)
router.post("/", async (req, res) => {
  const { title, amount, category, type } = req.body;

  // Validate transaction type
  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({ message: "Type must be 'income' or 'expense'" });
  }

  const newTransaction = new Expense({
    title,
    amount,
    category,
    type, // Identifies whether it's an income or expense
    date: new Date(),
  });

  try {
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get total balance
router.get("/total-balance", async (req, res) => {
  try {
    const transactions = await Expense.find();

    // Calculate balance: add incomes and subtract expenses
    const totalBalance = transactions.reduce((sum, transaction) => {
      return transaction.type === "income"
        ? sum + transaction.amount
        : sum - transaction.amount;
    }, 0);

    res.status(200).json({ total: totalBalance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get transactions by type (income or expense)
router.get("/:type", async (req, res) => {
  const { type } = req.params;

  // Validate type
  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({ message: "Type must be 'income' or 'expense'" });
  }

  try {
    const transactions = await Expense.find({ type });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a transaction
router.put('/:id', async (req, res) => { // Correct route
  const { id } = req.params;
  const { title, amount, category, type } = req.body;

  try {
    const updatedTransaction = await Expense.findByIdAndUpdate(
      id,
      { title, amount, category, type },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating transaction' });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => { // Correct route
  try {
    const { id } = req.params;
    const deletedTransaction = await Expense.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting transaction' });
  }
});

module.exports = router;
