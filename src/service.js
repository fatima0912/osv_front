import axios from 'axios'

const host = 'http://localhost:3000'
const axiosInstance = axios.create({baseURL: host})

export default axiosInstance;