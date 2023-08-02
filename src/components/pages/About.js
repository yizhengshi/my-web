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
                            Hey, I'm Yizheng Shi, pursuing Master of Science
                            in Computer Science degree at Yale University.
                        </div> 
                        <div className="about-text px">
                            I am currently interested in working with
                            full-stack development, AI,
                            Database management, and Operating System. Aside from these topics, 
                            I am open to learning about other computer science 
                            skills. Outside of work, I am an amateur photographer, 
                            video game enthusiast, web developer,
                            and fan of LEGO. 
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