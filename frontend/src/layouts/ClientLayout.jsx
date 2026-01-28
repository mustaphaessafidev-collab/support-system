import { Outlet } from "react-router-dom";
import ClientSidebar from "../components/ClientSdebar";

export default function ClientLayout(){
    return(
        <div className="flex">
            <ClientSidebar />
             <div className="flex-1 p-6">
             <Outlet />
            </div>
        </div>
    )
}