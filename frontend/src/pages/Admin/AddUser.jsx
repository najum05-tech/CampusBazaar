// src/pages/admin/AddUser.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Add User Form
const addUserSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().min(1).email(),
  phoneNumber: z.string().min(1),
  role: z.string().min(1),
  university: z.string().min(1),
  campus: z.string().min(1),
  password: z.string().min(6),
  status: z.string().min(1),
});

export default function AddUser() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUserSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Add User Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="users">

      <section className="admin-form-card">

        <h2>Add New User</h2>
        <p>Create a new student account manually.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.fullName ? "label-alert" : ""}>
                {errors.fullName ? "Full Name is required!" : "Full Name"}
              </label>
              <input
                type="text"
                className={errors.fullName ? "input-alert" : ""}
                placeholder={errors.fullName ? "Full name is required!" : "e.g. Ahmed Khan"}
                {...register("fullName")}
              />
            </div>

            <div className="form-group">
              <label className={errors.email ? "label-alert" : ""}>
                {errors.email ? "Valid email is required!" : "Email"}
              </label>
              <input
                type="email"
                className={errors.email ? "input-alert" : ""}
                placeholder={errors.email ? "Valid email address is required!" : "e.g. ahmed@gmail.com"}
                {...register("email")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.phoneNumber ? "label-alert" : ""}>
                {errors.phoneNumber ? "Phone Number is required!" : "Phone Number"}
              </label>
              <input
                type="text"
                className={errors.phoneNumber ? "input-alert" : ""}
                placeholder={errors.phoneNumber ? "Phone number is required!" : "e.g. +92 300 1234567"}
                {...register("phoneNumber")}
              />
            </div>


            <div className="form-group">
              <label className={errors.role ? "label-alert" : ""}>
                {errors.role ? "Role is required!" : "Role"}
              </label>
              <select
                className={errors.role ? "input-alert" : ""}
                {...register("role")}
              >
                <option>Buyer</option>
                <option>Seller</option>
                <option>Admin</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.university ? "label-alert" : ""}>
                {errors.university ? "University is required!" : "University"}
              </label>
              <select
                className={errors.university ? "input-alert" : ""}
                {...register("university")}
              >
                <option>COMSATS University Islamabad</option>
                <option>University of Abbottabad</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className={errors.campus ? "label-alert" : ""}>
                {errors.campus ? "Campus is required!" : "Campus"}
              </label>
              <select
                className={errors.campus ? "input-alert" : ""}
                {...register("campus")}
              >
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">

              <label className={errors.password ? "label-alert" : ""}>
                {errors.password ? "Password is required (min 6 chars)!" : "Password"}
              </label>
              <input
                type="password"
                className={errors.password ? "input-alert" : ""}
                placeholder={errors.password ? "Password required (min 6 chars)!" : "Set a temporary password"}
                {...register("password")}
              />
            </div>

            <div className="form-group">
              <label className={errors.status ? "label-alert" : ""}>
                {errors.status ? "Status is required!" : "Status"}
              </label>
              <select
                className={errors.status ? "input-alert" : ""}
                {...register("status")}
              >
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <Link to="/admin/users" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add User
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}