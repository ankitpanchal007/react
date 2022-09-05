import { useNavigate } from "react-router-dom";
import Favoritegame from "../SetState";
import Example from "../count";
import Timer from "../setEffect";
function Home()
{ 
    let navigate=useNavigate();
    return(
       
        <>
        {/* <h1>This is Home page</h1>
        <button onClick={()=>{navigate("/about")}}>About page</button>
        {/* <Favoritegame/> */}
        {/* <Example/>
        <Favoritegame/>
        <Timer/>  */}
        </>
    )
}
export default Home