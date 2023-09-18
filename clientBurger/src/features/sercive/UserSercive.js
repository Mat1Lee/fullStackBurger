import {baseService} from './Service'
export const baseUrl = 'http://localhost:3005/'
export class UserService extends baseService{
  getItems =()=>{
    return this.get(`${baseUrl}getallitem`)
  }
  signUpUser =(value)=>{
    return this.post(`${baseUrl}register`,{...value})
  }
  loginUser = (values)=>{
    return this.post(`${baseUrl}signIn/`,{...values})
  }
  postOrder =(values)=>{
    return this.post(`${baseUrl}orderItem`,{...values})
  }

  getAllOrders =(id)=>{
    return this.get(`${baseUrl}orderlist/${id}`)
  }
  isAdmin = ()=>{
    return this.get(`${baseUrl}admin-dashboard`)
  }
}

export const UserSer = new UserService()