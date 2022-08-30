import { render } from "@testing-library/react"
import React from "react";

class Cls extends React.Component{
    state={work:[{11:'sunday', 12: 'monday',13:'tuesday'}]}

} 
render()
{
    const totalDays=this.state.work.length;
    return(
        <React.Fragment>
        <h4> we work {totalDays} in week</h4> 
    </React.Fragment>)
}
export default Cls;