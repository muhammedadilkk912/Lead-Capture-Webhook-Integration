import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
import { useLoader } from '../context/LoaderContext'

const Layout = () => {
  const{loading}=useLoader()
  return (
     <>
      {
        loading && <Loader/>

      }
      <Header />
      {/*  */}
      <main className=" px-4 bg-slate-50 min-h-screen  pt-20">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
