import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import ProductPage from "./pages/ProductPage";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </Router>
    {/* <div>
      <HomePage />
    </div> */}
    </>
  );
}

export default App;
