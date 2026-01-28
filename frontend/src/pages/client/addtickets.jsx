import { useState } from "react";
import { addtickets } from "../../services/Tickets";



function AddTickets (){
    const [data,setData]=useState({
        title:'',
        description:''
    })
    const [message,setMessage]=useState()
    const [error,setError]=useState(true)

    const handchage=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }


    const Submit =async(e)=>{
        e.preventDefault();

        try{
            console.log('re')
             await addtickets(data)
            setMessage('ticket is good ')
        }catch (e){
            setMessage('ticket is not good ')
        }
    }


    return(
        <>

        {message}
        <form onSubmit={Submit}>
        <h1>hay this is page AddTickets</h1>
        <h2>Title</h2>
        <input           className="w-full mb-4 px-4 py-3 border"
        name="title"
         type="text" required id="title" value={data.title} onChange={handchage} />
        <br />
        <h2>Description</h2>
        <input           className="w-full mb-4 px-4 py-3 border"
        name="description"
         type="text" required id="description" value={data.description} onChange={handchage} />
        <button type="submit">Add ticket</button>
        </form>
        </>
    )
}

export default AddTickets;