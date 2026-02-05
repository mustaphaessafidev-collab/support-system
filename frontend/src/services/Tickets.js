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

export const addtickets=(data)=> API.post("/tickets/",data)

export const getMytickts = () => API.get("/tickets/my");

export const getAllTickes=() => API.get("/tickets/all");

export const getAllAgetTickets=()=> API.get("tickets/agent")