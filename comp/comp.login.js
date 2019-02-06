class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    };

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    };

    render() {
        return (<div>
            {this.state.isLoggedIn ?
                (<React.Fragment>
                    <LogoutButton onClick={this.handleLogoutClick}/>
                    <Timer/>
                </React.Fragment>) :
                (<LoginButton onClick={this.handleLoginClick}/>)
            }
        </div>);
    }
}

class LoginButton extends React.Component {
    render() {
        return (<button onClick={this.props.onClick}>Login</button>);
    }
}

class LogoutButton extends React.Component {
    render() {
        return (<button onClick={this.props.onClick}>Logout</button>);
    }
}
