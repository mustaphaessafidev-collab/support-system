import React, { useEffect, useState } from 'react';
import { gettickts } from '../../services/Tickets';
const MyTickets = () => {
    const [tickets,setTickets]=useState([])

    const getMyTickets =async()=>{
        try{

            const res=await gettickts()

            let ListTickets =[]
            if(res?.data){
                if(Array.isArray(res.data)){
                    ListTickets =res.data
                }else if(res.data.tickets && Array.isArray(res.data.tickets)){
                    ListTickets =res.data.tickets
                }
            }
            setTickets(ListTickets);

        }catch(e){
            console.log("error in ticket client ",e)
            setTickets([])
        }
    }

    useEffect(()=>{
        getMyTickets();
    },[])



  return (
    <>
    <h1>List My Tickets</h1>

        <table className="min-w-full table table-striped border border-gray-300">
  <thead>
    <tr className="bg-gray-50">
      <th className="p-4 text-left text-sm font-semibold">title</th>
      <th className="p-4 text-left text-sm font-semibold">description</th>
      <th className="p-4 text-left text-sm font-semibold">agent</th>
      <th className="p-4 text-left text-sm font-semibold">status</th>
    </tr>
  </thead>

        <tbody>
  {Array.isArray(tickets) && tickets.map((r) => (
    <tr className="odd:bg-white even:bg-gray-50" key={r._id}>
      <td className="p-4 text-sm">{r.title}</td>
      <td className="p-4 text-sm">{r.description}</td>
      <td className="p-4 text-sm">
        {r.agent ? r.agent : 'Not assigned'}
      </td>
      <td className="p-4 text-sm">{r.status}</td>
    </tr>
  ))}
</tbody>

        </table>
    </>
  );
};
export default MyTickets;