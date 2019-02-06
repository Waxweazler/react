class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <h2>LoginControl</h2>
                    <LoginControl/>
                </section>
                <section>
                    <h2>ButtonCounter</h2>
                    <ButtonCounter step={10}/>
                </section>
                <section>
                    <h2>TemperatureConverter</h2>
                    <TemperatureConverter/>
                </section>
            </React.Fragment>
        );
    }
}
