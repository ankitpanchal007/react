import React from "react";

class Prop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h3> hello, this is {this.props.name}</h3>
                <h2>Thank you</h2>
                
            </>
        )
    }
}


export default Prop;