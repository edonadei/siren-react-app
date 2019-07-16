import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuthenticated: false
  };

  checkForAuthentication = (id, password) => {
    let idToCompare = id.ID;
    let passwordToCompare = password.password;
    if (idToCompare === "admin" && passwordToCompare === "admin") {
      this.setState(() => {
        return { isAuthenticated: true };
      })
    }
  }

  disconnect = () => {
    this.setState(() => {
      return { isAuthenticated: false };
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          // method: this.method, etc...
          checkForAuthentication: this.checkForAuthentication,
          disconnect: this.disconnect
        }}
      >
        {this.props.children};
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
