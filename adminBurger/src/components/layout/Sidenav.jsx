

// import { useState } from "react";
import { DatabaseOutlined, LayoutOutlined, LoginOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

function Sidenav({ color,id }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  
  const handleLogout = () => {
    // Clear local storage and reload the page
    localStorage.clear();
    window.location.reload();
    
  };


  return (
    <>
      <div className="brand">
        <img  alt="" />
        <span>Burger Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              <LayoutOutlined />
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
             <DatabaseOutlined />
            </span>
            <span className="label">Tables</span>
          </NavLink>
        </Menu.Item>
        
        
        <Menu.Item className="menu-item-header" key="3">
          Account Pages
        </Menu.Item>
      
        <Menu.Item key="4"
         onClick={handleLogout}
        >
              <NavLink>
              <span
              className="icon"
            style={{backgroundColor:'red'}}
           
            >
             <LoginOutlined />
            </span>
            <span className="label">Log Out</span>
        
              </NavLink>
          
        </Menu.Item>
        
      </Menu>
    
    </>
  );
}

export default Sidenav;
