const express = require('express');
const URLrouter = require('./routes/url');
const path = require('path'); // Import path to resolve view directory
const { connectDB } = require('./connect');
const { getstats } = require('./controller/url');
const app = express();
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.resolve('./views')); 
const port=8000;
// const port = process.env.PORT || 8000;
app.use(express.json());
app.use('/url', URLrouter);
app.get('/stats', getstats);
connectDB('mongodb://localhost:27017/short_url').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});