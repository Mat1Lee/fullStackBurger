
import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Switch,
  Typography
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/type/type";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


export default function SignIn() {
  const navigate = useNavigate()
 
    const onFinish = async(values) => {
      try {
        const res = await loginUser(values)
        if(res.user.role==='user'){
        
          return (
            navigate('/error')
        )
        } 
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
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout className="layout-default layout-signin">
     
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your email and password to sign in
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                  
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    
                  
                  </p>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
               
              </Col>
            </Row>
          </Content>
         
        </Layout>
      </>
    );
  }

