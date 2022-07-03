// const { query } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
// const res = require('express/lib/response');
// const { isObjectIdOrHexString } = require('mongoose');
// const db = require('./mongoConnect');

const app = express();

app.set('view engine' , 'ejs');

// class User{
//     constructor(userName , password)
// }

// submit()
// {
//     const user = new User({});user.save().then(() => {
//         isObjectIdOrHexString.emit('site user' , user);
//     });
// }

app.listen(3000 , () => {
    console.log('server is listening on port 3000');
});
app.get('/' , (req , res) => {
    res.status(200).render('start');
});
app.get('/main' , (req , res) => {
    res.status(200).render('main');
});
app.post('/ans' , (req , res) => {
    const userName = req.body.username;
    console.log(userName);
    res.status(200).render('ans' , {userName});
});
app.get('/login' , (req , res) => {
    res.status(200).render('login');
});
// app.use((req , res) => {
//     res.status(404).send("404 page");
// });

