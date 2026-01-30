import React, { useEffect, useState } from 'react';
import { getAgent } from '../../services/Admin';

const AgentList = () => {
    const [data,setData]=useState([]);


    const fetAgent =async()=>{
        try{

            const res=await getAgent();

            let ListAgent =[];

            if(res?.data){
                 if(Array.isArray(res.data)){
                    ListAgent=res.data

                 }else if(res.data.agent &&  Array.isArray(res.data.agent) ){
                    ListAgent =res.data.agent
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
    

  return (
    <>
    <h1>List Agent </h1>
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
            </tr>
            ))}
            
        </tbody>
    </table>
    </div>

    </>
  )
};
export default AgentList;