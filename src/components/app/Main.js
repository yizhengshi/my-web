import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/experience' component={Experience}/>
                </Switch>
            </main>
        );
    }
}

export default Main;