const jwt = require('jsonwebtoken');

let secret = 'any_secret';

const generate = async(dealer) => {
    const token = jwt.sign({ id: dealer.id, cpf: dealer.cpf, email: dealer.email }, secret, { expiresIn: 60 * 60 })

    return token;
}

const verify = async (token)  => {
    jwt.verify(token, secret, function(err, decoded){
        if(err) return false;

        return true;
    });
}

const decode = async (token) => {
    const clean_token = token.replace("Bearer","").split(" ")[2]; 
    const dealer = jwt.decode(clean_token)
    return dealer
}

module.exports = {
    generate,
    verify,
    decode
}