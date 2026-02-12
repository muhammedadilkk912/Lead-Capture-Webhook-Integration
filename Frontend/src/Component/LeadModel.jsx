import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";





const LeadModal = ({ lead, onClose }) => {
    console.log(lead)
  if (!lead) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md  flex items-center justify-center z-50">
      <div className="bg-white rounded-xl  shadow-lg w-full max-w-md p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3  hover:bg-gray-300 rounded-full p-2"  
        >
         <IoMdClose size={20}/>
        </button>
        <div className="border-b text-2xl pb-5 font-semibold border-slate-300 ">
            <p>{lead?.name}</p>
         </div>

      
        <div className="space-y-4 text-sm text-gray-700">
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><MdOutlineMailOutline size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">Email</p>
                     <p className="text-md text-black">{lead.email}</p>       

                </div>
  
            </div>
            
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><IoBusinessOutline size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">compnay</p>
                     <p className="text-md text-black">{lead.compnay}</p>       

                </div>
  
            </div>
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><FaPhoneAlt size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">Phone</p>
                     <p className="text-md text-black">{lead.phone}</p>       

                </div>
  
            </div>
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><CiGlobe size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">source</p>  
                     <p className="text-md text-black">{lead?.source}</p>       

                </div>
  
            </div>
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><FaRegMessage size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">Message</p>  
                     <p className="text-md text-black">{lead?.message}</p>       

                </div>
  
            </div> 
            <div className="flex gap-2 py-3 border-b border-slate-300 ">
                <span><HiMiniCalendarDateRange size={20 }/> </span>
                <div className="flex-col ">
                    <p className="font-medium">Date</p>  
                     <p className="text-md text-black">{new Date(lead.createdAt).toLocaleString()}</p>       

                </div>
  
            </div> 
            
         
        
         
         
         
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
