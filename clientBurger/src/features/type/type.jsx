import axios from 'axios';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
export const baseUrl = 'http://localhost:3005/'
import { UserSer } from '../sercive/UserSercive';
export const getItems  = async()=>{
  try {
    const allItem = await axios.get(`${baseUrl}getallitem`);
    console.log(allItem);
    return allItem
  } catch (error) {
    console.log('Get data failed!!!');
    return undefined
  }
  
}
// export const addItem = async()=>{
//   try {
    
//   } catch (error) {
//     console.log(error);
//   }
// }
export const deleteItem = async(id)=>{
console.log(id,'idChoseDelete');
  try {
   const res = await axios.delete(`${baseUrl}deleteitem/${id}`);
   console.log('Delete success');
   return res
  } catch (error) {
    console.log(error,'Failed!!!');
  }
}
export const updateItem = async(id,values)=>{
  console.log(id,values);
  try {
    const res = await UserSer.updateItem(id,values)
    console.log('update Succsess');
    return res
  } catch (error) {
    console.log(error);
  }
}
export const createItem = async(values)=>{
  console.log(values);
  try {
    const res = await axios.post(`${baseUrl}additem`,{...values});
    console.log('Add item success');
    return res
  } catch (error) {
    console.log(error,'additem');
  }
}

//Order action
export const postOrder = async(values)=>{

try {
 const res= await UserSer.postOrder(values)
  console.log(res.data.message,'orderSuccess');
  return res.data.message
} catch (error) {
  console.log(error.response.data.message);
  return error.response.data.message
} 
}
export const getAllOrders= async()=>{
  const id = localStorage.getItem('user');
 
  
  try {
    const res = await axios.get(`${baseUrl}orderlist/${id}`);
    console.log(res.data,'order');
    return res.data
  } catch (error) {
    console.log(error); 
    return undefined
  }
  
}
// export const getAllOrderPay=async()=>{
//        const idUser =  localStorage.getItem('user');
//     const docRef = doc(db, "UserPay", idUser);
//     try {
//     const docSnap =await  getDoc(docRef);
//     const res = docSnap.data().Order
  
//     return res
//     } catch (error) {
//       return undefined
      
//     }
// }
export const getAllOrderItems=async()=>{
       
    const docRef = doc(db, "Data", "data");
    try {
    const docSnap =await  getDoc(docRef);
    const res = docSnap.data().orderItem
  
    return res
    } catch (error) {
      return undefined
      
    }
}


//UserAction
export const checkAd = async()=>{
  try {
   const res = await UserSer.isAdmin();
   console.log(res.data.status,'hihihihihi');
   return res.data.status
  } catch (error) {
    console.log(error);
  }
}

export const signUpUser =async(value)=>{
try {
   await axios.post(`${baseUrl}register`,{...value})
} catch (error) {
  console.log(error);
}
}
export const loginUser = async(values)=>{
  try {
  const res=  await UserSer.loginUser(values)
  console.log(res.data);
  return res.data
  } catch (error) {
    console.log(error);
  }
}

export const getListUser = async()=>{
  try {
    const res = await axios.get(`${baseUrl}listUser`);
    console.log(res.data,'user');
    return res.data
  } catch (error) {
    console.log(error);
  }
}