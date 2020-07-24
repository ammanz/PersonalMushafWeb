import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import pg_4 from './pg_4.svg'
import pg_5 from './pg_5.svg'
import pg_6 from './pg_6.svg'
import pg_7 from './pg_7.svg'
import './App.css';
import FlipPage from 'react-flip-page'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        return <div className="App"><FlipPage orientation="horizontal" height={this.state.height} width={this.state.width}>
                <article>
                    <div className="row">
                        <div className="column">
                            <img src={pg_7} alt="pg_5" height={this.state.height}/>
                        </div>
                        <div className="column">
                            <img src={pg_6} alt="pg_4" height={this.state.height}/>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="row">
                        <div className="column">
                            <img src={pg_5} alt="pg_5" height={this.state.height}/>
                        </div>
                        <div className="column">
                            <img src={pg_4} alt="pg_4" height={this.state.height}/>
                        </div>
                    </div>
                </article>
        </FlipPage></div>
    }
}

export default App;
