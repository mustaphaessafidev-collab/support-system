import { useEffect, useState } from "react"
import { getAllAgetTickets, TakingTicketsAgent } from "../../services/Tickets"
import { cache } from "react"


const AllTickets=()=>{

    const [data,setData]=useState([])

    const gettickts=async()=>{
        try{

            const res =await getAllAgetTickets()
            let  List=[]

            if(res?.data){
                if(Array.isArray(res.data)){
                    List =res.data
                }else if(res.data.tickets && Array.isArray(res.data.tickets)){
                    List=res.data.tickets
                }
                
            }
            console.log(List);
            setData(List)
        }catch(e){
            console.log("error in get agent ",e)
        }
    }
    const ticket=async(id)=>{
      if(!window.confirm("do yo want to take this ticket ")) return;

      try{
        await TakingTicketsAgent(id)
        gettickts()
        alert("ticket is ticke for you")
      }catch(e){
        alert("error in ticket ticket",e)
        
      }

    }

    useEffect(()=>{
       gettickts(); 
    },[])

    return(
        <>
        <h1>test page my tickets</h1>
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
  {Array.isArray(data) && data.map((r) => (
    <tr className="odd:bg-white even:bg-gray-50" key={r._id}>
      <td className="p-4 text-sm">{r.title}</td>
      <td className="p-4 text-sm">{r.description}</td>
      <td className="p-4 text-sm">
        {r.agent ? r.agent : 'Not assigned'}
      </td>
      <td className="p-4 text-sm">{r.status}</td>
      <td class="p-4 text-sm"><button class="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm" onClick={()=>ticket(r._id)}>ticket   </button></td>

    </tr>
  ))}
</tbody>

</table>
        
        
        </>
    )
}
export default AllTickets;