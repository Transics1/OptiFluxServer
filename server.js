const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const connectDB = require('./config/sql');


dotenv.config();


const sequelize = require('./config/sql');
const ContactMessage = require('./models/ContactMessage');

// connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


sequelize.sync().then(() => {
  console.log('SQL database synced');
});