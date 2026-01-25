import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { regester } from "../../services/Api";
import AuthLayout from "../../layouts/AuthLayout";

function Regester(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(true)
    const [message,setMessage]=useState("")

    const submit =async(e)=>{
        e.preventDefault();
        try{
            const res =await regester({name,email,password})

            setMessage(`Welcom ${name}`)
            
        }catch(e){
            setError(false)
            setMessage("error in regester")
        }
        

    } 

    return(
        
        <AuthLayout>
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Create Account
        </h2>

        

        <p className="text-gray-500 mb-6">
          Create a new account to get started with Frello.
        </p>

        <p 
        className={`mb-2 text-1xl
            ${
                error?"text-green-700":"text-red-700"
            }
            `}
        >
            {message}
        </p>
        <form onSubmit={submit}>
        <input
          type="name"
          placeholder="Full Name"
          value={name}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=>setName(e.target.value)}
         
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Log In
        </button>

        </form>
         

         <p className="text-sm text-center mt-4 text-gray-600">
          Already Have An Account?{" "}
          
          <span className="text-indigo-600 font-medium cursor-pointer">
            <Link to="/login">
            Sign In.
            </Link>
          </span>
           
        </p>
        
      </div>
        </AuthLayout>
       
    )
}
export default Regester;
