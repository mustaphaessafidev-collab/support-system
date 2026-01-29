


import React, { useState } from 'react';
import { addAgent } from '../../services/Admin';
const AddAgents = () => {

    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    const [message,setMessage]=useState()
    
    const handchage=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const Submit=async(e)=>{
        e.preventDefault();

        try{
            console.log('add agent is good')
            await addAgent(data)
            setMessage('agentr is good new')

        }catch (e){
            setMessage('agent in not add error ')
        }
    }

  return(
    <>

    {message}
    <h1>add Agent </h1>
    <form onSubmit={Submit}>
        
            <div>
                <label>First name</label>
                <input type="text" name='name' value={data.name} onChange={handchage} id="first_name" className="w-full mb-4 px-4 py-3 border"   required />
            </div>

        <div class="mb-6">
            <label >Email address</label>
            <input type="email" id="email" name='email' value={data.email} onChange={handchage} className="w-full mb-4 px-4 py-3 border"  required />
        </div> 

        <div class="mb-6">
            <label for="password" >Password</label>
            <input type="password" id="password" name='password' value={data.password} onChange={handchage} className="w-full mb-4 px-4 py-3 border" required />
        </div> 



        <input type="submit" value="submit" />


         
        
        
    </form>

    </>
  )
};
export default AddAgents;