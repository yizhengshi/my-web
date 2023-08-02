import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container className="about-container" style={{marginBottom: 70}}>
                <div className="about-header">
                    About Me 
                </div> 
                <hr className="hline" />
                <Row style={{marginTop: 0, paddingBottom: 0}}>
                    <Col className="abt-left-col" xs={8}>
                        <div className="about-text p1"> 
                        Hello, my name is Yizheng Shi, and I am currently pursuing a Master of Science in Computer Science at Yale University.
                        </div> 
                        <div className="about-text px">
                        My areas of interest lie in full-stack development, AI, Database management, 
                        and Operating Systems. Nevertheless, I remain open to exploring other Computer Science disciplines and skills. 
                        Beyond my academic pursuits, I indulge in photography as an amateur, enjoy engaging in web development, 
                        and have a keen fascination for LEGO. 
                        </div>
                    </Col>
                    <Col className="abt-right-col" xs={4}>
                        <Image
                            className="image-abt"
                            src={require("../../assets/images/about.jpg")}
                            roundedCircle
                            />
                    </Col> 
                </Row>
            </Container> 
        );
    }
}

export default About;