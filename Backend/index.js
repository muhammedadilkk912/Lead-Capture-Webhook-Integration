import express from "express";
import cors from "cors";
import axios from "axios"


const app= express();
app.use(cors({
    origin:"http://localhost:5173",

}))
app.use(express.json()) 
// https://webhook.site/
let leads = [];
console.log(leads)


app.get("/gethomedata", (req, res) => {
    console.log("inside the home data")
  const recentLeads = leads.slice(-5).reverse();

  const stats = {
    instagram: leads.reduce(
      (acc, lead) => (lead.source === "Instagram" ? acc + 1 : acc),
      0
    ),
    website: leads.reduce(
      (acc, lead) => (lead.source === "Website" ? acc + 1 : acc),
      0
    ),
    referral: leads.reduce(
      (acc, lead) => (lead.source === "Referral" ? acc + 1 : acc),
      0
    ),
    other: leads.reduce(
      (acc, lead) => (lead.source === "Other" ? acc + 1 : acc),
      0
    ),
  };

  res.status(200).json({
    message: "Home data fetched successfully",
    recentLeads,
    stats,
  });
});



// add  lead data to webhook and store in local array

app.post('/addlead',async (req,res)=>{
    console.log("inside the server")
      const lead = { ...req.body, createdAt: new Date() };

     console.log(lead)
      leads.push(lead)
       // 🔔 Send to webhook (AUTOMATION)
  try {
    await axios.post("https://webhook.site/e64e4337-a318-4c01-907f-6d1a20dd4822", lead);
    console.log("Webhook sent successfully");
    res.status(201).json({message:'added successfully'})
  } catch (err) {
    console.log("Webhook failed",err);
    res.status(500).json({message:'intern server error'})
  }
})


// fecth data
app.get('/getleads',(req,res)=>{
    console.log("inside the leads")
    console.log(leads)
    res.status(200).json({message:"leads got it",leads})
})

app.listen(2000,()=>{
    console.log("server is running on port 2000")
})