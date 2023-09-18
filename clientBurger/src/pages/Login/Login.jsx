import React from 'react'
import { auth } from '../../firebase';
import {chunk,compact,intersection} from 'lodash'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../features/type/type'
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { v4 as uuid } from "uuid";
import './Login.css'
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()
  var sectionStyle = {
    // display:'block',
    backgroundPosition: 'center', 
    backgrondSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundImage: "url(https://th.bing.com/th/id/OIP.0VO1CclSI25lgE9UrcBcRAHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
    height:'100vh',
  };
  const onFinish = async (values) => {
    console.log('Success:', values);
  
    // const { email } = values
    // try {
    //   const res = await signInWithEmailAndPassword(auth, email, password);

    //   localStorage.setItem('user', email)
    //   navigate('/')

    // } catch (err) {
    //   console.log(err);
    //   alert('Tai khoan mat khau khong dung')
    // }
    try {
      const res = await loginUser(values)
      console.log(res);
          localStorage.setItem('user', res.user.id)
          localStorage.setItem('nameUser', res.user.name)
          localStorage.setItem('email', res.user.email)
          localStorage.setItem('accessToken', res.accessToken)
          localStorage.setItem('role', res.user.role)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
//   let arr = [
//     { "a": 1, "b": 2, "c": 3 },
//     { "d": 1, "e": 2, "f": 3 },
//     { "d": 1, "e": 2, "f": 3 },
//     { "a": 1, "b": 2, "c": 3 },
//     { "d": 1, "e": 2, "i": 3 },
//     { "d": 1, "e": 2, "h": 3 },
//     { "a": 1, "b": 2, "i": 3 },
//     { "d": 1, "e": 2, "k": 3 },
//     { "d": 1, "e": 2, "l": 3 },
// ];
// let arr1 =[null,undefined,true,43,false]
// console.log('arrrNew:', compact(arr1));
// let arr3 =[1,2,3,4,5,8,9];
// let arr4 = [1,4,8,22,12];
// console.log('newArr: ',intersection(arr3,arr4));
// // Array before breaking in to chunks
// console.log("Before: ", arr)
 
// // Printing the first element
// // of the chunk as size 1
// console.log("After: ",
//     chunk(arr, 2));


  return (
    <div className='login' style={sectionStyle}>
       <div className='login__form'>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        className='inputForm'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
          <Button type="primary" onClick={() => { navigate('/register') }}>
            Register
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
   
    </div>
   
  )
}
