import React from 'react';
import Main from './Main';
import TopNavbar from '../layout/TopNavbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <TopNavbar />
                <Main />
            </div>
        );
    }
}

export default App;