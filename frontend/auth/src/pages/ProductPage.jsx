import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const ProductPage = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8082/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p className="p-6">Loading product...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img 
        src={product.imageUrl || "https://via.placeholder.com/400"} 
        alt={product.name} 
        className="w-96 h-96 object-cover rounded-lg mt-4"
      />
      <p className="mt-4 text-lg text-gray-700">{product.description}</p>
      <p className="mt-2 text-2xl font-bold text-blue-600">₹{product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
