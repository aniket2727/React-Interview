

import React from "react";

const mainhoc=(WrappedComponent)=>{
    return class extends React.Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted.`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is unmounted.`);
        }

        render() {
            // Render the wrapped component with its original props
            return <WrappedComponent {...this.props} />;
        }
    }
}
const WrappedComponent=()=>{
    return(
        <div>
          <h1>this is componets</h1>
        </div>
    )
}

const Mycomponetswithlogging=mainhoc(WrappedComponent)
export default Mycomponetswithlogging;