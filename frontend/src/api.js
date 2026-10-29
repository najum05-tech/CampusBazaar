import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Signup
export async function handleMySignupFunction(data) {
  console.log("Signup request received:");
  return await API.post("/pages/Signup", data);
}

// Login
export async function handleMyLoginFunction(data) {
  console.log("Login request received:");
  return await API.post("/pages/Login", data);
}

// Add Product
export async function handleMyAddProductFunction(data) {
  console.log("Add Product request received:");
  return await API.post("/pages/AddProduct", data);
}

// Edit Product
export async function handleEditProductFunction(id, data) {
  return await API.put(`/pages/EditProduct/${id}`, data);
}

// Delete Product
export async function handleDeleteProductFunction(id) {
  return await API.delete(`/pages/DeleteProduct/${id}`);
}

export async function handleGetProductsFunction() {
  return await API.get("/pages/Products");
}

export async function handleGetProductFunction(id) {
  return await API.get(`/pages/Product/${id}`);
}

export async function handleGetProfileFunction(id) {
  return await API.get(`/pages/Profile/${id}`);
}

export async function handleUpdateProfileFunction(id, data) {
  return await API.put(`/pages/Profile/${id}`, data);
}

export async function handleContactFunction(data) {
  return await API.post('/pages/Contact', data);
}

export async function handleAdminUsersFunction() { return await API.get('/pages/Admin/Users'); }
export async function handleAdminUserFunction(data) { return await API.post('/pages/Admin/Users', data); }
export async function handleUpdateAdminUserFunction(id, data) { return await API.put(`/pages/Admin/Users/${id}`, data); }
export async function handleDeleteAdminUserFunction(id) { return await API.delete(`/pages/Admin/Users/${id}`); }
export async function handleAdminContentFunction(type) { return await API.get(`/pages/Admin/${type}`); }
export async function handleGetAdminContentItemFunction(type, id) { return await API.get(`/pages/Admin/${type}/${id}`); }
export async function handleAddAdminContentFunction(type, data) { return await API.post(`/pages/Admin/${type}`, data); }
export async function handleUpdateAdminContentFunction(type, id, data) { return await API.put(`/pages/Admin/${type}/${id}`, data); }
export async function handleDeleteAdminContentFunction(type, id) { return await API.delete(`/pages/Admin/${type}/${id}`); }
export async function handleGetAdminUserFunction(id) { return await API.get(`/pages/Admin/Users/${id}`); }

export default API;
