const express = require('express');

const app = express();
const PORT = 3000;
app.use((req,res,next) => {
    res.setHeader('x-server-date', new Date());
    return next();
});

app.get('/', (req, res, next) => {
    return res.send('Hello I am express serving this damn site!!!');
});

app.get('/time', (req, res, next) => {
    return res.send(`It's ${new Date()}`);
});

app.get('/hello/:name', (req, res, next) => {

    return res.send(`Hello ${req.params.name}`)
});

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})