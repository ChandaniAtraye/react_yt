import React from 'react'

const App = () => {

      const user = [
        {
        name:'Chandani',
        age:24,
        city:'pune'
      },{
        name:'Vaibhav',
        age:25,
        city:'Mumbai'
      }
    
  ]

  const data = localStorage.setItem('profile',JSON.stringify(user))
  

  const data1 = JSON.parse(localStorage.getItem('profile'));
  console.log(data1);
  data1.splice(0,1) // to remove data from an array- splice(index,noofelement)
 
  // localStorage.removeItem('profile');
  // localStorage.clear();  // to clear all data

  return (
    <div>
      <h1>LocalStorage</h1>
    </div>
  )
}

export default App