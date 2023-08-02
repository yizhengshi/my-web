import React from "react";
import { Container, Button, Image } from "react-bootstrap";

class ExperienceOverview extends React.Component {
  getButtons = () => {
    if (this.props.github) {
    //     if (this.props.course) {
    return (
      <div className="project-row" style={{ marginTop: "2vh" }}>
        <Button
          className="project-button"
          target="_blank"
          href={this.props.github}
        >
          See on GitHub
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          className="project-button"
          target="_blank"
          href={this.props.web}
        >
          See on Web
        </Button>
      </div>
    );
  };
  }

  render() {
    return (
      <Container className="project-overview">
        <div className="project-row space-between">
          <div className="project-title">{this.props.title}</div>
          <div className="project-location">{this.props.year}</div>
        </div>
        <div className="project-row space-between">
          <div className="project-position">{this.props.position}</div>
          <div className="project-location">{this.props.location}</div>
        </div>
        <div className="project-row space-between" style={{ marginTop: "1vh" }}>
        <div className="project-description">{this.props.description}</div>
        </div>
        <div className="project-row">
          <div className="project-techword">{this.props.word}</div>
          &nbsp;
          <div className="project-techbold">{this.props.tech}</div>
        </div>
      </Container>
    );
  }
}

export default ExperienceOverview;
