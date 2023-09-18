import { baseService } from "./baseService";
const baseUrl = 'http://localhost:3005/';

export class AdminService extends baseService{

  createItem =(value)=>{
    return this.post(`${baseUrl}addItem`,{...value})
  }
  deleteItem =(id)=>{
    return this.delete(`${baseUrl}deleteitem/${id}`)
  }
  updateItem =(id,values)=>{
    return this.put(`${baseUrl}updateitem/${id}`,{...values})                                                                                                                                                 
  }
  getItem = ()=>{
    return this.get(`${baseUrl}getallitem`)
  }
  getAllOrder =()=>{
    return this.get(`${baseUrl}allOrder`)
  }
  getAllUser =()=>{
    return this.get(`${baseUrl}listUsers`)
  }
  getUserById = (id)=>{
    return this.get(`${baseUrl}getUser/${id}`)
  }
  signUpUser =(value)=>{
    return this.post(`${baseUrl}register`,{...value})
  }
  loginUser = (values)=>{
    return this.post(`${baseUrl}signIn/`,{...values})
  }
  listDayOrder =()=>{
    return this.get(`${baseUrl}listDayOrder`)
  }
}
export const AdminSer = new AdminService()
