const express = require('express');
const todo = require('./todo/index');

const app = express();

app.listen(5000);
app.set('view engine','ejs');
app.use(express.static('./assets'));

todo(app);
