import React from 'react';
import {Container} from 'react-bootstrap';
import ProjectOverview from './ProjectOverview';

class Projects extends React.Component {
    render() {
        return (
            <Container className="projects-container" style={{marginBottom: 75}}>
                <div className="projects-header">
                    Projects
                </div> 
                <hr className="hline" />
                <ProjectOverview
                    title="Flight Planner"
                    year="2021"
                    description="Created a command-line application using Java
                                dijkstra's algorithm and red black tree data structure to find the most optimal flight based on 
                                customer preference, such as time, price, etc"
                    />
                <hr />
                <ProjectOverview
                    title="Calculator"
                    year="2021"
                    description="Used react.js, CSS, Javascripts, and ant design to mimic a Iphone calculator. Supports up to
                    10 digits of precision. Able to show the calculation procedure."
                    github="https://github.com/yizhengshi/simple-calculator"
                    web ="https://yizhengshi.github.io/simple-calculator/"
                    />
                <hr />
                <ProjectOverview
                    title="Analysis of 2022 Beijing Olympic Participant"
                    year="2021"
                    description="Used the sklearn Python library and logistic regression algorithm to evaluate the the possibility
                    of attending Beijing 2022 Winter Olypics games for individuals based on age, nationality, race, etc"
                    />
                <hr />
                <ProjectOverview
                    title="Pandas Kitchen"
                    year="2022"
                    description="Used React.js, Redux, antd, Jacascripts, and CSS to develop a food deliver app."
                    github="https://github.com/yizhengshi/food-delivery-web"
                    web="https://yizhengshi.github.io/food-delivery-web/"
                    />
                <hr />
                <ProjectOverview
                    title="AAAgenda"
                    year="2022"
                    description="Web application for planning and visualizing daily activities by using redux, react.js, Javascripts."
                    github="https://github.com/yizhengshi/todolist"
                    web="https://yizhengshi.github.io//todolist/"
                    />
                <hr />
                <ProjectOverview
                    title="Personal Website"
                    year="2022"
                    description="This website is created by using react, antd, bootstrap.css, react-router, and github hosting."
                    github="https://github.com/yizhengshi/yizhengshi.github.io"
                    web="https://yizhengshi.github.io/my-web/#/"
                    />
            </Container> 
        );
    }
}

export default Projects;