import {  db } from '../../firebase';
import { setDoc,doc,getDoc, addDoc,onSnapshot, updateDoc,arrayUnion } from 'firebase/firestore';
import { useNavigate, useNavigation } from 'react-router-dom';
import {
  Button,
  Cascader,

  Form,
  Input,
  Modal,
 
 
} from 'antd';
import {useSelector} from 'react-redux';
import {postOrder} from '../../features/type/type'
import { useCallback, useEffect, useMemo,useState } from 'react';
import { getItemCart,getAllCartPay } from '../../features/CartSlice/CartSlice';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import './CheckOut.css'
const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const { allPay,cartItems } = useSelector(store => store.cart)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name,setName]= useState('')
  const [address,setAddress]= useState('')
  console.log('checkout');
const navigate = useNavigate()
  const showModal = () => {
    setOpen(true);
    console.log(cartItems);
  };

  const handleOk = () => {
  
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      navigate('/')
      setConfirmLoading(false);
    }, 2000);
    
    
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
 


const total = useMemo(()=>{
  
  return localStorage.getItem('price')
},[])
const idUser = useMemo(()=>{
  
  return localStorage.getItem('user')
},[])




// useEffect(()=>{
// getDatas()
// },[idUser])
  const onFinish = async (values) => {
 
    const {username,email,address} = values;
    setName(username);
    setAddress(address);
    
   if(allPay){
    try {
      console.log('update');
      updateDoc(doc(db, "UserPay",idUser ), {
        Order:arrayUnion({
          id:idUser,
     displayName: username,
     address:address,
     email,
     total,
     orderItem:cartItems
     })
       
      });
      setDoc(doc(db, "Data","data" ), {
       
        orderItem:cartItems
    
     
       
      });
    
    } catch (err) {
    console.log(err);
    }
   }
   else{
    console.log('set');
    try {
      setDoc(doc(db, "UserPay",idUser ), {
        Order:arrayUnion({
             id:idUser,
        displayName: username,
        address:address,
        email,
        total,
        orderItem:cartItems
        })
     
       
      });
     
    
    } catch (err) {
    console.log(err);
    }
   }
    
  };

  return (
    <>
    
     <Form
    className='formCheckout'
    name="basic"

    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
 
    autoComplete="off"
   >
    <h3>Cart Detail</h3>
    <Form.Item
      
      name="username"
    
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input   placeholder='Username' />
    </Form.Item>
    <Form.Item
     
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input   placeholder='Email'/>
    </Form.Item>
   
    <Form.Item
      
      name="address"
   
    >
      <Input placeholder="Address"/>
    </Form.Item>
    <Form.Item name='phuongthuc' >
        <Cascader
          options={[
            {
              value: 'online',
              label: 'Thanh toan truc tuyen',
             
            },
            {
              value: 'shipCode',
              label: 'Thanh toan khi nhan hang',
             
            },
          ]}
          placeholder="Phuong thuc thanh toan"
        />
      </Form.Item>
        <hr />

        <div className='detail__info'>
          <div className='detail__info__item' >
                      <span >Subtotal</span>
                      <span >${total}</span>
                    </div>
 
                    <div className='detail__info__item'>
                      <span >Shiping</span>
                      <span >20</span>
                    </div>

                    <div className='detail__info__item'>
                      <span >Total</span>
                      <span >${total+20}</span>
                    </div>
   </div>
    <Form.Item
  style={{
    width:'80%'
  }}
    >
      <Button type="primary" htmlType="submit" onClick={()=>{
        
        showModal();
        
      }}>
        Check Out
      </Button>
    </Form.Item>
   </Form>
   <Modal
        title="Your Order"
        open={open}
        onOk={()=>{
      
          
          handleOk()}}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
      > 
      
        <hr />
      {cartItems && <div style={{}} className="checkOut__info__detial">
          {cartItems?.map((item,key)=>
              (
                <p key={key}>{item?.name},  Số lượng: ({item.amount})</p>
              )
          )}
          
        </div>
      }  
        <h3>Tổng tiền thanh toán:  {total}$</h3>
        <h4>Tên người nhận:  {name}</h4>
        <h4>Địa chỉ giao hàng:  {address}</h4>
      </Modal>
    </>
   
  );
};
export default CheckOut;