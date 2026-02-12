import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { FaRegEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import axiosInstance from '../Confiq/Axios';
import { useLoader } from '../context/LoaderContext';
import LeadModal from '../Component/LeadModel';


const Leads = () => {
  const {showLoader,hideLoader}=useLoader()
  useEffect(()=>{
        getLeads()   
  },[])
  const getLeads=async()=>{
    try {
      showLoader('fetching data..')
      const response=await axiosInstance('/getleads')
      setLeads(response?.data?.leads)
      console.log(response)
    } catch (error) {
      console.log(error)
    }finally{
             hideLoader()
    }
    
  }

  const [selectedLead, setSelectedLead] = useState(null);

      const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [leads,setLeads]=useState([])



  const filteredLeads = leads?.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase())
  );

  const badgeStyle = (source) => {
    switch (source) {
      case "Website":
        return "bg-blue-100 text-blue-600";
      case "Referral":
        return "bg-green-100 text-green-600";
      case "Instagram":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Leads</h1>
          <p className="text-gray-500 text-sm">
            {leads.length} total leads
          </p>
        </div>
        <div
        className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            <span><FaPlus/></span>
              <button
         onClick={() => navigate("/addlead")}
          
        >
          Add Lead
        </button>

        </div>

      
      </div>

      {/* Search */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border bg-white/80 border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
<div className="bg-white shadow-md rounded-xl overflow-hidden">

  {/* Mobile scroll wrapper */}
  <div className="overflow-x-auto">
    <table className="min-w-[800px] w-full text-sm">
      
      <thead className="bg-gray-50 text-gray-600">
        <tr>
          <th className="p-4 text-left">Name</th>
          <th className="p-4 text-left">Email</th>
          <th className="p-4 text-left">Source</th>
          <th className="p-4 text-left">Created</th>
          <th className="p-4 text-right">Action</th>
        </tr>
      </thead>

      <tbody>
        {filteredLeads.map((lead) => (
          <tr
            key={lead.id}
            className="border-t border-slate-200 hover:bg-gray-50 transition"
          >
            <td className="p-4 font-medium text-gray-800">{lead.name}</td>
            <td className="p-4 text-gray-600">{lead.email}</td>

            <td className="p-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyle(lead.source)}`}>
                {lead.source}
              </span>
            </td>

            <td className="p-4 text-gray-600">
              {lead.createdAt.split("T")[0]}
            </td>

            <td className="p-4 text-right">
              <button
                onClick={() => setSelectedLead(lead)}
                className="text-blue-600 hover:bg-slate-200 rounded-lg px-2 py-1 flex items-center gap-1 font-medium"
              >
                <FaRegEye />
                View
              </button>
            </td>
          </tr>
        ))}

        {filteredLeads.length === 0 && (
          <tr>
            <td colSpan="5" className="p-6 text-center text-gray-500">
              No leads found
            </td>
          </tr>
        )}
      </tbody>

    </table>
  </div>
</div>

      <LeadModal 
  lead={selectedLead} 
  onClose={() => setSelectedLead(null)} 
/>

    </div>
  );
}

export default Leads
