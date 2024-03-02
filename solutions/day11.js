const app = require('express')();
const jwt = require('jsonwebtoken');

function createToken(){
    return jwt.sign({data:'data'},'secretKey',{expiresIn:30});
}

function verifyToken(req, res, next){
    const token = req.headers.token;

    try{
        jwt.verify(token,'secretKey');
        next();
    }
    catch(err){
        res.json({"message":"invalid token"}).status(401);
    }

}

app.use('/verifyToken',verifyToken);

app.get('/getToken', (req, res) => {
    const token = createToken();
    res.json({token: token}).status(200);
});

app.get('/verifyToken', (req, res) => {
    
    res.send('success');
    
});

app.listen(5050,()=>{
    console.log('Server listening on port 5050');
})