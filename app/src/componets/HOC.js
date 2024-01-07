import React from 'react';

// Higher-Order Component
const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

// Component to be enhanced
class MyComponent extends React.Component {
  render() {
    return <div>This is my component.</div>;
  }
}

// Using the HOC to enhance MyComponent
const MyComponentWithLogger = withLogger(MyComponent);


