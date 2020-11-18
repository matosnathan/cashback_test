const http = require('axios');

const get = async (baseURL, path, token) => {

    const instance = http.create({
        baseURL: baseURL,        
        timeout: 1000000
    });
    instance.defaults.headers.common['Authorization'] = 'Bearer '+token;
    instance.defaults.headers.common['Host'] = baseURL;

    const response = await instance.get(path);

    return response.data;
}

module.exports = {
    get
}