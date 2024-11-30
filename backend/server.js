const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/expenses", expenseRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/expense-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection error: ", error));

// Server start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
