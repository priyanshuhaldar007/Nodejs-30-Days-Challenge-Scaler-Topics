const app = require('express')();

let ipReqDB={};
const limit = 5

function rateLimiterMiddleware(req, res, next){
    const incomingIP = req.ip;

    ipReqDB[incomingIP] = ++ipReqDB[incomingIP] || 0;

    if(ipReqDB[incomingIP]>=limit){
        res.json({message:"Too Many Requests"}).status(429);
        return;
    }

    next();
}

app.use('/rateLimit',rateLimiterMiddleware);

app.get('/rateLimit', function(req, res){

    res.send('success');
});

app.listen(5050, ()=>{
    console.log('Server listening on port 5050');
})