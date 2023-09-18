
import {
  Button,
  Card,
  Col,
  Descriptions,
  Row
} from "antd";
import React from "react";

import { DeleteOutlined } from '@ant-design/icons';

export default function Billing(props) {

const {item} = props;
 
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  return (
    <>
     
      <Row >
        <Col >
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[<h6 className="font-semibold m-0">Billing Information</h6>]}
            bodyStyle={{ paddingTop: "0" }}
          >
            <Row gutter={[24, 24]}>
              {item && item.map((i, index) => (
                <Col span={24} key={index}>
                  <Card className="card-billing-info" bordered="false">
                    <div className="col-info">
                      <Descriptions >
                        <Descriptions.Item label="Company Name" span={3}>
                          {i.name}
                        </Descriptions.Item>

                        <Descriptions.Item label="Email Address" span={3}>
                          {i.address}
                        </Descriptions.Item>
                        <Descriptions.Item label="PHONE Number" span={3}>
                         {i.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="Total price" span={3}>
                         $ {i.total}
                        </Descriptions.Item>
                        <Descriptions.Item label="Order Date" span={3}>
                         {i?.createdAt?.slice(0,10)}
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className="col-action">
                      <Button type="link" danger>
                      <DeleteOutlined />DELETE
                      </Button>
                      <Button type="link" className="darkbtn">
                        {pencil} EDIT
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        
      </Row>
    </>
  );
}


