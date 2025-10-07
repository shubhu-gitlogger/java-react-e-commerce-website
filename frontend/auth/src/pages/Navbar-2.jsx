import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Navbar2 = () => {
    const navigate = useNavigate();

    return( 
        <>
         <header className="bg-gray-300 text-black px-[50px] shadow-md flex justify-between items-center">
        <button onClick={() => navigate("/")}>
  <h1 className="cursor-pointer text-2xl  font-bold">
    Gaming<span className="text-red-500 italic">BAZAAR</span>
  </h1>
</button>

           <SearchBar />
    
  
  <div className="flex space-x-6">

     <button onClick={()=> navigate("/signin")}><h3 className="cursor-pointer hover:underline">Sign In</h3></button>
     <button onClick={()=> navigate("/signup")}><h3 className="cursor-pointer hover:underline">Sign Up</h3></button>
    
  </div>
  
</header>
        

</>);
  

};
export default Navbar2;