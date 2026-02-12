import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import axiosInstance from "../Confiq/Axios";
import { useLoader } from "../context/LoaderContext";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsFillMotherboardFill } from "react-icons/bs";

const Home = () => {
  const {showLoader,hideLoader}=useLoader()
  const [stats,setStats]=useState({})
  const navigate = useNavigate();
 useEffect(()=>{
    fectHomeData()

  },[])
    
  const icons=(icon)=>{
    console.log("ic-",icon)
    if(icon === 'website'){
      return <CiGlobe className="text-blue-500"/>
            
    }else if(icon == 'instagram'){
       return <FaInstagram className="text-rose-500"/>
    }else if(icon === 'referral'){
       return <GoPeople className="text-gray-500-500"/>
    }else{
       return <BsFillMotherboardFill className="text-green-500"/>
    }
  }

const fectHomeData=async()=>{
try {
  showLoader('fetching data...')
  const response=await axiosInstance.get('/gethomedata')
  setRecentLeads(response?.data?.recentLeads)
  setStats(response?.data?.stats)
  console.log(response)
} catch (error) {
  console.log("error in home data",error)
}finally{
  hideLoader()
}


console.log("status",status)
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
      <section className=" rounded-xl p-8 min-h-[40vh] flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Capture and Manage Leads Easily
        </h1>
        <p className="mt-3 font-semibold text-gray-600 max-w-2xl mx-auto">
          Collect new leads, track their source, and manage everything from a
          clean and simple dashboard.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <div className="flex bg-blue-500 gap-1 sm:gap-3 justify-center items-center hover:bg-blue-300  text-white text-xs sm:text-lg  px-3  sm:px-6 py-2  rounded-lg font-semibold transition">
            <span><FaPlus /></span>
            <button
              onClick={() => navigate("/addlead")}
              className="  "
            >
              Add Lead
            </button>
          </div>
          <div className="flex border  border-gray-200 bg-white/45 gap-3 justify-center items-center text-black text-xs sm:text-lg font-semibold px-3  sm:px-6 py-2  rounded-lg hover:bg-gray-100 transition">
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


 {/* Source cards */}
<section className="grid  grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
  {Object.keys(stats).map((key) => (
    
    <div
      key={key}
      className="bg-white shadow-md rounded-xl p-3 sm:p-5 flex items-center justify-between hover:shadow-lg transition"
    >
      <div>
        <p className="text-sm text-gray-500 capitalize">
          {key}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-1">
          {stats[key]}
        </h2>
      </div>

      <div className="p-1 sm:p-0 w-10  sm:w-12 h-10 sm:h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
      { icons(key)}
      </div>
    </div>
  ))}
</section>


    {/* Recent Leads Section */}
<section className="rounded-xl my-10 p-6 bg-white shadow-md">

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold text-gray-800">
      Recent Leads
    </h2>

    <button
      className="text-blue-600 flex items-center gap-2 px-2 py-1 hover:bg-gray-200 rounded-lg text-sm font-medium"
    >
      View All <IoArrowForward />
    </button>
  </div>

  {/* Scroll wrapper */}
  <div className="overflow-x-auto">
    <table className="min-w-[600px] w-full border-collapse text-sm">

      <thead>
        <tr className="text-left text-gray-600 font-medium border-b">
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Source</th>
          <th className="p-3">Date</th>
        </tr>
      </thead>

      <tbody>
        {recentLeads.map((lead) => (
          <tr
            key={lead.id}
            className="border-t hover:bg-gray-50 transition"
          >
            <td className="p-3 font-medium text-gray-800">
              {lead.name}
            </td>
            <td className="p-3 text-gray-600">
              {lead.email}
            </td>
            <td className="p-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                {lead.source}
              </span>
            </td>
            <td className="p-3 text-gray-600">
              {new Date(lead.createdAt).toLocaleDateString()}
            </td>
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
