import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
import { SquarePen } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  const [task, setTask] = useState(()=>{
    return JSON.parse(localStorage.getItem("task")) || [] });

    useEffect(()=>{
      localStorage.setItem("task",JSON.stringify(task));
    },[task]);

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copydelete = [...task];

    copydelete.splice(idx,1)

    setTask(copydelete)
  }

  // const editNote = (idx)=>{
  //   const copyedit = [...task]

  //   copyedit[idx] = task;

  //   setTask(copyedit);
  // }


  return (
    <div className='h-screen lg:flex overflow-auto bg-black text-white'>
      <form onSubmit={submitHandler} className='flex flex-col lg:w-1/2 gap-3 p-10'>
        <h1 className='font-bold text-2xl '>Add Notes</h1>

        {/* first input */}
        <input type='text' required className='px-3 py-4 mt-2 border-2 rounded-2xl font-medium text-[16px] outline-none'
          placeholder='Enter Task Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* details of input */}
        <textarea type='text' required className='px-3 py-4  h-32 border-2 rounded-2xl font-medium text-[16px] outline-none'
          placeholder='Enter Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        {/* button */}
        <button className='px-3 py-3 border-2 active:scale-95 rounded-2xl font-medium text-[16px] outline-none'>Add Task</button>
      </form>

       {/* notes card  section*/}
      <div className=" lg:w-1/2 lg:border-l-2  overflow-auto  p-10">
        <h1 className='font-bold text-2xl '>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 justify-start items-center mt-5'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" card pt-6 relative w-full sm:w-50 h-50   p-4 mt-2 rounded-2xl  text-black bg-cover bg-bottom  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlM1LNDP-7nzJ8iIj91Ysvni7TOYk3JcQIHOk1LWJK9Q&s=10')]">

              <h2 onClick={()=>{
                deleteNote(idx)
              }} className='absolute top-1.5 right-1 hover:text-red-600  active:scale-95'><X size={20} /></h2>
               <h2 onClick={()=>{
                editNote(idx)
              }} className='absolute top-2 right-7  active:scale-95 '><SquarePen size={17} strokeWidth={1.8} /></h2>
              <h3 className='leading-tight p-1 font-medium text-[18px] font-serif'>{elem.title}</h3>
              <p className='mt-1 p-1 leading-tight text-[16px] text-gray-500 font-medium' >{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App