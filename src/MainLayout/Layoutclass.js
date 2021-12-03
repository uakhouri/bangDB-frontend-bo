import React from "react";
import Contentbody from "../Content-part/content";
import logo from "../images/BangDBBlack.png";

import "antd/dist/antd.css";
// import "./Layoutclass.css";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  Dropdown,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  Button,
  Card,
  Divider,
} from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AreaChartOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
  NotificationOutlined,
  SmileOutlined,
  PieChartOutlined,
  SketchOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
const { Header, Sider, Content } = Layout;

const dropdownMenu = (
  <Menu>
    <Menu.Item>User</Menu.Item>
    <Menu.Item>Sign Out</Menu.Item>
  </Menu>
);

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <>
        <Layout>
          <Layout>
            <Header
              className="site-layout"
              style={{
                backgroundColor: "#34445c",
                padding: 0,
                position: "fixed",
                zIndex: 1,
                width: "100%",
              }}>
              <Space
                style={{ paddingRight: "1ex", float: "left", color: "white" }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  { className: "trigger", onClick: this.toggle }
                )}
                <Image
                  style={{ position: "absolute", top: "-3ex", left: "-1.3ex" }}
                  src={logo}
                  width={100}></Image>
                <Input
                  style={{ borderRadius: "20px" }}
                  placeholder="Search"
                  size="large"
                  prefix={<SearchOutlined />}></Input>
              </Space>
              <Space style={{ float: "right", paddingRight: "2ex" }}>
                <UserOutlined
                  style={{
                    fontSize: "2.5ex",
                    paddingRight: "1ex",
                    color: "white",
                  }}
                />
                <NotificationOutlined
                  style={{
                    fontSize: "2.5ex",
                    paddingRight: "1ex",
                    color: "white",
                  }}
                />
                <Dropdown overlay={dropdownMenu} arrow>
                  <Avatar
                    size="small"
                    style={{ marginTop: "-0.7ex" }}
                    icon={<SmileOutlined style={{ fontSize: "2.5ex" }} />}
                  />
                </Dropdown>
              </Space>
            </Header>
          </Layout>
          <Layout className="site-layout">
            <Sider
              className=" site-layout-background"
              style={{
                backgroundColor: "#34445c",
                paddingTop: "9ex",
                paddingLeft: 0,
                color: "white",
                height: "100vh",
                position: "sticky",
                marginLeft: "-10px",
                overflow: "auto",
                top: 0,
                left: 0,
                width: "100%",
              }}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}>
              <Menu
                mode="inline"
                style={{
                  width: "100%",
                  color: "white",
                  fontSize: "2.5ex",
                  fontFamily: "Acme , sans-serif",
                  fontWeight: 500,
                  backgroundColor: "#34445c",
                  // marginLeft: "-10px",

                  // padddingLeft: "0ex",
                }}
                defaultOpenKeys={["sub6"]}
                inlineCollapsed={this.state.collapsed}>
                <SubMenu
                  key="sub1"
                  title=" Dashboard"
                  icon={
                    <AreaChartOutlined
                      style={{ fontSize: "11ex", margin: 0 }}
                    />
                  }>
                  {/* <div style={{ backgroundColor: "#34445c", color: "white" }}> */}
                  <Menu.Item key="1">
                    <p>nav1</p>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <p>nav2</p>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav3</p>
                  </Menu.Item>
                  {/* </div> */}
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title="Customers"
                  icon={<UsergroupAddOutlined style={{ fontSize: "11ex" }} />}>
                  {/* <div style={{ backgroundColor: "#34445c", color: "white" }}> */}
                  <Menu.Item
                    key="4"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav1</p>
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav2</p>
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav3</p>
                  </Menu.Item>
                  {/* </div> */}
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title="Products"
                  icon={<ShoppingCartOutlined style={{ fontSize: "11ex" }} />}>
                  {/* <div style={{ backgroundColor: "#34445c", color: "white" }}> */}
                  <Menu.Item
                    key="7"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav1</p>
                  </Menu.Item>
                  <Menu.Item
                    key="8"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav2</p>
                  </Menu.Item>
                  <Menu.Item
                    key="9"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav3</p>
                  </Menu.Item>
                  {/* </div> */}
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title="Graphs"
                  icon={<PieChartOutlined style={{ fontSize: "11ex" }} />}>
                  {/* <div style={{ backgroundColor: "#34445c", color: "white" }}> */}
                  <Menu.Item
                    key="10"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav1</p>
                  </Menu.Item>
                  <Menu.Item
                    key="11"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav2</p>
                  </Menu.Item>
                  <Menu.Item
                    key="12"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <p>nav3</p>
                  </Menu.Item>
                  {/* </div> */}
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title="Settings"
                  icon={<ShoppingCartOutlined style={{ fontSize: "11ex" }} />}>
                  <div
                    style={{
                      backgroundColor: "#34445c",
                      color: "white",
                      margin: "0 0",
                    }}>
                    <Menu.Item
                      key="13"
                      // style={{ backgroundColor: "#34445c", color: "white" }}
                    >
                      <p>Settings</p>
                    </Menu.Item>
                  </div>
                </SubMenu>
                {/* <Divider /> */}
                <SubMenu
                  key="sub6"
                  title="Buy Premium"
                  icon={<DollarOutlined style={{ fontSize: "11ex" }} />}>
                  <div
                    key="15"
                    className="logo-custom"
                    collapsible="false"
                    // style={{ backgroundColor: "#34445c", color: "white" }}
                  >
                    <div className="unlock-div">
                      {/* <br></br> */}
                      <div
                        style={{
                          marginTop: "10px",
                          minHeight: "max-content",
                        }}></div>
                      <p
                        style={{
                          fontSize: "20px",
                          paddingLeft: "20px",
                          backgroundColor: "#34445c",
                        }}>
                        Unlock
                      </p>
                      <p style={{ paddingLeft: "15px" }}>
                        -Higher Number of Events
                      </p>
                      <br></br>
                      <p style={{ paddingLeft: "15px" }}>-More Scale</p>
                      <br></br>
                      <p style={{ paddingLeft: "15px" }}>-More Models</p>
                    </div>
                    <div style={{ paddingLeft: "7%" }}>
                      <Button icon={<SketchOutlined />}>Subscribe Now</Button>
                    </div>
                  </div>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  paddingTop: "10ex",
                  width: "100%",
                  minHeight: "100vh",
                }}>
                <Contentbody />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default SiderDemo;
