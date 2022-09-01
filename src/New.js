// function Fun()
// {
// return <h1>'ankit'</h1>
// }

// import { click } from "@testing-library/user-event/dist/click";

function Fun1(props) {
  return (
    <form>
      <h5 > {new Date().toLocaleString()}</h5>
      <label>enter name
        <input 
          onDoubleClick={e => {
            alert(' enter name ');
          }}
          placeholder="onFocus is triggered when you click this input."
        />
      </label>
    </form>
  )
}
export default Fun1;

// function Fun(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// export default Fun

