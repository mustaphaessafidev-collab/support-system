import { useState }  from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/Api";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("")
    // const navigate=useNavigate()

    const Submit = async(e)=>{
        e.preventDefault();

        try{

            const res = await login({email,password})

            localStorage.setItem("token",res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))

            setError('is good now')

        } catch(e){
            setError("login faild error fi login")
        }
    }


return(
    <>
    <form onSubmit={Submit}>
    <h1>page login </h1>
    <h5>email</h5>
    <input type="email" id="email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
     />
    <hr />
    <h5>password</h5>
    <input type="password"  id="password" value={password}
    onChange={(e)=>setPassword(e.target.value)}
     />

    <button type="submit">Submit </button>
    </form>
    <p>{error}</p>
    <Link to="/regester"> dont hava a caont </Link>
    </>
);
}
export default Login;