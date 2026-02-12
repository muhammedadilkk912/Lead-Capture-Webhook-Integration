import axios from "axios";

const baseurl='http://localhost:2000'

const axiosInstance=axios.create({
    baseURL:baseurl
    
})

export default axiosInstance;