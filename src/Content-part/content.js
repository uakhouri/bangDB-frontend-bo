import React from "react";
import "../Content-part/content.css";
import "../Content-part/server-data.css";
import "../Content-part/numeric-data.css";
import "../Content-part/graph-data.css";
// import bargrp from "../images/bargraph.png";
// import pie from "../images/piechart.png";
// import histo from "../images/histogram.png";
// import bargrp2 from "../images/bargraph2.png";
// import { Collapse } from "antd";
// import { MinusOutlined } from "@ant-design/icons";

// const { Panel } = Collapse;
// function callback(key) {
//   console.log(key);
// }
export default class Contentbody extends React.Component {
  // state = {
  //   expandIconPosition: "right",
  // };
  // onPositionChange = (expandIconPosition) => {
  //   this.setState({ expandIconPosition });
  // };
  render() {
    // const { expandIconPosition } = this.state;
    return (
      <div className="main-content-body" style={{ marginLeft: 50 }}>
        <div className="server-data">
          <div className="database-server">
            <div className="heading">
              <h1 style={{ textAlign: "center", color: "#006d75" }}>
                Database Server
              </h1>
            </div>
            <div className="ram-data">
              <h3>Ram</h3>
            </div>
            <div className="cpu-data">
              <h3>CPU</h3>
            </div>
            <div className="pro-data">
              <h3>Processor</h3>
            </div>
            <div className="net-data">
              <h3>Network</h3>
            </div>
          </div>
          <div className="training-server">
            <div className="heading">
              <h1 style={{ textAlign: "center", color: "#006d75" }}>
                Training Server
              </h1>
            </div>
            <div className="ram-data">
              <h3>Ram</h3>
            </div>
            <div className="cpu-data">
              <h3>CPU</h3>
            </div>
            <div className="pro-data">
              <h3>Processor</h3>
            </div>
            <div className="net-data">
              <h3>Network</h3>
            </div>
          </div>
          <div className="resource-server">
            <div className="heading">
              <h1 style={{ textAlign: "center", color: "#006d75" }}>
                {" "}
                Resource Server
              </h1>
            </div>
            <div className="ram-data">
              <h3>Ram</h3>
            </div>
            <div className="cpu-data">
              <h3>CPU</h3>
            </div>
            <div className="pro-data">
              <h3>Processor</h3>
            </div>
            <div className="net-data">
              <h3>Network</h3>
            </div>
          </div>
        </div>
        <div className="numeric-data">
          <div className="number-place">
            <h1
              className="heading"
              style={{ textAlign: "center", color: "#006d75" }}>
              Numerical Data
            </h1>
            <div className="num-box">
              <div className="heading-number">Database</div>
              <div className="num-entry">mydb</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Number of Tables</div>
              <div className="num-entry">34</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Indexes</div>
              <div className="num-entry">43</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Database Size</div>
              <div className="num-entry">21.29GB</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Files</div>
              <div className="num-entry">312</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Schemas</div>
              <div className="num-entry">2</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Number of Schemas</div>
              <div className="num-entry">71</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Number of Streams</div>
              <div className="num-entry">3</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Notifications</div>
              <div className="num-entry">11.254GB</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Stream Size</div>
              <div className="num-entry">22.5M</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Number of Graph</div>
              <div className="num-entry">3</div>
            </div>
            <div className="num-box">
              <div className="heading-number">Size of Graph</div>
              <div className="num-entry">3.57GB</div>
            </div>
          </div>
        </div>
        <div className="graph-data">
          <div className="graph">
            <div className="heading"></div>
          </div>
        </div>
      </div>
    );
  }
}
