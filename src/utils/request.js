import axios from 'axios'

const servcie = axios.create({
    baseURL: "http://172.28.152.142:8880",
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
