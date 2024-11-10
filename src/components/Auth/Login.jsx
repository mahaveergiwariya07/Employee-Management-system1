import React, { useState } from 'react'

function Login({handleLogin}) {
         const [email, setEmail] = useState('')
         const [password, setPassword] = useState('')



       const submitHandler = (e)=>{
           e.preventDefault()
           handleLogin(email, password)

           setEmail("")
           setPassword("")
       }





  return (
   <div className='flex h-screen w-screen  items-center justify-center'>
       <div className='border-2 rounded-xl border-emerald-600 p-20'>
             <form onSubmit={(e)=>{
                 submitHandler(e)
             }} className='flex flex-col items-center justify-center'>
               <input value={email} onChange={(e)=>{setEmail(e.target.value)}}       required className='text-white border-2 border-emerald-600 rounded-full py-4 px-5 text-black text-xl outline-none bg-transparent'    type="email" placeholder='Enter your email' />
               <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='text-white border-2 border-emerald-600 rounded-full mt-3 py-4 px-5 text-black text-xl outline-none bg-transparent' type="password" placeholder='Enter your password' />
               <button className='text-white bg-emerald-600 rounded-full mt-5 py-4 px-5 text-black text-xl outline-none w-full' >Log in</button>
             </form>
       </div>

   </div>
  )
}

export default Login