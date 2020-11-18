
describe('Dealer Controller', () => {
    it('should create a dealer | when a valid data is passed', async () => {
        const dealer = {fullName: 'dealer1', cpf: '12312312312', email: 'dealer@dealer.com.br', password: '123456'}
        
        // aqui eu colocaria um post para a controller e validaria o resultado
        
    })

    it('should result 400 with error message | when any required data is not passed', async () => {
        const dealer = {fullName: null, cpf: '12312312312', email: 'dealer@dealer.com.br', password: '123456'}
        // aqui colocaria um post para a controller e validaria o status code e o array de erro
    })

    //...
});
