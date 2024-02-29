const express = require('express');

const app = express();

app.get('/greet', (req, res) => {
    let name = req.query.name ? req.query.name : 'Guest';
    res.send(`Hello, ${name}!`);
});

app.listen(5050,()=>{
    console.log('Server running on port 5050');
})