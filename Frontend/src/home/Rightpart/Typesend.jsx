import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import useSendMessage from '../../context/useSendMessage.js'

const TypeSend = () => {
  const [message, setMessage] = useState("")
  const {loading,sendMessages} = useSendMessage();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await sendMessages(message)
    setMessage("")
  }
  console.log(message.message)

  return (
<form onSubmit={handleSubmit}>
<div className='flex flex-direction-row p-2'>
      <div className=' w-full justify-center items-center ml-2'> 
         <input
        type="text"
        placeholder="Type here"
        value ={message}
        onChange={(e) => setMessage(e.target.value)}  
        className="input  w-full" />
    </div>
    <button type='submit'><IoMdSend className=' m-2 text-3xl hover:bg-gray-700 duration-300 cursor-pointer rounded-full hover:px-2' /></button>
    
  </div>
</form>
  )
}

export default TypeSend