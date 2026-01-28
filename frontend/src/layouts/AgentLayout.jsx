import { Outlet } from "react-router-dom";
import AgentSidebar from "../components/AgentSidebar";

export default function AgentLayout(){
    return (
        <div className="flex">
            <AgentSidebar />
            <div className="flex-1 p-6">
                <Outlet/>
            </div>
        </div>
    );
}
 