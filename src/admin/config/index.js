import {admin} from '../../../config/setting'
let baseURL = admin.baseURL || 'http://127.0.0.1:8080'
console.log(baseURL)
export {
  baseURL,
  admin
}