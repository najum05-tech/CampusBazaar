import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { handleAdminContentFunction, handleDeleteAdminContentFunction } from "/src/api.js";

export default function ManageHero() {
  const [heroes, setHeroes] = useState([]);
  const [message, setMessage] = useState("");
  const load = () => handleAdminContentFunction("Hero").then((response) => setHeroes(response.data)).catch((error) => setMessage(error.response?.data?.message || "Unable to load hero content"));
  useEffect(load, []);
  const remove = async (id) => { try { await handleDeleteAdminContentFunction("Hero", id); setMessage("Hero content deleted successfully."); load(); } catch (error) { setMessage(error.response?.data?.message || "Unable to delete hero content"); } };
  return <AdminLayout activePage="hero"><section className="admin-list-card"><div className="section-top"><div><h2>Hero Section</h2><p>Content shown at the top of the homepage.</p></div><Link to="/admin/hero/add" className="btn-admin btn-admin-primary">Add New Hero</Link></div>{message && <p>{message}</p>}<table className="admin-table"><thead><tr><th>Label</th><th>Title</th><th>Description</th><th>Status</th><th>Actions</th></tr></thead><tbody>{heroes.map((hero) => <tr key={hero._id}><td>{hero.data.smallLabel}</td><td>{hero.data.titleLine1} {hero.data.titleLine2}</td><td>{hero.data.description}</td><td>{hero.data.status}</td><td><Link to={`/admin/hero/${hero._id}`} className="icon-btn"><i className="bi bi-eye"></i></Link><Link to={`/admin/hero/${hero._id}/edit`} className="icon-btn"><i className="bi bi-pencil"></i></Link><button className="icon-btn danger" onClick={() => remove(hero._id)}><i className="bi bi-trash"></i></button></td></tr>)}</tbody></table></section></AdminLayout>;
}
