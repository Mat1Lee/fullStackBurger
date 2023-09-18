
import { Layout } from "antd";
import Sidenav from "./Sidenav";

import { Outlet } from "react-router-dom";
const { Header: AntHeader, Content, Sider } = Layout;

function Main() {
  return (
    <Layout
      className={`layout-dashboard `}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={() => {}}
        trigger={null}
        width={250}
        theme="light"
        style={{backgroundColor:'cornflowerblue',borderRadius:'10px'}}
        className={`sider-primary ant-layout-sider-primary `}
       
      >
        <Sidenav />
      </Sider>
      <Layout>
     
        <Content className="content-ant">

          <Outlet/>
        </Content>

      </Layout>
    </Layout>
  );
}

export default Main;
