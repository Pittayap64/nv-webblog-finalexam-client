import axios from 'axios'
export default () => {
 return axios.create({ 
 baseURL: 'http://10.10.59.14:8081/',
 })
}