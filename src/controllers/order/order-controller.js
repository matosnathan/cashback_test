const dealerService = require('../../services/dealer-service');
const Responser = require('../../helpers/responser');
const orderService = require('../../services/order-service')
const authService = require('../../services/auth-service')
let responser = new Responser();

exports.post = async (req,res,next) =>
{
    const user = await authService.getUser(req);
    const dealer = await dealerService.findByCpf(user.cpf);
    if(!dealer)
    {
        responser.setError(404, 'Revendedor não encontrado');
        return responser.send(res);
    }

    const order = {
        dealer: dealer,        
        items: req.body.items    
    }

    const created = await orderService.create(order);
    
    responser.setSuccess(201, 'Pedido criado com sucesso!', created );
    return responser.send(res);
}

exports.listAll = async (req,res,next) => {
    const user = await authService.getUser(req);
    const dealer = await dealerService.findByCpf(user.cpf);
    if(!dealer)
    {
        responser.setError(404, 'Revendedor não encontrado');
        return responser.send(res);
    }
    
    const orders = await orderService.listAll(dealer.id);

    responser.setSuccess(200,'Lista de compras realizadas', orders)
    return responser.send(res);
}
