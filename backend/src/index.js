const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://raphael:nabucodonozor@cluster0.0l9hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// rodar back 'yarn dev'