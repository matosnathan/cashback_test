const jwt = require('../providers/jwt-provider');

const generate = async(dealer) => {
    return await jwt.generate(dealer)
}

const decode = async(token) => {
    console.log(token)
    const user = await jwt.decode(token);
    console.log(user)
    return user;
}

const validate = async(token) => {
    return await jwt.verify(token);
}

const getUser = async(req) => {
    const token = getToken(req);
    return await decode(token);    
}

function getToken(req) {
    return req.headers['authorization'];
}
const isAuthenticated = (req, res, next) => {
    const token = getToken(req);
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    const clean_token = token.replace('Bearer ', '').replace('bearer ', '');
    if(!validate(clean_token))
    {
        return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
    }
     
    next();
}

module.exports = {
    generate,
    decode,
    validate,
    isAuthenticated,
    getUser,
    getToken
}