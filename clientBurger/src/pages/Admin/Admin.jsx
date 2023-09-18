import React, { useCallback } from 'react';
import { Space, Table, Tag,Modal,Button } from 'antd';
import { useEffect,useState } from 'react';
import './Admin.css'
import axios from 'axios';
import Item from './Item';
import {deleteItem} from '../../features/type/type'
import { baseUrl } from '../../features/type/type';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  DatabaseOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme,Form,Input,InputNumber,Typography } from 'antd';
import {createItem,updateItem} from '../../features/type/type'
const { Header, Sider, Content } = Layout;
const getAll =()=>{
  console.log('object');
}

export default function Dasboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate,setIsUpdate] = useState(false);
  const [layOut,setLayout] = useState('item')
  const [update,setUpdate] = useState('');
  const [idUp,setIdUp] = useState('');
  const [items,setItem]= useState('');
  const [userList,setList] = useState('');
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setUpdate('')
    // form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setUpdate('')
    // form.resetFields();
  };
 
  
useEffect(()=>{

},[])
const handleDelete=async(id)=>{
 await deleteItem(id);
  fetchDatas();
}



const [valueUp,setValueUp] = useState('');


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
    createItem(valueUp);
    fetchDatas();  
  }
  const handleUpdate =()=>{
    console.log(valueUp);
    updateItem(idUp,valueUp)
    fetchDatas();
  }
const columns = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_,item) => (
      <Space size="middle">
        <a onClick={()=>{
          console.log(item._id);
          showModal();
          setUpdate(item);
          setIdUp(item._id);
          setIsUpdate(true);
        }
        
        }>Update </a>
        <a style={{color:'red'}} onClick={()=>handleDelete(item._id)}> Delete</a>
      </Space>
    ),
  },
];
const columnUser = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_,item) => (
      <Space size="middle">
        <a onClick={()=>{
          console.log(item._id);
          showModal();
          setUpdate(item);
          setIdUp(item._id);
          setIsUpdate(true);
        }
        
        }>Update </a>
        <a style={{color:'red'}} onClick={()=>handleDelete(item._id)}> Delete</a>
      </Space>
    ),
  },
];

const fetchDatas = useCallback(async ()=>{
    try {
      const r = await fetch('http://localhost:3005/getallitem',{method:'GET'})
      .then((res)=>res.json());
      setItem(r)
      return r
    } catch (error) {
      return false
    }
},[])
const fetchDataUser = useCallback(async ()=>{
    try {
      const r = await fetch('http://localhost:3005/listUsers',{method:'GET'})
      .then((res)=>res.json());
      setList(r)
      return r
    } catch (error) {
      return false
    }
},[])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
 
    await fetchDatas();
  await fetchDataUser();
    
  
  },[fetchDatas,fetchDataUser]);
      const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  /* eslint-disable no-template-curly-in-string */
  useEffect(() => {
    const {title,id,amount,price} = update
    console.log(title,id);
    form.setFieldsValue({
   title ,
   id,
   amount,
   price,  

    });
  }, [update]);
  return (
   <>

  
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DatabaseOutlined onClick={()=>{
                setLayout('item')
              }}/>,
              label: 'List Item',
            },
            {
              key: '2',
              icon: <UserOutlined 
              onClick={()=>{
                // console.log("user");
                setLayout('user')
              }}
              />,
              label: 'List User',
            },
           
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Button onClick={showModal} style={{width:'150px',backgroundColor:'#1677ff'}}>Add new item</Button>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
          {

            layOut == 'item' ? (<Table columns={columns}  dataSource={items}/>)  :   (<Table columns={columnUser} dataSource={userList} />)
          

          }  
          
         
         

           
        </Content>
      </Layout>
    </Layout>
 
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
     <Input />
    </Form.Item>
    <Form.Item
      name='id'
      label="Id"
    
    >
      <Input   />
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

      {isUpdate ? <>
        <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button type="primary" onClick={handleUpdate}>
        Update
      </Button>
      </> : <>
      
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button type="primary" onClick={handleCreate}>
        Add
      </Button>
      </> }
      
    </Form.Item>
  </Form>
      </Modal>
  
   </>
  )
}