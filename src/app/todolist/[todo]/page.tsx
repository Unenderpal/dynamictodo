import React from 'react'

const todo = async({params}:{params:{todo: string}}) => {
    const {todo}=await params
  return (
    <div className='bg-gray-500 text-white font-bold'>
        Task:{todo}
    </div>
  )
}

export default todo