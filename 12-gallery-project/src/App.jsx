import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {

  const [apidata, setApidata] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setApidata(response.data);

  }

  let printData = <h3 className='text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h3>

  if(apidata.length>0){
    printData = apidata.map(function(elem,idx){
      return <div key={idx}>
           <Card elem={elem}/>
          </div>
    })
  }

  useEffect(function(){
    getData()
  },[index])
 
  
  return (
    <div className=' h-screen overflow-auto p-5 bg-black text-white'>
      <div className=" flex h-[84%]  flex-wrap justify-center items-center gap-4 p-2 ">
        {printData}
      </div>
    
      <div className= ' flex gap-6 p-2 mt-4 justify-center items-center'>
        
        <button style={{opacity:index==1?0.5:1}} onClick={function(){
          
          if(index>1){
            setIndex(index-1);
            setApidata([])
          }
        }} className='bg-amber-200 text-black px-3 py-1 rounded-sm font-medium text-[18px] active:scale-95'>Prev</button>
          
        <h4 className='text-xl'>Page {index}</h4>

        <button onClick={function(){
          setApidata([])
          setIndex(index+1);
           
        }} className='bg-amber-200 text-black px-3 py-1 rounded-sm font-medium text-[18px] active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App