import { useState }  from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/Api";
import AuthLayout from "../../layouts/AuthLayout";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(true)
    const [message,setMessage]=useState("") 
    // const navigate=useNavigate()

    const Submit = async(e)=>{
        e.preventDefault();

        try{

            const res = await login({email,password})
            console.log('test')
            localStorage.setItem("token",res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))

            setMessage(`Welcom ${email}`)

        } catch(e){
          setError(false)
            setMessage("Email or password is good")
        }
    }


return(
  <AuthLayout>
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Welcome Back
        </h2>

        <p className="text-gray-500 mb-6">
          Enter your email and password
        </p>
        <p className={`text-1xl mb-2

        ${
          error?"text-green-700":"text-red-700"
        }
          
          
          `}>
            {message}
        </p>
        <form onSubmit={Submit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          id="password"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=>setPassword(e.target.value)}
        />
        
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Log In
        </button>
        </form>
       
         

         <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          
          <span className="text-indigo-600 font-medium cursor-pointer">
            <Link to="/register">
            Register Now.
            </Link>
          </span>
           
        </p>
        
      </div>
    </AuthLayout>

);
}
export default Login;