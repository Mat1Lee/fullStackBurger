import React, { useEffect } from 'react'
import { useState } from 'react';
import { Layout, Menu, theme,Button,Form,Input,InputNumber } from 'antd';
import {createItem,updateItem} from '../../features/type/type'
export default function Item({update,idUp}) {
  const [valueUp,setValueUp] = useState('');
  // const[idUpdate,setId] = useState('')

// setId(idUp)
const {title,id,amount,price} = update

const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
   
    setValueUp(values)
    console.log(values);
   
  };
  const handleCreate =()=>{
    // console.log(valueUp);
    createItem(valueUp);  form.resetFields();
  }
  const handleUpdate =()=>{
    console.log(valueUp);
    updateItem(idUp,valueUp)
  }
  return (
    <div>
      
        <Form
    {...layout}
    form={form}
    onFinish={onFinish
    }
    
    style={{
      maxWidth: 600,
    }}

  >
    <Form.Item
      name='title'
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input defaultValue={title} />
    </Form.Item>
    <Form.Item
      name='id'
      label="Id"
    
    >
      <Input defaultValue={id}/>
    </Form.Item>
    <Form.Item
      name='amount'
      label="Amount"
     
    >
      <Input />
    </Form.Item>
    <Form.Item
      name='price'
      label="Price"
    
    >
      <Input />
    </Form.Item>
    
  
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button type="primary" onClick={handleUpdate}>
        Add
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}
