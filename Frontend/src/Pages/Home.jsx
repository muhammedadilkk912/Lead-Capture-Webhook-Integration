import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import axiosInstance from "../Confiq/Axios";
import { useLoader } from "../context/LoaderContext";

const Home = () => {
  const {showLoader,hideLoader}=useLoader()
  const navigate = useNavigate();
 useEffect(()=>{
    fectHomeData()

  },[])
    

const fectHomeData=async()=>{
try {
  showLoader('fetching data...')
  const response=await axiosInstance.get('/gethomedata')
  setRecentLeads(response?.data?.recentLeads)
  console.log(response)
} catch (error) {
  console.log("error in home data",error)
}finally{
  hideLoader()
}



  }
  const [recentLeads,setRecentLeads]=useState([])
  // const recentLeads = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john@example.com",
  //     source: "Website",
  //     date: "2026-02-11",
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Smith",
  //     email: "sarah@example.com",
  //     source: "Instagram",
  //     date: "2026-02-10",
  //   },
  // ];
  return (
    <div className="">
      {/* Hero Section */}
      <section className=" rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Capture and Manage Leads Easily
        </h1>
        <p className="mt-3 font-semibold text-gray-600 max-w-2xl mx-auto">
          Collect new leads, track their source, and manage everything from a
          clean and simple dashboard.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <div className="flex bg-blue-500 gap-3 justify-center items-center hover:bg-blue-300  text-white  px-6 py-2  rounded-lg font-semibold transition">
            <span><FaPlus /></span>
            <button
              onClick={() => navigate("/addlead")}
              className="  "
            >
              Add Lead
            </button>
          </div>
          <div className="flex border  border-gray-200 bg-white/45 gap-3 justify-center items-center text-black font-semibold  px-6 py-2  rounded-lg hover:bg-gray-100 transition">
            <button
               onClick={() => navigate("/leads")}
              className=""
            >
              View Leads
            </button>
            <span>
              <IoArrowForward />
            </span>
          </div>
        </div>
      </section>

      {/* Recent Leads Section */}
      <section className="  rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Leads</h2>
         
         <div
              className="text-blue-600 flex items-center justify-center  gap-2 px-2 py-1 hover:bg-gray-300 rounded-lg hover:text-black text-sm font-medium"

         >
            <button
            // onClick={() => navigate("/leads")}
          >
            View All
          </button>
          <span>
             <IoArrowForward />
          </span>

         </div>
          
        </div>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg bg-white border-collapse">
            <thead>
              <tr className=" text-left text-gray-600  font-medium ">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Source</th>
                <th className="p-3"> Date</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-t border-gray-300 hover:bg-gray-50 text-sm">
                  <td className="p-3 font-medium text-black">{lead.name}</td>
                  <td className="p-3 text-gray-600">{lead.email}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                      {lead.source}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">{new Date(lead.createdAt).toLocaleString().split(',')[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
