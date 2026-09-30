// App.jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

import AddProduct from "./pages/dashboard/AddProduct";
import Listings from "./pages/dashboard/Listings";
import About from "./pages/About";
import ViewProduct from "./pages/dashboard/ViewProduct";
import EditProduct from "./pages/dashboard/EditProduct";
import DeleteProduct from "./pages/dashboard/DeleteProduct";

import UpdateProfile from "./pages/dashboard/UpdateProfile";

import AddAbout from "./pages/dashboard/AddAbout";
import ViewAbout from "./pages/dashboard/ViewAbout";
import EditAbout from "./pages/dashboard/EditAbout";
import DeleteAbout from "./pages/dashboard/DeleteAbout";
function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/dashboard/add-product" element={<AddProduct />} />
                <Route path="/dashboard/listings" element={<Listings />} />
                <Route path="/dashboard/product/:id" element={<ViewProduct />} />
                <Route path="/dashboard/product/:id/edit" element={<EditProduct />} />
                <Route path="/dashboard/product/:id/delete"  element={<DeleteProduct />}/> 

                <Route path="/dashboard/profile" element={<UpdateProfile />} />

                <Route path="/dashboard/about/add" element={<AddAbout />} />
                <Route path="/dashboard/about" element={<ViewAbout />} />
                <Route path="/dashboard/about/edit" element={<EditAbout />} />
                <Route path="/dashboard/about/delete" element={<DeleteAbout />} />

           </Routes>
    
    );
}

export default App;
