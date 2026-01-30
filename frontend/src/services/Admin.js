import axios from "axios";
const API =axios.create({
    baseURL:"http://localhost:5000/api",
})
API.interceptors.request.use((req)=>{
    const token =localStorage.getItem("token")

    if(token){
        req.headers.Authorization=`Bearer ${token}`;
    }
    return req
})

export const addAgent=(data)=> API.post("/addAgents/addAgent",data)
export const getAgent=(data)=> API.get("/addAgents/getAgent",data)