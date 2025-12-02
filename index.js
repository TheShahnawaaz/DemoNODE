const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  console.log('Hello World');
  res.json({ message: 'Welcome to AtaTuition API' });
});


app.get('/api/v1/students', (req, res) => {
  console.log('Hello World');
  res.json({
    students: [
    "21CS30001",
    "21CS30002",
    "21CS30003",
    "21CS30004",
    "21CS30005",
    "21CS30006",
    "21CS30007",
    "21CS30008",
    "21CS30009",
  ] });
});


app.post('/api/greetme', (req, res) => {
  
  res.json({ message: 'Welcome to AtaTuition API' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
