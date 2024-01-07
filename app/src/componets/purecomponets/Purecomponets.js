



import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return (
      <div>
        <p>Pure Component</p>
        <p>Prop: {this.props.myProp}</p>
      </div>
    );
  }
}

export default MyPureComponent;
