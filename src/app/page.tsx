"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [ip, setip] = useState("")
  const [todo, settodo] = useState([])
  console.log(todo)
  return (
    <div className='h-screen bg-gradient-to-br flex from-blue-200 to-white w-[100%] p-6 justify-center'>

      <div className='h-[90%] w-[90%] border-1  rounded-2xl bg-red-200 p-8 ' >
        <div className=' flex  items-start  justify-center gap-2'>

          <input type="text" placeholder='Add task' className='px-4 rounded-lg py-2 ' value={ip} onChange={(e) => setip(e.target.value)} />

          <button className='bg-black py-2 px-4 text-white rounded-lg font-semibold' onClick={() => {
            settodo([...todo, { "task": ip }])
            setip("")
          }}>
            Add todo
          </button>
        </div>
        <div className='flex items-center justify-center mt-5 gap-8 flex-col'>
          {todo.map((i, id) => (
            <Link key={id} href={`/todolist/${i.task}`}>
              <div   className='p-5 flex min-h-[50px]  text-xl text-white min-w-[200px]  bg-black font-semibold justify-center items-center '>

              {i.task}
            
            </div> </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page