const express = require('express');

const app = express();
const PORT = 3000;

//ALWAYS SET ENV--Apps run 70% SLOWER IN DEV.
//CMD -> NODE_ENV=production node app.js
//Eg NODE_ENV=production node express.js
//Eg NODE_ENV=production npm start

//Whenever you use USE use next()!


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

app.get('/throw', (req,res, next) => {
    //THIS IS BAD  PRACTICE. ALWAYS USE NEXT
    //eg next(new Error('Something got fucked up!!! Check below: '));
    throw new Error('Something got fucked up!!! Check below: ')
});
app.get('/next', (req,res, next) => {
    setTimeout(()=>{
        //Throw doesn't work alone. ALWAYS USE NEXT with errors.
        // EG: throw new Error('Something got fucked up!!! Check below: '); 
        //No error message app hangs
        // This works!! Always use next with errors!!!
        next(new Error('Something got fucked up!!! Check below: '));
    });
});
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})