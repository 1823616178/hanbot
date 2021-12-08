import axios from 'axios'

const servcie = axios.create({
    baseURL: "https://www.jx3api.com",
    timeout: 10000
})

servcie.interceptors.request.use(config => {
    if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

servcie.interceptors.response.use(res => {
    const code = res.data.code
    return res.data
}, error => {
    console.log('err', error)
    return Promise.reject(error)
})

export default servcie
