// Create Express Server
const express = require('express');
//Initialize
const app = express();
const  connectDB = require('./config/db');

connectDB();

// init MiddleWare
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
    res.json({ msg: 'welcome to the contacts keeper api' })
);


//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));