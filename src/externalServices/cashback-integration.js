const client = require('../providers/http-provider')

const getAccumulated = async (dealer_cpf) => {

    const baseUrl = process.env.CASHBACK_INTEGRATION_URL
    const token = process.env.CASHBACK_INTEGRATION_TOKEN
    const route = "v1/cashback?cpf="+dealer_cpf

    const response = await client.get(baseUrl, route, token);

    return response;
}

module.exports = {
    getAccumulated
}