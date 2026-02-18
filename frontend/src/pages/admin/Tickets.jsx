import { useEffect, useState } from "react"
import { getAllTickes } from "../../services/Tickets";

function TicketsAdmin(){

    const [data,setData]=useState([]);

    const gettickets=async()=>{
        try{
            let List =[];
            const res=await getAllTickes();
            if(res?.data){
                if(Array.isArray(res.data)){
                    List=res.data
                }else if(res.data.tickets && Array.isArray(res.data.tickets)){
                    List=res.data.tickets
                }
            }
            console.log(data)
            setData(List)
        }catch(error){
            console.error("eroor in get all tickets")
            setData([])
        }
    }
    useEffect(()=>{
        gettickets()
    },[])
   return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">List Tickets</h1>
          <p className="mt-2 text-gray-600">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-0 py-4 text-left font-semibold text-gray-900 text-sm">title</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">description</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">agent</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-0 py-6 text-gray-900 font-medium">{user.title}</td>
                <td className="px-4 py-6 text-gray-600">{user.description}</td>
                <td className="px-4 py-6 text-gray-600">{user.agent ? user.agent : 'Not assigned'}</td>
                <td className="px-4 py-6 text-gray-600">{user.status}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TicketsAdmin
