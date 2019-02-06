class TemperatureConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }

    onCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature: temperature});
    };

    onFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature: temperature});
    };

    static convert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    static toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    static toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    render() {
        const c = this.state.scale === 'c' ? this.state.temperature : TemperatureConverter.convert(this.state.temperature, TemperatureConverter.toCelsius);
        const f = this.state.scale === 'f' ? this.state.temperature : TemperatureConverter.convert(this.state.temperature, TemperatureConverter.toFahrenheit);
        return (
            <div>
                <TemperatureInput scale="c" temperature={c} onTemperatureChange={this.onCelsiusChange}/>
                <TemperatureInput scale="f" temperature={f} onTemperatureChange={this.onFahrenheitChange}/>
            </div>
        );
    }
}

class TemperatureInput extends React.Component {
    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    };

    render() {
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}
