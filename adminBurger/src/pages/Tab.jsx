import { Button, Table, Modal, Checkbox, Form, Input } from 'antd';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
import { useCallback, useState } from 'react';



export default function Tab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: { value: 'John Brown 0', key: 0 },
      age: { value: '32', key: 1 },
      email: { value: 'jonh@gmail.com', key: 2 },
      phone: { value: 18889898989, key: 3 },
      address: { value: 'New York No. 1 Lake Park', key: 4 },
    },
    {
      key: '1',
      name: { value: 'John Brown 0', key: 0 },
      age: { value: '32', key: 1 },
      email: { value: 'jonh@gmail.com', key: 2 },
      phone: { value: 18889898989, key: 3 },
      address: { value: 'New York No. 1 Lake Park', key: 4 },
    },

  ]);
  const [count, setCount] = useState(2);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [col, setCol] = useState(1)

  const onFinish = (values) => {

    console.log(values, 'values');

    setCol(+values.col)

  };


  const handleAdd = () => {

    const newData = {
      key: count,
      name: { value: `John Brown${count}`, key: 0 },
      age: { value: '32', key: 1 },
      email: { value: `jonh@gmail.com${count}`, key: 2 },
      phone: { value: 18889898989, key: 3 },
      address: { value: `New York No.${count}Lake Park`, key: 4 },
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleAdd();
  };

  const renderCell = (key) => {
    if (key % col != 0) {
      return { colSpan: 0 };
    }
  else  return { colSpan: col };
  }


  const columns = [

    {
      title: 'Name',
      dataIndex: 'name',

      render: (_, { name }) => (

        <>
          <span>{name.value}</span>
        </>
      ),

       onCell: () =>
        {
        
         return { colSpan: col };
       }
    },


    {
      title: 'Age',
      dataIndex: 'age',

      render: (_, { age }) => (

        <>
          <span>{age.value}</span>
        </>
      ),
      onCell: ({ age }) => 
      {
        if (age.key % col != 0) {
          return { colSpan: 0 };
        }
      else  return { colSpan: col };
       }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (_, { email }) => (
        
        <>
          <span>{email.value}</span>
        </>
      ),

      onCell: ({ email }) => 
      
      {
        if (email.key % col != 0) {
          return { colSpan: 0 };
        }
      else  return { colSpan: col };
       }
      },

    {
      title: 'Phone',

      dataIndex: 'phone',
      render: (_, { phone }) => (

        <>
          <span>{phone.value}</span>
        </>
      ),
      onCell: ({ phone }) =>
      {
        if (phone.key % col != 0) {
          return { colSpan: 0 };
        }
      else  return { colSpan: col };
       }
    },
    {
      title: 'Address',

      dataIndex: 'address',
      render: (_, { address }) => (

        <>
          <span>{address.value}</span>
        </>
      ),
      onCell: ({ address }) => 
      {
        if (address.key % col != 0) {
          return { colSpan: 0 };
        }
      else  return { colSpan: col };
       }
  }
  ];



  return (
    <>
      <Table columns={columns} dataSource={dataSource} bordered />;
      <Button onClick={() => {
        showModal();
      }}>Add </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          style={{
            width: '400px',
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}

          autoComplete="off"
        >
          <Form.Item
            label="Set Col"
            name="col"

          >
            <Input />
          </Form.Item>


          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )



}
