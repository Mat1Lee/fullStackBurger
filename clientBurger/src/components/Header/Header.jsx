import { Button, Dropdown, Empty, Modal } from 'antd'
import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { LogoutOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import DataExam from '../dataExam/dataExam'
import axios from 'axios'

export default function Header() {
  // const { currentUser } = ProContextAuth();
  const [open, setOpen] = useState(false);
  const [payList,setPaylist] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { allPay } = useSelector(store => store.cart);
  console.log(allPay);
  const name = useMemo(()=>{
    return localStorage.getItem('nameUser');
  },[]) 
  // console.log(n);
  if(allPay==null){
    setPaylist(true)
  }
  const showModal = () => {
    setOpen(true);
 
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);

      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
   
    setOpen(false);
  };

  
  const handleMenuClick = async(e) => {
   
   
    if(e.key == 1){
     showModal()
    }
    if(e.key == 2){
      
      await axios.post('http://localhost:3005/signOut/');
      localStorage.clear();
      window.location.reload();
      // signOut(auth)
    }
  };
  const items = [
   
    {
      label: 'Your order',
      key: '1',
      icon: <ShoppingCartOutlined />,
    },
     {
      label: 'Log Out',
      key: '2',
      icon: <LogoutOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <div className='header' >
      {/* <UserOutlined/> */}
        <div className="navlink">
          <Button><NavLink to='/'>Home</NavLink></Button>
          
           
          
        </div>
        <div className="header__user">
          {/* <div style={{ cursor: 'poiter' }} onClick={showModal}>{currentUser?.email}</div> */}
          <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
          {name}
    </Dropdown.Button>
        </div>


      </div>
      <Modal
      className='modal'
      width={850}
        title="Your Order"
        open={open}
        onOk={() => {
          handleOk()
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <hr />
        {payList ? <Empty/> : <DataExam props={allPay}/>}
        
      </Modal>
    </>

  )
}
