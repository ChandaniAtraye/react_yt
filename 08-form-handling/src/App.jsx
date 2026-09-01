import React, { useState } from 'react'

//two way binding
const App = () => {
  const [name, setName] = useState("")
  const btnClicked = (e)=>{
    e.preventDefault()
    console.log("form Submitted by",name);
    setName('')

  }
  return (
    <div>
     <form onSubmit={btnClicked}>
       <h1>Form Handling</h1>
       <input type='text'
        placeholder='Enter Your name'
       value={name} 
       onChange={(e)=>{
        setName(e.target.value);
       }}
       />
       <button>Submit</button>
     </form>
    </div>
  )
}

export default App