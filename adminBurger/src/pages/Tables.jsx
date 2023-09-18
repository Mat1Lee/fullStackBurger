import {
  Avatar,
  Button,
  Card,
  Col,
  Form, Input,
  Modal,
  Radio,
  Row,
  Space, Table,
  Tag,
  Typography
} from "antd";
import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createItem, deleteItem, getItems, getListUser, updateItem } from "../features/type/type";

const { Title } = Typography;





// project table start


function Tables() {
const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('a');
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate,setIsUpdate] = useState(false)
const [valueUp,setValueUp] = useState('');
const [update,setUpdate] = useState('');
const [idUp,setIdUp] = useState('');
const [form] = Form.useForm();
const onFinish = (values) => {
   
  setValueUp(values)
  console.log(values);
 
};
const handleCancel = () => {
  setIsModalOpen(false);
  setUpdate('')
  // form.resetFields();
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const handleOk = () => {
  
  setConfirmLoading(true);
  setTimeout(() => {
    setIsModalOpen(false);
  setUpdate('')
getData()
    setConfirmLoading(false);
  }, 2000);
  
  
};
  const showModal = () => {
    console.log('object');
    setIsModalOpen(true);
  }

  const getData = useCallback(async () => {
    try {
      if (selectedTab === "a") {
        const res = await getListUser();
        setUserData(res);
      } else {
        const res = await getItems();
        setItemData(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, [selectedTab]);

  const onChange = useCallback((e) => {
    setSelectedTab(e.target.value);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const handleDelete=async(id)=>{
    await deleteItem(id);
    getData();
   } 
   const handleUpdate =()=>{
    console.log(valueUp);
    updateItem(idUp,valueUp)
    getData();
  }
  const handleCreate =()=>{
    // console.log(valueUp);
    createItem(valueUp);
    getData();
    
  }
  const columns = [
    {
      title: "AUTHOR",
      dataIndex: "name",
      key: "name",
      width: "32%",
      render: (text) => (
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>{text}</Title> 
            {/* <span></span> */}
          </div>
        </Avatar.Group>
      ),
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "FUNCTION",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === 'admin' ? "red" : "blue"} size="middle">{role}</Tag>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <a 
          onClick={()=>{
           navigate(`/profile/${item._id}`)
          }}
          
          >Profile</a>
          <a style={{ color: "red" }}>Delete</a>
        </Space>
      ),
    },
  ];
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
  const itemColumns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      width: "32%",
      render: (text) => (
        <div className="avatar-info">
          <Title level={5}>{text}</Title>
        </div>
      ),
    },
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <a onClick={()=>{
            showModal()
            setUpdate(item);
            setIdUp(item._id);
            setIsUpdate(true);
            
            }}>Update</a>
          <a style={{ color: "red" }}
          onClick={()=>handleDelete(item._id)}  


          
          >Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">List User</Radio.Button>
                    <Radio.Button value="b">List Item</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                {
                  selectedTab === 'a' ? <Table
                  columns={columns}
                  dataSource={userData}
                  pagination={false}
                  className="ant-border-space"
                />
                :
                <>
                 <Button onClick={()=>{showModal();
        setIsUpdate(false)
        }}  style={{width:'150px',backgroundColor:'#1677ff',marginLeft:'20px'}}>Add new item</Button>
                <Table
                columns={itemColumns}
                dataSource={itemData}
                pagination={false}
                className="ant-border-space"
              />
                </>
                
                }
                
              </div>
            </Card>

          
          </Col>
        </Row>
      </div>
      <Modal title="Nhập thông tin: " confirmLoading={confirmLoading} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
        Confirm
      </Button>
      <Button type="primary" style={{marginLeft:'20px'}} onClick={handleUpdate}>
        Update
      </Button>
      </> : <>
      
      <Button type="primary" htmlType="submit">
        Confirm
      </Button>
      <Button type="primary" onClick={handleCreate}>
        Add
      </Button>
      </> }
      
    </Form.Item>
  </Form>
      </Modal>
    </>
  );
}

export default Tables;
