const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));

app.use('/api/v1/heros', require('./Routes/heroRoutes'));

app.get('/', (req, res) => {
  res.send('work!');
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

