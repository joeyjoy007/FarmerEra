import axios from 'axios'


const customAxios = axios.create({})


customAxios.interceptors.request.use(

    req=>{
        req.headers.Authorization = localStorage.getItem("token");
        return req},
    err=>{return Promise.reject(err)}
)

customAxios.interceptors.response.use(
    res=>{return res},
    err=>{
        const status = err.response?err.response.status:null
        if(status === 401){
            
        }
        return Promise.reject(err)}
)