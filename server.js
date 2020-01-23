const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const empRoute = require('./routes/employee');

app.use(bodyparser.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Header', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/emp',empRoute);

app.listen(5000,() => {
    console.log('Listening at port 5000');
});

