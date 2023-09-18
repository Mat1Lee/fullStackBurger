
import { PoundCircleOutlined, ShoppingOutlined } from '@ant-design/icons';
import {
  Card,
  Col,
  Row,
  Typography
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { getAllOrder, listDayOrder } from "../features/type/type";
import Billing from "./Billing";
function Home() {
  const { Title, Text } = Typography;
    const [orderList, setOrderList] = useState('');
    const [dayOrder,setDayOrder]=useState([])
  
    const fetchData = useCallback(async () => {
      try {
        const response = await getAllOrder()
        const reversedData = response?.data.reverse();
        setOrderList(reversedData);
       
        return response;
      } catch (error) {
        return undefined;
      }
    }, []);
  const getOrderDay = useCallback(async ()=>{
    try {
      const res = await listDayOrder();
      const reversedData = res?.data.reverse();
      convertData(reversedData);
      return res
    } catch (error) {
        console.log(error);
    }
  },[])
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
   
 fetchData();
 getOrderDay()
  },[fetchData,getOrderDay]);
  
const convertData = (data)=>{
  console.log(orderList,'akaak');
  let totalSale =0;
  data?.map((item)=>{
    totalSale += (+item.total);
    
  })
  setDayOrder(totalSale);
  return totalSale;
}; 

  const count = [
    {
      today: "Today’s Sales",
      title: `$ ${dayOrder}`,
      persent: "+30%",
      icon: <PoundCircleOutlined />,
      bnb: "bnb2",
    },
  
    {
      today: "New Orders",
      title: `${orderList?.length}`,
      persent: "+10%",
      icon: <ShoppingOutlined />,
      bnb: "bnb2",
    },
  ];
  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div style={{backgroundColor:'cornflowerblue'}} className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          {orderList && <Billing item={orderList}/>}
        </Row>
      </div>
    </>
  );
}

export default Home;
