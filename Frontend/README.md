Lead Capture Dashboard with Webhook Automation
=============================================

A simple lead capture web application built using React and Node.js.
Users can submit leads, view recent leads, and trigger automation using webhooks.

Tech stack
---------------
Frontend:React,Tailwind css,React Router
Backend:node.js,express.js
Automation:Webhook.site


Setup Instructions
-------------
Frontend
-------
npm install
npm run dev

Backend
-------
npm install
node index.js

API Endpoints
-----------
POST /leads       → Create lead
GET  /leads       → Get all leads
GET  /getHomeData → Get dashboard stats
