import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import pc1 from "../assets/pc_1.webp";
import pc2 from "../assets/pc_2.webp";
import pc3 from "../assets/pc_3.webp";
import pc4 from "../assets/pc_4.webp";
import pc5 from "../assets/pc_5.webp";
import pc6 from "../assets/pc_6.webp";
import featuredBg from "../assets/featured_background.jpg";




const HomePage = () => {

    const navigate = useNavigate();
    

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Call your product-service backend (adjust port if different)
    axios.get("http://localhost:8082/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
   
    <Navbar />


      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-r bg-white text-black">
        <h2 className="text-[2.5rem] font-bold">Welcome to Our Store</h2>
        <p className="mt-2">Discover amazing products at the best prices</p>
      </section>

      {/* Products Section */}
      <section className="p-6"
        style={{ backgroundImage: `url(${featuredBg})` }}>
        <div
      className="flex-col bg-cover bg-center h-96  w-full"
    
    >
            <h3 className="text-2xl font-bold text-white text-center text-[2.5rem] mb-4">Featured PC Build Categories</h3>
            <div>
                <ul className="flex gap-[15px] justify-center">
                   
                     <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc1}
                        alt="Gaming PC"
                        />
                        <h4 className="font-bold text-justify  mt-3 text-[13px]">
                        Gaming PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                        High-performance system for gaming and streaming.
                        </p>
                    </li>
                  <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc2}
                        alt="3D Modelling PC"
                        />
                        <h4 className="font-bold text-justify   mt-3 text-[13px]">
                       3D Modelling PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                        Experience unrivaled performance for complex 3D modelling and rendering.
                        </p>
                    </li>
                    <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc3}
                        alt="Architectural PC"
                        />
                        <h4 className="font-bold text-justify   mt-3 text-[13px]">
                       Architectural PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                       Optimized for architectural design, visualization, and complex CAD workflows.
                        </p>
                    </li>
                 <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc4}
                        alt="Video Editing PC"
                        />
                        <h4 className="font-bold text-justify mt-3 text-[13px]">
                        Video Editing PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                        Streamlined for high-res video editing and fast rendering speeds.
                        </p>
                    </li>
                   <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc5}
                        alt="Graphic Designing PC"
                        />
                        <h4 className="font-bold text-justify  mt-3 text-[13px]">
                       Graphic Designing PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                        Unleash your creativity with a PC specifically tailored for design work
                        </p>
                    </li>
                      <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center pb-[10px] hover:shadow-lg transition duration-300 w-[208px]">
                        <img
                        className="h-[200px] w-full object-cover rounded-md"
                        src={pc6}
                        alt="VFX Animation PC"
                        />
                        <h4 className="font-bold text-justify   mt-3 text-[13px]">
                       VFX Animation PC
                        </h4>
                        <p className="text-gray-600 px-[20px] text-[11.2px] mt-2 text-justify">
                        Built to handle complex visual effects and animation tasks with ease.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        
   
      </section>
    </div>
        <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition cursor-pointer">
              <img 
                src={product.imageUrl || "https://via.placeholder.com/150"} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomePage;
