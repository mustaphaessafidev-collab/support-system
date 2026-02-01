import React, { useEffect, useState } from 'react';
import { deleteClients, getClient } from '../../services/Admin';

const ListCliten = () => {
    const [data,setData]=useState([]);


    const fetAgent =async()=>{
        try{

            const res=await getClient();

            let ListAgent =[];

            if(res?.data){
                 if(Array.isArray(res.data)){
                    ListAgent=res.data

                 }else if(res.data.client &&  Array.isArray(res.data.client) ){
                    ListAgent =res.data.client
                }
            }
            setData(ListAgent);

        }catch (e){
            console.error("Error fetching clients:", e);
            setData([])
        }
    };

    useEffect(()=>{
        fetAgent();
    },[])

    const deletea=async(id,name)=>{
        if(!window.confirm(`are you sure to delete ${name}`)) return;

        try{
            await deleteClients(id)
            fetAgent();
            alert('cliter is delete ')
        }catch(e){
            alert('eroor is delete cliter')
        }
    }
    

  return (
    <>
    <h1>List getClient </h1>
    <div class="">
    <table class='min-w-full table table-striped border border-gray-300'>
        <thead>
            <tr class='bg-gray-50'>
                <th class="p-4 text-left text-sm font-semibold">Name</th>
                <th class="p-4 text-left text-sm font-semibold">Email</th>
                <th class="p-4 text-left text-sm font-semibold">Role</th>
                <th class="p-4 text-left text-sm font-semibold">status</th>
            </tr>
        </thead>
        <tbody>
            
          {Array.isArray(data) && data.map((r) => (
            <tr class="odd:bg-white even:bg-gray-50" key={r._id}>
                <td class="p-4 text-sm">{r.name}</td>
                <td class="p-4 text-sm">{r.email}</td>
                <td class="p-4 text-sm">{r.role}</td>
                <td class="p-4 text-sm">{r.status}</td>
                <td class="p-4 text-sm"><button class="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm" onClick={()=>deletea(r._id,r.name)}>Delete </button></td>
            </tr>
            ))}
            
        </tbody>
    </table>
    </div>

    </>
  )
};
export default ListCliten;