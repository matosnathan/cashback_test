const service = require('../../src/services/dealer-service')
describe('Dealer Service', () => {
    it('should create a dealer | when a valid data is passed', async () => {
        const dealer = {fullName: 'dealer1', cpf: '12312312312', email: 'dealer@dealer.com.br', password: '123456'}
        const result = await service.create(dealer);

        expect(result).not.to.be(null)
    })

    it('should create a dealer with a encrypted password | when a valid data is passed', async () => {
        const dealer = {fullName: 'dealer1', cpf: '12312312312', email: 'dealer@dealer.com.br', password: '123456'}
        const result = await service.create(dealer);

        expect(result.password).not.to.equal(dealer.password)
    })
});
