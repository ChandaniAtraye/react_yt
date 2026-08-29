import React from 'react'
import Section from './components/Section'

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-contain'style={{backgroundImage:"url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')"}}>
     <Section/>
    </div>
  )
}

export default App
