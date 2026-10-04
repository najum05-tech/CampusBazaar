// App.jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

import AddProduct from "./pages/dashboard/AddProduct";
import Listings from "./pages/dashboard/Listings";
import About from "./pages/About";
import ViewProduct from "./pages/dashboard/ViewProduct";
import EditProduct from "./pages/dashboard/EditProduct";
import DeleteProduct from "./pages/dashboard/DeleteProduct";

import UpdateProfile from "./pages/EditProfile";

import AddAbout from "./pages/Admin/AddAbout";
import ViewAbout from "./pages/Admin/ViewAbout";
import EditAbout from "./pages/Admin/EditAbout";
import DeleteAbout from "./pages/Admin/DeleteAbout";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import AddUser from "./pages/Admin/AddUser";
import EditUser from "./pages/Admin/EditUser";

import ManageHero from "./pages/Admin/ManageHero";
import AddHero from "./pages/Admin/AddHero";
import ViewHero from "./pages/Admin/ViewHero";
import EditHero from "./pages/Admin/EditHero";

import ManageCategories from "./pages/Admin/ManageCategories";
import AddCategory from "./pages/Admin/AddCategory";
import ViewCategory from "./pages/Admin/ViewCategory";
import EditCategory from "./pages/Admin/EditCategory";

import ManageHowItWorks from "./pages/Admin/ManageHowItWorks";
import AddHowItWorks from "./pages/Admin/AddHowItWorks";
import ViewHowItWorks from "./pages/Admin/ViewHowItWorks";
import EditHowItWorks from "./pages/Admin/EditHowItWorks";

import ManageBenefits from "./pages/Admin/ManageBenefits";
import AddBenefit from "./pages/Admin/AddBenefit";
import ViewBenefit from "./pages/Admin/ViewBenefit";
import EditBenefit from "./pages/Admin/EditBenefit";

import AdminSettings from "./pages/Admin/AdminSettings";


function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/dashboard/add-product" element={<AddProduct />} />
                <Route path="/dashboard/listings" element={<Listings />} />
                <Route path="/dashboard/product/:id" element={<ViewProduct />} />
                <Route path="/dashboard/product/:id/edit" element={<EditProduct />} />
                <Route path="/dashboard/product/:id/delete"  element={<DeleteProduct />}/> 

                <Route path="/dashboard/profile" element={<UpdateProfile />} />

                <Route path="/admin/about/add" element={<AddAbout />} />
                <Route path="/admin/about" element={<ViewAbout />} />
                <Route path="/admin/about/edit" element={<EditAbout />} />
                <Route path="/admin/about/delete" element={<DeleteAbout />} />

                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<ManageUsers />} />
                <Route path="/admin/users/add" element={<AddUser />} />
                <Route path="/admin/users/edit/:id" element={<EditUser />} />

                <Route path="/admin/hero" element={<ManageHero />} />
                <Route path="/admin/hero/add" element={<AddHero />} />
                <Route path="/admin/hero/view/:id" element={<ViewHero />} />
                <Route path="/admin/hero/edit/:id" element={<EditHero />} />

                <Route path="/admin/categories" element={<ManageCategories />} />
                <Route path="/admin/categories/add" element={<AddCategory />} />
                <Route path="/admin/categories/view/:id" element={<ViewCategory />} />
                <Route path="/admin/categories/edit/:id" element={<EditCategory />} />

                <Route path="/admin/how-it-works" element={<ManageHowItWorks />} />
                <Route path="/admin/how-it-works/add" element={<AddHowItWorks />} />
                <Route path="/admin/how-it-works/view/:id" element={<ViewHowItWorks />} />
                <Route path="/admin/how-it-works/edit/:id" element={<EditHowItWorks />} />

                <Route path="/admin/benefits" element={<ManageBenefits />} />
                <Route path="/admin/benefits/add" element={<AddBenefit />} />
                <Route path="/admin/benefits/view/:id" element={<ViewBenefit />} />
                <Route path="/admin/benefits/edit/:id" element={<EditBenefit />} />

                <Route path="/admin/settings" element={<AdminSettings />} />
           </Routes>
    
    );
}

export default App;
