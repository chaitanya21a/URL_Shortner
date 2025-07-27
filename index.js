const express = require('express');
const URLrouter = require('./routes/url');
const { connectDB } = require('./connect');
const app = express();
const port = process.env.PORT || 8000;
app.use('/url', URLrouter);
connectDB('mongodb://localhost:27017/short_url').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});