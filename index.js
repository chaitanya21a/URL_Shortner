const express = require('express');
const URLrouter = require('./routes/url');
const staticRouter = require('./routes/staticrouter');
const path = require('path'); // Import path to resolve view directory
const { connectDB } = require('./connect');
const { getstats } = require('./controller/url');
const app = express();
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.resolve('./views')); 
const port=8000;
//to parse JSON data in post request
app.use(express.json());
//to parse url encoded form data
app.use(express.urlencoded({ extended: false}));
app.use('/url', URLrouter);
app.use('/', staticRouter);
app.get('/stats', getstats);
connectDB('mongodb://localhost:27017/short_url').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});