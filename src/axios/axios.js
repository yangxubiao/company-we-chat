import axios from "axios";
import qs from "qs";


const Axios = axios.create({
    baseURL: "http://127.0.0.1:8888",
    withCredentials: true
})
Axios.interceptors.request.use(
    config => {
        console.log("进入请求拦截器...");
        if (config.method === "post") {
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => {
        console.log("===发送请求拦截器报错===")
        console.log(error);
        console.log("===end===");
        Promise.reject(error);
    }
);
Axios.interceptors.response.use(
    res => {
        console.log("触发响应拦截器...")
        return res;
    },
    error => {
        console.log("===发送请求拦截器报错===")
        console.log(error);
        console.log("===end===");
        Promise.reject(error);
    }
)
export default {
    install: function(Vue) {
        Vue.prototype.axios = Axios;
    }
}