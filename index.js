require('dotenv').config();
const config = require('./utilites/config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/events', eventRoutes);
app.use('/api/login', authRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}... 💻`);
});

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database... 📋');
  })
  .catch((err) => {
    console.log('There was an error connecting to the database: ', err);
  });

module.exports = app;
