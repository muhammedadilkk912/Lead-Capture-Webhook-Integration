import React, { useState } from 'react'
import { MdPersonAddAlt } from "react-icons/md";
import axiosInstance from '../Confiq/Axios';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';
import toast from 'react-hot-toast';



const AddLead = () => {
  const navigate=useNavigate()
  const {showLoader,hideLoader}=useLoader()
    
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source: "",
  });
  const [error,setError]=useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source:''

  })
  console.log(form)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const validation = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let newError = {};

  if (!form.name.trim()) {
    newError.name = "Name is required";
    
  }

  if (!form.email.trim()) {
    newError.email = "Email is required";
  } else if (!emailRegex.test(form.email)) {
    newError.email = "Please enter a valid email address";
  }

  if (!form.phone.trim()) {
    newError.phone = "Phone number is required";
  }
    
  if (!form.company.trim()) {
    newError.company = "Company name is required";
  }

  if (!form.source.trim()) {
    newError.source = "Please select a source";
  }

  setError(newError);
  console.log("error ",newError)

  return Object.keys(newError).length === 0;
};


  const handleSubmit = async(e) => {
    e.preventDefault();
     if(validation()){
      try {
        showLoader('submitting lead...')  
        console.log("postiong the data")
        const response =await axiosInstance.post('/addlead',form)
        console.log("result got it",response)
        toast.success('lead submitted successfully')
        navigate('/leads')
        
      } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log("error in submitting ",error)
      }finally{
        hideLoader()
      }
      

     }else{
      console.log("validation <fieldset></fieldset>")
     }
  };
  return  (
    <div className="min-h-[80vh] flex items-center justify-center">
      {/* {
        loading && <Loader text="submitting data.."/>
      } */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 text-blue-300 rounded-xl flex items-center justify-center text-xl">
            <MdPersonAddAlt className='text-blue-500' size={24}/>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Lead Capture
          </h1>
          <p className="text-gray-500 text-sm">
            Submit a new lead
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              
              className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {
                error.name &&  <p className='text-red-600'> name is required</p>  
            }
           
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              
              className="mt-1 w-full border  border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
             {
                error.email &&  <p className='text-red-600'> {error?.email}</p>  
            }
           
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full border  border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {
                error.phone &&  <p className='text-red-600'> {error?.phone}</p>  
            }
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full border  border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
             {
                error.company &&  <p className='text-red-600'> {error?.company}</p>  
            }
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="mt-1 w-full border  border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <div>
  <label className="text-sm font-medium text-gray-700">
    Source
  </label>

  <select
    name="source"
    value={form.source}
    onChange={handleChange}
    
    className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
  >
   
     <option value="" disabled >   Select source</option>
    
    <option value="Instagram">Instagram</option>
    <option value="Referral">Referral</option>
    <option value="Website">Website</option>   
    <option value="Other">Other</option>
  </select>
   {
                error.source &&  <p className='text-red-600'> {error?.source}</p>  
            }
</div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Submit Lead
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddLead
