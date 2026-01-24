import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { regester } from "../../services/Api";


function Regester(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("")

    const submit =async(e)=>{
        e.preventDefault();
        try{
            const res =await regester({name,email,password})
            setError(" regester is good now ")
            
        }catch(e){
        setError("error in regester")
        }
        

    } 

    return(
        <>
        <form onSubmit={submit}>
            <h1>login Regsiter</h1>
            <h5>name</h5>
            <input type="name" value={name}  id="name" 
            onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <h5>email</h5>
            <input type="email" value={email} id="email" 
            onChange={(e)=>setEmail(e.target.value)}
            
            />
            <br />
            <h5>password</h5>
            <input type="password" value={password} id="password"
            onChange={(e)=>setPassword(e.target.value)}
             />
            <br />
            <button type="submit">Submit</button>


        </form>
        <p>{error}</p>
        <Link to="/login"> you have acout </Link>
        </>
    )
}
export default Regester;