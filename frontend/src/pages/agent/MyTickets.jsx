import { useEffect, useState } from "react"
import { getMyTicketsAgenten } from "../../services/Tickets";
const MyTicketsAgent =()=> {
    const [data,setData]=useState([])

    const getdata =async()=>{
        try{

            const res=await getMyTicketsAgenten();

            let ListTeckets =[];

            if(res?.data){
                if(Array.isArray(res.data)){
                    ListTeckets=res.data
                }else if(res.data.tickets && Array.isArray(res.data.tickets)){
                    ListTeckets=res.data.tickets
                }
            }
            setData(ListTeckets)
        }catch(error){
            console.error("error in get ticket")
            setData([])
        }
    };
    useEffect(()=>{
        getdata()
    },[])

    return(
        <>
            <h1>My Tickets </h1>
            <div >
            <table class='min-w-full table table-striped border border-gray-300'>
            <thead>
                <tr class='bg-gray-50'>
                    <th class="p-4 text-left text-sm font-semibold">title</th>
                    <th class="p-4 text-left text-sm font-semibold">description</th>
                    <th class="p-4 text-left text-sm font-semibold">client</th>
                    <th class="p-4 text-left text-sm font-semibold">client email</th>
                    <th class="p-4 text-left text-sm font-semibold">status</th>
                </tr>
            </thead>
            <tbody>
            
          {Array.isArray(data) && data.map((r) => (
            <tr class="odd:bg-white even:bg-gray-50" key={r._id}>
                <td class="p-4 text-sm">{r.title}</td>
                <td class="p-4 text-sm">{r.description}</td>
                <td class="p-4 text-sm">{r.client.name}</td>
                <td class="p-4 text-sm">{r.client.email}</td>
                <td class="p-4 text-sm">{r.status}</td>
            </tr>
            ))}
            
        </tbody>
        </table>
        </div>
        
        </>
    )
}
export default MyTicketsAgent