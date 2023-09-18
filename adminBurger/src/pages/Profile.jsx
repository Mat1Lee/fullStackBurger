
import { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  Col,
  Descriptions,
  Row
} from "antd";

import { useParams } from "react-router-dom";
import { getUserById } from "../features/type/type";

function Profile() {
  const [userData, setUserData] = useState('');
  const {id} = useParams();
const getDataUser = async()=>{
  const res = await getUserById(id);
  setUserData(res);
  console.log(res);
}
useEffect(()=>{
  getDataUser();
},[id])
const imgUrl = 'https://img.freepik.com/premium-photo/photo-icon-with-man-blue-background-3d-render-illustration_567294-399.jpg?size=626&ext=jpg&ga=GA1.2.163014973.1694958766&semt=ais'

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + imgUrl + ")",    backgroundSize: "auto",
        backgroundPosition: "center",marginTop:'0' }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1694958784~exp=1694959384~hmac=f4f5438c70d9c7cdfb3928d719c8ffc9b04e49be25b560208e8f6c3e947a345b" />
                  
                <div className="avatar-info">
                  <h4 className="font-semibold m-0">{userData.name}</h4>
                  <p>{userData.role}</p>
                </div>
              </Avatar.Group>
            </Col>
         
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
       
        <Col>
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Profile Information</h6>}
            className="header-solid h-full card-profile-information"
          
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
           
            <Descriptions title="Thông tin cá nhân">
              <Descriptions.Item label="Full Name" span={3}>
                {userData.name}
              </Descriptions.Item>
              <Descriptions.Item label="Mobile" span={3}>
                (84) 969289969
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                {userData.email}
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                VN
              </Descriptions.Item>
              
            </Descriptions>
          </Card>
        </Col>
       
      </Row>
      
    </>
  );
}

export default Profile;
