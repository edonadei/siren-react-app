import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {

  }

  checkForAuthentication = () => {
    console.log("hello from check for authentication")
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          // method: this.method, etc...
        }}
      >
        {this.props.children};
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
