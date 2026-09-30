// App.jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/dashboard/AddProduct";
function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/add-product" element={<AddProduct />} />
            </Routes>
    
    );
}

export default App;
