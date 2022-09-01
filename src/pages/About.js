import React from "react"
import Fun1 from "../New"
import App1 from "../app1"
import Cls from "../cls"
import Timeout from "../timeout"
import Prop from "../prop"
import Greet from "../MultiProp"
class About extends React.Component {
    render() {
        return (
            <>
                <h1>this is About page</h1>
                <h1 style={{
                    color: 'red', backgroundColor: "lightblue", padding: "15px",
                    fontFamily: "Sans-Serif"
                }}>this is app</h1>
                {/* <Fun name ='sraa'/> */}
                {/* <Fun1 />
                <App1 />
                <Cls />
                <Timeout /> */}
                <Prop name='ankit' />
                <Greet greet='welcoming' who='you' />
            </>
        )
    }
}
export default About