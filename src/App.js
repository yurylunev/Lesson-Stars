import React, {Component} from 'react';
import './App.css';
import StarsRate from "./StarsRate";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: 0,
            starsPreSelected: 0
        };
        this.change = this.change.bind(this);
    }

    change(props) {
        this.setState(
            {...props}
        );
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    Stars Project
                </p>
                <StarsRate totalStars={5}
                           starsSelected={this.state.starsSelected}
                           starsPreSelected={this.state.starsPreSelected}
                           onRate={(rate) => this.change({starsSelected: rate})}
                           onRateOut={() => this.change({starsPreSelected: 0})}
                           onPreRate={(preRate) => this.change({starsPreSelected: preRate})}/>
            </div>
        )
    }
}

export default App;