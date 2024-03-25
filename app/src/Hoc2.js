import React, { Component } from 'react';

// Higher Order Component for Authentication
const withAuthentication = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isAuthenticated: false
            };
        }

        componentDidMount() {
          
            const isAuthenticated = this.checkAuthentication(); 
            this.setState({ isAuthenticated });
        }

        // Function to check authentication (example)
        checkAuthentication() {
         
            const isLoggedIn = false; // or false depending on your logic
            return isLoggedIn;
        }

        render() {
           
            return this.state.isAuthenticated ? <WrappedComponent {...this.props} /> : <p>Please log in to view this content.</p>;
        }
    };
};

// Sample Component
class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to My Component</h1>
                <p>This is a sample component.</p>
            </div>
        );
    }
}

// Wrap MyComponent with the HOC for authentication
const AuthenticatedComponent = withAuthentication(MyComponent);

export default AuthenticatedComponent;
