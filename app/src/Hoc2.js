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
            // Simulate authentication logic (e.g., checking if user is logged in)
            const isAuthenticated = this.checkAuthentication(); // Call a function to check authentication
            this.setState({ isAuthenticated });
        }

        // Function to check authentication (example)
        checkAuthentication() {
            // Simulate checking if the user is authenticated
            // For demonstration purposes, let's assume the user is authenticated if isLoggedIn is true
            const isLoggedIn = false; // or false depending on your logic
            return isLoggedIn;
        }

        render() {
            // If user is authenticated, render the WrappedComponent with its original props
            // Otherwise, render a message indicating the user needs to log in
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
