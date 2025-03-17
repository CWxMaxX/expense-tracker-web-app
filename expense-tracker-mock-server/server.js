const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');


const app = express();
const PORT = 8080;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());

let transactions = [
      {
        title: "Grocery Shopping",
        amount: 50.75,
        date: "2023-10-01",
        category: "Food",
        notes: "Bought vegetables and fruits",
        tranType: "expense",
      },
      {
        title: "Flight to NYC",
        amount: 300.0,
        date: "2023-10-05",
        category: "Travel",
        notes: "Business trip",
        tranType: "expense",
      },
      {
        title: "New Shoes",
        amount: 80.0,
        date: "2023-10-10",
        category: "Shopping",
        tranType: "expense",
      },
      {
        title: "Dinner at Restaurant",
        amount: 45.0,
        date: "2023-10-12",
        category: "Food",
        notes: "Dinner with friends",
        tranType: "expense",
      },
      {
        title: "Salary",
        amount: 1500.0,
        date: "2023-10-15",
        category: "Income",
        notes: "Monthly salary",
        tranType: "income",
      },
    ];;

app.post('/api/transactions', (req, res) => {
    const transaction = { id: uuidv4(), ...req.body };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

app.put('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
        transactions[index] = { ...transactions[index], ...req.body };
        res.json(transactions[index]);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

app.get('/api/transactions', (req, res) => {
    const { page = 1, pageSize = 10, sortByDate = 'newest' } = req.query;
    const sortedTransactions = transactions.sort((a, b) => {
        if (sortByDate === 'newest') {
            return new Date(a.date) - new Date(b.date);
        } else {
            return new Date(b.date) - new Date(a.date);
        }
    });
    const paginatedTransactions =  sortedTransactions.slice((page - 1) * pageSize, page * pageSize);
    res.json({
        data: paginatedTransactions,
        total: transactions.length,
        page: parseInt(page),
        pageSize: parseInt(pageSize),
    });
});

app.delete('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
        transactions.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

app.get('/api/summary', (req, res) => {
    const income = transactions
        .filter(t => t.tranType === 'income')
        .reduce((acc, curr) => acc + curr.amount, 0);
    const expense = transactions
        .filter(t => t.tranType === 'expense')
        .reduce((acc, curr) => acc + curr.amount, 0);
    const totalBalance = income - expense;

    res.json({
        totalBalance,
        income,
        expense
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});