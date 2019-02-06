class ButtonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0, step: this.props.step || 1};
    }

    add = () => {
        this.setState({counter: this.state.counter + this.state.step});
    };

    reset = () => {
        this.setState({counter: 0});
    };

    updateStep = (e) => {
        this.setState({step: parseInt(e.target.value)});
    };

    render() {
        return (
            <React.Fragment>
                <input value={this.state.step} onChange={this.updateStep} type="text"/>
                <button onClick={this.add}>+</button>
                <button onClick={this.reset}>-</button>
                <span>Current count: {this.state.counter}</span>
            </React.Fragment>
        );
    }
}
