import React from 'react'

const App = () => {
  function anotherfunmtd(){
    console.log("this is another function mtd");
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='  m-6 border-3 p-4 font-bold text-3xl rounded-4xl'>Hello from functions</h1>
      <button className='btn' onClick={function(){
        console.log("Hello");
      }}>Click me </button>
      <button className='btn' onMouseEnter={anotherfunmtd}>Click me 2</button>
    </div>
  )
}

export default App