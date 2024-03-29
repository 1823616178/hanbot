import axios from 'axios'

const servcie = axios.create({
    // baseURL: "http://rymaker.cn:46828",
    baseURL: "http://172.25.164.172:9908",
    timeout: 100000
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
    return res.data
}, error => {
    return Promise.reject(error)
})

export default servcie
