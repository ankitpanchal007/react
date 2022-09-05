import React from "react"
import Fun1 from "../New"
import App1 from "../app1"
import Cls from "../cls"
import Timeout from "../timeout"
import Prop from "../prop"
import Greet from "../MultiProp"
import { useNavigate } from "react-router-dom"
// class About extends React.Component {
function About() {
    let navigate = useNavigate();
    return (
        <>
            <h1>This is About page</h1>
                <h1 style={{
                    color: 'red', backgroundColor: "lightblue", padding: "15px",
                    fontFamily: "Sans-Serif"
                }}>this is app</h1>
                {/* <Fun name ='sara'/> */}
            {/* <Fun1 />
                <App1 />
                <Cls />
                <Timeout /> */}
            /* <Prop name='ankit' />
                <Greet greet='welcoming' who='you' /> 
            <App1 />


            <button onClick={() => { navigate("/") }}>Home page</button>
        </>
    )
}

export default About