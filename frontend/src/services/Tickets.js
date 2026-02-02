import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api",
})

API.interceptors.request.use((req)=>{
    const token =localStorage.getItem("token")

    if(token){
        req.headers.Authorization=`Bearer ${token}`;
    }
    return req
})

export const addtickets=(data)=> API.post("/tickets/addtickets",data)
export const gettickts = () => API.get("/tickets");