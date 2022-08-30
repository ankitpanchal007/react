// function Fun()
// {
// return <h1>'ankit'</h1>
// }

function Fun() {
    return (
        <form>
            <h5 > {new Date().toLocaleString()}</h5>
            <label>enter name
      <input
        onDoubleClick={e => {
          alert(' enter name ' );
        }}
           placeholder="onFocus is triggered when you click this input."
      />
      </label>
      </form>
    )
  }
  export default Fun