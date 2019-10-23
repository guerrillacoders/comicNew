const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));
app.get('/', (req, res) => {
  res.send('working!');
});

app.get('/working', (req, res) => {
  res.send('work');
});

app.use('/api/v1/heros', require('./Routes/heroRoutes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

