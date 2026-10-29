import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { handleAdminContentFunction, handleDeleteAdminContentFunction } from "/src/api.js";

export default function ManageBenefits() {
  const [benefits, setBenefits] = useState([]);
  const [message, setMessage] = useState("");
  const load = () => handleAdminContentFunction("Benefits").then((response) => setBenefits(response.data)).catch((error) => setMessage(error.response?.data?.message || "Unable to load benefits"));
  useEffect(load, []);
  const remove = async (id) => { try { await handleDeleteAdminContentFunction("Benefits", id); setMessage("Benefit deleted successfully."); load(); } catch (error) { setMessage(error.response?.data?.message || "Unable to delete benefit"); } };
  return <AdminLayout activePage="benefits"><section className="admin-list-card"><div className="section-top"><div><h2>Why CampusBazaar</h2><p>Benefits shown in the homepage section.</p></div><Link to="/admin/benefits/add" className="btn-admin btn-admin-primary">Add New Benefit</Link></div>{message && <p>{message}</p>}<table className="admin-table"><thead><tr><th>Icon</th><th>Title</th><th>Description</th><th>Actions</th></tr></thead><tbody>{benefits.map((benefit) => <tr key={benefit._id}><td><i className={`bi ${benefit.data.iconClass} admin-table-icon`}></i></td><td>{benefit.data.title}</td><td>{benefit.data.description}</td><td><Link to={`/admin/benefits/${benefit._id}`} className="icon-btn"><i className="bi bi-eye"></i></Link><Link to={`/admin/benefits/${benefit._id}/edit`} className="icon-btn"><i className="bi bi-pencil"></i></Link><button className="icon-btn danger" onClick={() => remove(benefit._id)}><i className="bi bi-trash"></i></button></td></tr>)}</tbody></table></section></AdminLayout>;
}
