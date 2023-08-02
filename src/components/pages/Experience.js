import React from 'react';
import {Container} from 'react-bootstrap';
import ExperienceOverview from './ExperienceOverview';

class Projects extends React.Component {
    render() {
        return (
            <Container className="projects-container" style={{marginBottom: 75}}>
                <div className="projects-header">
                    Work Experience
                </div> 
                <hr className="hline" />
                <ExperienceOverview
                    title="Barry-Wehmiller"
                    year="May 2023 - August 2023"
                    location = "Madison, WI"
                    position = "Software Engineer Intern"
                    word = "Tech Stack: "
                    tech = "C# .NET Framework, Python, Docker, Azure, Nginx, CI/CD, Edge Computing, REST API, Industrial IoT"
                    description={
                        <>
                            •  Built and published an IIoT Dashboard on Edge Device to synchronously monitor hundreds remote PLC sensors status.
                            <br />
                            • Developed an engaging user interface using C#, Blazor, and .NET to achieve customization and backend interaction.
                            <br />
                            • Applied Nginx as Reverse Proxy and Load Balancer for Grafana and NVR servers on Docker Containers.
                            <br />
                            • Deployed NVR and PLC data to InfluxDB, resulting in a 40% improvement in failure identification and troubleshooting efficiency through enhanced timestamp rollback capabilities.
                            <br />
                            • Incorporated scripts using Python and PowerShell to log the client interactions events from remote Edge PC, and developed a unified and centralize Log library to reach high extensibility and maintainability.
                        </>
                    }
                    />
                <hr />
                <ExperienceOverview
                    title="Algorithm TA at UW-Madison"
                    year="Jan 2023 - May 2023"
                    location = "Madison, WI"
                    position = "Teaching Assistant"
                    description={
                        <>
                            • Held weekly Office Hours, Discussion, and Review Session for a 300 students Algorithm class.
                            <br />
                            • Consolidated student understanding of Dynamic Programming, Network Flow, Divide Conquer Greedy, and NP.
                        </>
                    }
                    />
                <hr />
                <ExperienceOverview
                    title="Yin’s Machine Learning Research Group"
                    year="April 2022 - Nov 2022"
                    location = "Madison, WI"
                    position = "Research Assistant"
                    word = "Tech Stack: "
                    tech = "Pytorch, CNN, Image Processing, Supervised Learning, Dimension Reduction, Parallel Computing"
                    description={
                        <>
                            • Implemented and trained Mutual Information Regression model in Supervised Learning to recognize the pattern between DNA Sequence and Covid-19 symptom, with 74.2% accuracy on 5-fold nested Cross-Validation.
                            <br />
                            • Designed and trained a CNN with t-SNE dimension reduction for defective body cells image classification with 94.7% accuracy, and relied on SHapley Additive exPlanations to visualize defective probability for each pixel.
                            <br />
                            • Applied Sobel, Canny, GLCM, Gaussian Markov Random Field for image process, edge detect, and feature extraction.
                        </>
                    }
                    />
                <hr />
                <ExperienceOverview
                    title="FIMEC Computational Research Group"
                    year="Jan 2022 - May 2022"
                    location = "Madison, WI"
                    position = "Research Assistant"
                    word = "Tech Stack: "
                    tech = "C++, Object Oriented Design, MySQL, Geant4, Simulation "
                    description={
                        <>
                            • Applied C++ Object Oriented Design with Geant4 to simulate the passage of radiation through human tissues.
                            <br />
                            • Designed Geant4 radiation Interface and APIs for future Extension and Sustainability.
                            <br />
                            • Developed Python scripts to collected data from MySQL Database to conduct Statistical Analysis and Visualization.
                        </>
                    }
                    />
                
            </Container> 
        );
    }
}

export default Projects;