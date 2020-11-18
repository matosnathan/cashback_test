const encrypter = require('../../helpers/encrypter')
const authService = require('../../services/auth-service');
const dealerService = require('../../services/dealer-service');
const Responser = require('../../helpers/responser');

let responser = new Responser();
exports.post = async (req, res, next) => {
    if(!req.body.cpf || !req.body.password)
    {
        responser.setError(400, 'Dados inválidos');
        return responser.send(res);
    }

    dealer = await dealerService.findByCpf(req.body.cpf);

    if(!dealer)
    {
        responser.setError(401, 'Cpf ou senha inválidos');
        return responser.send(res);
    }

    if(!await encrypter.compare_pass(dealer.password, req.body.password))
    {
        responser.setError(401, 'Cpf ou senha inválidos');
        return responser.send(res);
    }
    
    responser.setSuccess(200, 'Logado com sucesso', { token: await authService.generate(dealer)})
    return responser.send(res);
}