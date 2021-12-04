import React from "react";
import Contentbody from "../Content-part/content";
import logo from "../images/BangDBBlack.png";
// import "./index.less";
import "../App.less";
import "antd/dist/antd.css";
import "./Layoutclass.css";
import SubMenu from "antd/lib/menu/SubMenu";
import { Dropdown, Image, Input, Layout, Menu, Space, Button } from "antd";

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
  SettingOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { Footer } from "antd/lib/layout/layout";
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
                // marginLeft: "-10px",
                width: "100vw",
                paddingLeft: "-16px",
              }}>
              <Space style={{ float: "left", color: "white" }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  { className: "trigger-custom", onClick: this.toggle }
                )}
                <Image
                  style={{ position: "relative", top: "5px" }}
                  src={logo}
                  width={100}></Image>
                <Input
                  style={{ borderRadius: "20px" }}
                  placeholder="Search"
                  size="large"
                  prefix={<SearchOutlined />}></Input>
              </Space>
              <Space style={{ float: "right", paddingRight: "4ex" }}>
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

                overflow: "auto",
                top: 0,
                left: 0,
                width: "100%",
              }}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}>
              <Menu
                theme="dark"
                mode="inline"
                style={{
                  border: "none",
                  width: "100%",
                  color: "inherit",
                  fontSize: "2.5ex",
                  fontFamily: "Acme , sans-serif",
                  fontWeight: 500,
                  backgroundColor: "#34445c",

                  // padddingLeft: "0ex",
                }}
                defaultOpenKeys={["sub6"]}
                inlineCollapsed={this.state.collapsed}>
                <SubMenu
                  key="sub1"
                  title=" Dashboard"
                  icon={
                    <AreaChartOutlined
                      style={{
                        fontSize: "11ex",

                        marginInlineEnd: "13px",
                        marginInlineStart: "-5px",
                      }}
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
                  icon={
                    <UsergroupAddOutlined
                      style={{
                        fontSize: "11ex",
                        marginInlineEnd: "13px",
                        marginInlineStart: "-5px",
                      }}
                    />
                  }>
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
                  icon={
                    <ShoppingCartOutlined
                      style={{
                        fontSize: "11ex",
                        marginInlineEnd: "13px",
                        marginInlineStart: "-5px",
                      }}
                    />
                  }>
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
                  icon={
                    <PieChartOutlined
                      style={{
                        fontSize: "11ex",
                        marginInlineEnd: "13px",
                        marginInlineStart: "-5px",
                      }}
                    />
                  }>
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
                  icon={
                    <SettingOutlined
                      style={{
                        fontSize: "11ex",
                        marginInlineEnd: "13px",
                        marginInlineStart: "-5px",
                      }}
                    />
                  }>
                  <div
                    style={{
                      // backgroundColor: "#34445c",
                      // color: "white",
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
                <Space
                  inlineCollapsed={this.state.collapsed}
                  style={{
                    margin: 4,
                  }}>
                  <div
                    style={{
                      margin: "8%",
                      marginLeft: "2%",
                      backgroundColor: "rgba(255, 255, 255, 0.19)",
                      paddingBottom: "11px",
                      paddingTop: "11px",
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      // border: "solid",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                      color: "white",
                    }}>
                    {/* <p>BangDB</p> */}
                    <br></br>
                    <h6
                      style={{
                        fontSize: "1rem",
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: 1.75,
                        color: "inherit",
                      }}>
                      BangDB
                    </h6>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: 1.57,
                        color: "#93CA3AF",
                        display: "block",
                        marginBlockStart: "0.5em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}>
                      License : Freemuim
                    </p>
                    <Button
                      icon={<ShoppingCartOutlined />}
                      style={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                      }}>
                      Subscribe Now
                    </Button>
                  </div>
                </Space>
                {/* <Divider /> */}
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
          <Footer
            style={{
              backgroundColor: "#34445c",
              alignContent: "center",
            }}>
            <div
              style={{
                marginLeft: "45% ",

                width: "180px",
                color: "white",

                borderRadius: "8px",

                backgroundColor: "rgba(255, 255, 255, 0.19)",
                // paddingBottom: "1%",
                paddingLeft: "1%",
                display: "grid",
                // gridTemplateColumns: "repeat(2,auto)",
                // gridTemplateRows: "repeat(2,auto)",
              }}>
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    marginLeft: "15%",
                    marginRight: "2%",
                    fontWeight: 500,
                    lineHeight: 1.75,
                    color: "inherit",
                  }}>
                  Buy Premium
                </p>
                <Button
                  icon={<ShoppingCartOutlined />}
                  style={{ marginBottom: "5%" }}>
                  Subscribe Now
                </Button>
              </div>
              <div
                style={{
                  gridRow: 1 / -1,
                  gridColumn: 2 / 3,
                  fontSize: "1rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}>
                {" "}
                Connect with us on<br></br>
                <LinkedinOutlined
                  style={{ fontSize: "2.5ex", paddingInline: "2%" }}
                />
                <GithubOutlined />
              </div>
            </div>
          </Footer>
        </Layout>
      </>
    );
  }
}
export default SiderDemo;
