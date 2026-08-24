import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Chandani Atraye" age='24' img='https://plus.unsplash.com/premium_photo-1764519699671-171dbb706a54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'/>
      <Card user="Aman Singh" age='26' img='https://images.unsplash.com/photo-1783923762609-8d8eff11f6b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user="Shardha" age='21' img='https://images.unsplash.com/photo-1774477178005-bff823e43be8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App