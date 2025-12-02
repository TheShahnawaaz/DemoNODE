const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
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


app.get('/page', (req, res) => {
  console.log('Request received');
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AtaTuition</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 { color: #333; }
        p { color: #666; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to AtaTuition</h1>
        <p>This is a sample HTML page served by the Express server.</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
