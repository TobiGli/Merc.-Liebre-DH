const express = require('express');
const app = express();
const path = require ('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/views/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3030, () => 
console.log('esta ready y flama para usar'));