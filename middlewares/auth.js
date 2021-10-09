const jwt = require('jsonwebtoken')

const isLoggedIn=(req,res,next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader){
        return res.status(401).send({
            message:"Access Denied No token",
            code: 401,
        })
    }
    try {
        const token=authHeader.split(' ')[1];
        const verified=jwt.verify(token, "navin"); 
        if (!verified) return res.status(401).send('Unauthorized request')
        req.User = verified.id; 
        next();
    } catch (error) {
        res.status(400).send("error");
    }
}


module.exports =isLoggedIn