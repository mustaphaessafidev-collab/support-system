


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
    {message?
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">{message}</p>
    </div>
     </div>
    </div>
    :""}
    <h1>add Agent </h1>
    <form onSubmit={Submit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading">First name</label>
            <input type="text" name='name' value={data.name} onChange={handchage} id="first_name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
            </div>

            <div>
            <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Email</label>
            <input type="email" id="email" name='email' value={data.email} onChange={handchage}  class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
            </div>
            <div >
            <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Password</label>
            <input type="password" id="password" name='password' value={data.password} onChange={handchage} class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
            </div> 
            <div >
            <label for="confirm_password" class="block mb-2.5 text-sm font-medium text-heading">Confirm password</label>
            <input type="password" id="confirm_password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
            </div> 


        


            <input type="submit" value="submit"  class="btn btn-blue"/>


        </div>
        
        
    </form>

    </>
  )
};
export default AddAgents;