const encrypter = require('bcrypt')

module.exports = {
    async encrypt_pass(password){
        const salt = await encrypter.genSalt(10);
        const hash = await encrypter.hash(password,salt);
        
        return hash;
    },

    async compare_pass(encrypted_pass, recovered_pass){
        const hash = await this.encrypt_pass(encrypted_pass);
    
        return await encrypter.compare(recovered_pass, hash);
    }
}



