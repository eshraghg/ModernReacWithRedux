import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
state = {
            lat: null,
            errorMassage: ''
        }

    
        
    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMassage: err.message})
        )}

    render () {
        if (this.state.errorMassage && !this.state.lat) {
                return <div> Error: {this.state.errorMassage} </div>
        }

        if (!this.state.errorMassage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request..." />
        
    }
};

ReactDOM.render(
    <App />, document.querySelector('#root')
)