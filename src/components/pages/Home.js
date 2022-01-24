import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

class Home extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#F5F5F5";
  }

  render() {
    return (
      <Container className="wrapper">
        <Row className="row">
          <Col className="col-left">
          <br></br>
          <br></br>
            <Image
              className="image-prof"
              bsPrefix="border"
              src={require("../../assets/images/self.jpeg")}
              roundedCircle
            />
          </Col>
          <Col className="col-right" xs={6}>
            <div className="desc-container">
              <div className="desc-head">Hi, I'm Yizheng Shi.</div>
              <div className="desc-text">Sophomore CS student @ UW-Madison</div>
            </div>
            <div className="links-container">
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <GithubOutlined
                onClick={() =>
                  (window.location.href = "https://github.com/yizhengshi")
                }
                style={{ fontSize: "300%" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <LinkedinOutlined
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/yizhengshi")
                }
                style={{ fontSize: "300%" , color: "#0077b5"}}
              />
              &nbsp;&nbsp;&nbsp;
              <TwitterOutlined
                onClick={() =>
                  (window.location.href = "https://www.twitter.com/YS58888")
                }
                style={{ fontSize: "300%", color: "#1DA1F2"}}
              />
              <br></br>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
