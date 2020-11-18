const service = require('../../services/dealer-service');
const Responser = require('../../helpers/responser');
const encrypter = require('../../helpers/encrypter')
const authService = require('../../services/auth-service')
const cashbackIntegration = require('../../externalServices/cashback-integration')
let responser = new Responser();

exports.post = async (req, res, next) => 
{
    try 
    {
        if (!req.body.fullName || !req.body.cpf || !req.body.email || !req.body.password) 
        {
            responser.setError(400, 'Informações invalidas');
            return responser.send(res);
        }

        const dealer = req.body;

        if(service.findByCpf(dealer.cpf))
        {
            responser.setError(400, 'Revendedor já cadastrado com este cpf')
            return responser.send(res);
        }

        created = await service.create(dealer);
        
        responser.setSuccess(201, 'Revendedor criado com sucesso', { id: dealer.id, cpf: dealer.cpf, fullName: dealer.fullName})

        return responser.send(res);
    } 
    catch (error) {
        responser.setError(400, error);
        return responser.send(res);
    }
}

exports.get = async (req, res, next) => 
{
    const id = req.params.id
    var dealer = await service.get(id);

    if(!dealer)
    {
        responser.setError(404, 'Revendedor não encontrado')
        return responser.send(res);
    }

    responser.setSuccess(200, 'Revendedor encontrado', dealer);
    return responser.send(res);
}

exports.getAccumulated = async (req,res,next) => {
    const user = await authService.getUser(req);
    const dealer = await service.findByCpf(user.cpf);
    if(!dealer)
    {
        responser.setError(404, 'Revendedor não encontrado');
        return responser.send(res);
    }

    const response = await cashbackIntegration.getAccumulated(dealer.cpf);

    responser.setSuccess(200,'Total de cashback acumulado', response);
    return response.send(res)
}



