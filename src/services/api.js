import Axios from "axios";


const api = Axios.create({
    baseURL: 'http://192.168.0.103:8081'
})

export default api;