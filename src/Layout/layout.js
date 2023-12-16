import React from 'react';
import Navbar from "../components/Navbar/navbar"
// import bottomNavbar from '../components/Navbar/bottomNavbar';
import Footer from '../components/Footer/Footer';



const layout = ({children}) => {
  return (
    <div>
     <Navbar/>
     {children}
     {/* <bottomNavbar/>  */}
     <Footer/>
    </div>
  )
}

export default layout;
