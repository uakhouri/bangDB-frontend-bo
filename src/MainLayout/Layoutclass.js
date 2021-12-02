import "antd/dist/antd.css";
import "./Layoutclass.css";
import {
  Dropdown,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  Button,
  Row,
  Col,
  Card,
  Divider,
} from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import logo from "../images/BangDBBlack.png";
import bargrp from "../images/bargraph.png";
import pie from "../images/piechart.png";

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
  LinkedinOutlined,
  PhoneOutlined,
  HomeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import React from "react";
import Avatar from "antd/lib/avatar/avatar";

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
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                backgroundColor: "#08142c",
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
            <Layout
              className="site-layout"
              style={{ marginTop: "9ex", padding: 0 }}>
              <Row>
                <Col flex="200px">
                  <Sider
                    className="site-layout"
                    style={{
                      // backgroundColor: "#fa541c",
                      paddingTop: "-10px",
                      color: "white",
                      height: "100vh",
                      position: "fixed",
                      marginLeft: "-10px",
                      overflow: "auto",
                      left: 0,
                    }}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <Menu
                      theme="dark"
                      mode="inline"
                      style={{
                        // color: "white",
                        fontSize: "2.5ex",
                        fontFamily: "Acme , sans-serif",
                        fontWeight: 500,
                        // backgroundColor: "#fa541c",
                      }}
                      defaultOpenKeys={["sub6"]}
                      inlineCollapsed={this.state.collapsed}>
                      <SubMenu
                        key="sub1"
                        title=" Dashboard"
                        icon={
                          <AreaChartOutlined style={{ fontSize: "11ex" }} />
                        }>
                        <Menu.Item key="1">
                          <p>nav1</p>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <p>nav2</p>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <p>nav3</p>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub2"
                        title="Customers"
                        icon={
                          <UsergroupAddOutlined style={{ fontSize: "11ex" }} />
                        }>
                        <Menu.Item key="4">
                          <p>nav1</p>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <p>nav2</p>
                        </Menu.Item>
                        <Menu.Item key="6">
                          <p>nav3</p>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub3"
                        title="Products"
                        icon={
                          <ShoppingCartOutlined style={{ fontSize: "11ex" }} />
                        }>
                        <Menu.Item key="7">
                          <p>nav1</p>
                        </Menu.Item>
                        <Menu.Item key="8">
                          <p>nav2</p>
                        </Menu.Item>
                        <Menu.Item key="9">
                          <p>nav3</p>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub4"
                        title="Graphs"
                        icon={
                          <PieChartOutlined style={{ fontSize: "11ex" }} />
                        }>
                        <Menu.Item key="10">
                          <p>nav1</p>
                        </Menu.Item>
                        <Menu.Item key="11">
                          <p>nav2</p>
                        </Menu.Item>
                        <Menu.Item key="12">
                          <p>nav3</p>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub5"
                        title="Settings"
                        icon={
                          <ShoppingCartOutlined style={{ fontSize: "11ex" }} />
                        }>
                        <Menu.Item key="13">
                          <p>Settings</p>
                        </Menu.Item>
                      </SubMenu>
                      {/* <Divider /> */}
                      <SubMenu
                        key="sub6"
                        title="Buy Premium"
                        icon={<DollarOutlined style={{ fontSize: "11ex" }} />}>
                        <div
                          key="15"
                          className="logo-custom"
                          collapsible="false">
                          <div className="unlock-div">
                            {/* <br></br> */}
                            <div style={{ marginTop: "10px" }}></div>
                            <p style={{ fontSize: "20px" }}>Unlock</p>
                            <p>-Higher Number of Events</p>
                            <br></br>
                            <p>-More Scale</p>
                            <br></br>
                            <p>-More Models</p>
                          </div>
                          <div style={{ paddingLeft: "7%" }}>
                            <Button icon={<SketchOutlined />}>
                              Subscribe Now
                            </Button>
                          </div>
                        </div>
                      </SubMenu>
                    </Menu>
                  </Sider>
                </Col>
                <Layout className="site-layout">
                  <Col flex="auto">
                    <Content
                      className="site-layout-background"
                      style={{
                        margin: "0px 16px",
                        padding: 24,
                        minHeight: "100vh",
                      }}>
                      <div className="content-main-body">
                        <div className="server-data">
                          <div className="database-server">
                            <h1>Database Server [192.20.1.5]</h1>
                            <div className="ram-data">
                              Ram
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            {/* <Divider type="vertical" /> */}
                            <div className="cpu-data">
                              CPU
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="pro-data">
                              Processor
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="net-data">
                              Network
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                          </div>
                          <div className="training-server">
                            <h1>Training Server [192.20.1.6]</h1>
                            <div className="ram-data">
                              Ram
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="cpu-data">
                              CPU
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="pro-data">
                              Processor
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="net-data">
                              Network
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                          </div>
                          <div className="resource-server">
                            <h1>Resource Server [192.20.1.7]</h1>
                            <div className="ram-data">
                              Ram
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="cpu-data">
                              CPU
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="pro-data">
                              Processor
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                            <div className="net-data">
                              Network
                              <div className="box">
                                Data Will be presented in the form of graph
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <Divider /> */}
                        <div className="num-data">
                          <div className="num-box">
                            <div className="heading">Database</div>
                            <div className="num-entry">mydb</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Number of Tables</div>
                            <div className="num-entry">34</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Indexes</div>
                            <div className="num-entry">43</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Database Size</div>
                            <div className="num-entry">21.29GB</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Files</div>
                            <div className="num-entry">312</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Schemas</div>
                            <div className="num-entry">2</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Number of Schemas</div>
                            <div className="num-entry">71</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Number of Streams</div>
                            <div className="num-entry">3</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Notifications</div>
                            <div className="num-entry">11.254GB</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Stream Size</div>
                            <div className="num-entry">22.5M</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Number of Graph</div>
                            <div className="num-entry">3</div>
                          </div>
                          <div className="num-box">
                            <div className="heading">Size of Graph</div>
                            <div className="num-entry">3.57GB</div>
                          </div>
                        </div>
                        <Divider />
                        <div className="graph-data">
                          <Card title="Bar Graph">
                            <h4>Details about the graph</h4>
                            <Image
                              src={bargrp}
                              flex={4}
                              width="500px"
                              className="graphbar"></Image>
                          </Card>
                          <Card title="Pie Chart">
                            <h4>Details about the pie chart</h4>
                            <Image
                              src={pie}
                              flex={1}
                              width="200px"
                              className="graphpie"></Image>
                          </Card>
                        </div>
                      </div>
                    </Content>
                  </Col>
                </Layout>
              </Row>
            </Layout>
          </Layout>
          {/* <Footer
            className="site-layout-footer"
            style={{ backgroundColor: "white", textAlign: "center" }}>
            <h3>
              Check us on <LinkedinOutlined /> <GithubOutlined />{" "}
            </h3>
            <h3>
              Contact us on <PhoneOutlined />
            </h3>
            <h3>
              Address <HomeOutlined />
            </h3>
          </Footer> */}
        </Layout>
      </>
    );
  }
}
export default SiderDemo;
