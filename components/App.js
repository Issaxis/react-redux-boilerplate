import React from 'react';
import '../styles/App.scss';
import { connect } from 'react-redux';

import { testAction } from '../actions/globals';

@connect(store => {
    return {
        test: store.globals.test
    };
})
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        }, () => {
            this.props.dispatch(testAction(this.state.value));
        });
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.handleChange} />
                <h1>{this.props.test}</h1>
            </div>
        );
    }
}

export default App;
