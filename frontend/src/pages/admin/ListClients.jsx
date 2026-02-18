import React, { useEffect, useState } from 'react';
import { deleteClients, getClient, manageUsers } from '../../services/Admin';

const ListCliten = () => {
    const [data,setData]=useState([]);


    const fetAgent =async()=>{
        try{

            const res=await getClient();

            let ListAgent =[];

            if(res?.data){
                 if(Array.isArray(res.data)){
                    ListAgent=res.data

                 }else if(res.data.client &&  Array.isArray(res.data.client) ){
                    ListAgent =res.data.client
                }
            }
            setData(ListAgent);

        }catch (e){
            console.error("Error fetching clients:", e);
            setData([])
        }
    };

    useEffect(()=>{
        fetAgent();
    },[])

    const deletea=async(id,name)=>{
        if(!window.confirm(`are you sure to delete ${name}`)) return;

        try{
            await deleteClients(id)
            fetAgent();
            alert(`cliter ${name} is delete `)
        }catch(e){
            alert('eroor is delete cliter')
        }
    }

    const ManageUsers=async(id,name)=>{
        if(!window.confirm(`are you sure to blocked ${name}`)) return;

        try{
            await manageUsers(id)
            fetAgent();
            alert(`cliter ${name} is blocked `)
        }catch(e){
            alert('eroor is not blocked cliter')
        }
    }


    

 return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">List Client</h1>
          <p className="mt-2 text-gray-600">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-0 py-4 text-left font-semibold text-gray-900 text-sm">Name</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">Email</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">Role</th>
              <th className="px-4 py-4 text-left font-semibold text-gray-900 text-sm">Status</th>
              <th className="px-4 py-4 text-right font-semibold text-gray-900 text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-0 py-6 text-gray-900 font-medium">{user.name}</td>
                <td className="px-4 py-6 text-gray-600">{user.email}</td>
                <td className="px-4 py-6 text-gray-600">{user.role}</td>
                <td className="px-4 py-6 text-gray-600">{user.status}</td>
                <td className="px-4 py-6 text-right">
                  <button
                    onClick={() => deletea(user._id,user.name)}
                    className="text-red-600 hover:text-blue-800 mr-3 font-medium"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => ManageUsers(user._id,user.name)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                   {user.status === "active" ? "blocked" : "active"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListCliten;
