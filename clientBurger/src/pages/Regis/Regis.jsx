
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { signUpUser } from '../../features/type/type';

export default function Regis() {
  var sectionStyle = {
    // display:'block',
    backgroundPosition: 'center', 
    backgrondSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundImage: "url(https://th.bing.com/th/id/OIP.0VO1CclSI25lgE9UrcBcRAHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
    height:'100vh',
  };
  const navigate = useNavigate()
const onFinish = async (values) => {
  const value = {...values,
    id:uuid()
    }
    // console.log(value.id);
    localStorage.setItem('user', value.id)
    localStorage.setItem('nameUser', value.name)
    localStorage.setItem('email', value.email)
  try {
    await signUpUser(value);
    navigate('/')
  } catch (error) {
    console.log(error);
  }
 
//  try {
   
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     localStorage.setItem('user',JSON.stringify(res.user.uid))
//     localStorage.setItem('email',email)
//       setDoc(doc(db, "User",res.user.uid ), {
//             id: res.user.uid,
//             displayName:username,
//             email,
//             password
           
//           });  
      
//           navigate("/");
//   } catch (err) {
//   console.log(err);
//   } 
};
  
  
  



const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  
  return (
    <div style={sectionStyle}>
    <Form
    className='inputForm'
 name="basic"
 labelCol={{
   span: 8,
 }}
 wrapperCol={{
   span: 16,
 }}
 style={{
   maxWidth: 600,
 }}
 initialValues={{
   remember: true,
 }}
 onFinish={onFinish}
 onFinishFailed={onFinishFailed}
 autoComplete="off"
>
 <Form.Item
   label="Username"
   name="name"
   rules={[
     {
       required: true,
       message: 'Please input your username!',
     },
   ]}
 >
   <Input />
 </Form.Item>
 <Form.Item
   label="email"
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
 </Form.Item>

 <Form.Item
   wrapperCol={{
     offset: 8,
     span: 16,
   }}
 >
   <Button type="primary" htmlType="submit">
     Register
   </Button>
 </Form.Item>
</Form>
 </div>
  )
}
