const database = require('../database/models')
const encrypter = require('../helpers/encrypter')
const cashbackIntegration = require('../externalServices/cashback-integration')

const create = async(command) => {
    command.password = await encrypter.encrypt_pass(command.password);
    return database.Dealer.create(command);
}

const findByCpf = async (cpf) => {
    return database.Dealer.findOne({where: {cpf: cpf}});
}

const get = async(id) => {
        
    const dealer = database.Dealer.findOne({ where: {id: Number(id)} });
    
    if(dealer)
        throw 'Revendedor não encontrado';

    return dealer;
}

module.exports = {
    create,
    get,
    findByCpf
}
