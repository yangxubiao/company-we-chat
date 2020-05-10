import axios from "axios";
import qs from "qs";



const Axios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
  })
  

Axios.interceptors.request.use(
    config => {
        debugger;
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