import {
  Button,
  Cascader,
  Form,
  Input,
  Modal,
  Space, Tooltip,
  Typography
} from 'antd';
import formatRelative from "date-fns/esm/fp/formatRelative/index.js";
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postOrder } from '../../features/type/type';
import './ExamCheck.css';

import { useSelector } from 'react-redux';

export default function ExamCheck() {
  const [open, setOpen] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);
const [stOrder,setStOrder]= useState('');
  const { allPay,cartItems } = useSelector(store => store.cart)
 const navigate = useNavigate();
 const [form] = Form.useForm()
  const id = useMemo(()=>{
    
    return localStorage.getItem('user')
  },[])
  
  const name = useMemo(()=>{
    
    return localStorage.getItem('nameUser')
  },[])
  const email = useMemo(()=>{
    
    return localStorage.getItem('email')
  },[])
  const total = useMemo(()=>{
    
    return localStorage.getItem('price')
  },[])

  useEffect(() => {
  
   
    form.setFieldsValue({
     name ,
      email,
  

    });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
  
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      navigate('/')
      setConfirmLoading(false);
    }, 2000);
    
    
  };
  const formatDate=(seconds)=>{
    let formattedDate = '';
  
  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());
  
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
      
  } 
  return formattedDate;
  }
  const onFinish = async (values) => {
    const value = {...values,cartItems,id,total}
    console.log(value);
    const r = await  postOrder(value)
    setStOrder(r)
    showModal()
    
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='checkoutPay'>
      <div className="checkout__info">
        <div className="pay__custominfo">
          <h3>Custom info</h3>
          <Form
         form= {form}
    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Username">
      <Space>
        <Form.Item
          name="name"
          noStyle
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 160,
            }}
            disabled='true'
           
          />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="Email">
      <Space>
        <Form.Item
          name="email"
          noStyle
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 160,
            }}
            disabled='true'
        
          />
        </Form.Item>
        
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name='address'
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
            <Input
            style={{
              width: 260,
            }}
            placeholder="Please input"
          />
        </Form.Item>
        
      </Space.Compact>
    </Form.Item>
    <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          // addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
  
    <Form.Item label=" " colon={false}>
      <Button style={{width:'200px'}} type="primary" htmlType='submit' >
        Check Out
      </Button>
    </Form.Item>
  </Form>
        </div>
       
      </div>
      <div className="checkout__currentcart">
        <h3>Current Cart</h3>
        <span style={{color:'red',cursor:'poiter'}} onClick={()=>{
         navigate('/')
        }}>Return to Cart</span>
        <hr />
        <div className="currentcart__info">
          {cartItems.map((item,index)=>(
            <>
                <div key={index}  className="currentcart__item">
                  { item.amount &&
                  <><span> <p>Name:  {item.name} </p>
            <p style={{color:'red'}}>Amount:  {item.amount} </p> 
            </span>
            <span> Price:{item.amount*item.price} </span> </> 
                  }
           
           
          </div>
        
            </>

          )
        
          )}
          
        </div>
        <hr />
        <h4>SHIPPING OPTION</h4>
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
      
        <h4>CART TOTAL</h4>
        <p>{total}$</p>
      </div>

      <Modal title="Your Order"  confirmLoading={confirmLoading} onCancel={handleCancel} open={isModalOpen} onOk={handleOk} >
        <p>{stOrder}</p>
       
      </Modal>
    </div>
  )
}
