// import express and cors
const express = require('express'); //used to set up a server
const cors = require('cors'); // users to prevent errors when working locally

// configuring the express server
const app = express(); // Initialize express as an app variable
app.set('port', process.env.port || 6969);
app.use(express.json()); // allow serve to handle json request 
app.use(cors()); // dont let local development give errors

// home route
app.get('/', (req, res) => {
    res.json({msg: 'Welcome'});
});

app.get('/users', (req, res)=>{
    res.set('Content-Type', 'Application/json');
    res.status(200).send('Statement reached!');
});

app.post('/users',(req, res) => {
    res.set('Content-type', 'Application/json');
    res.status(201).send('Posted data!');
});

// setting up app listening for API calls
app.listen(app.get('port'), () => {
    console.log(`Listening for call on port ${app.get('port')}`);
    console.log('press Ctrl+C to exit server');
});


