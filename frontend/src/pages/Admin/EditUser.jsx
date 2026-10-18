// src/pages/admin/EditUser.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Edit User Form
const editUserSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().min(1).email(),
  phoneNumber: z.string().min(1),
  role: z.string().min(1),
  university: z.string().min(1),
  campus: z.string().min(1),
  status: z.string().min(1),
});

export default function EditUser() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editUserSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit User Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="users">

      <section className="admin-form-card">

        <h2>Edit User</h2>
        <p>Update this student's account information.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.fullName ? "label-alert" : ""}>
                {errors.fullName ? "Full Name is required!" : "Full Name"}
              </label>
              <input
                type="text"
                defaultValue="Muhammad Najmuddin"
                className={errors.fullName ? "input-alert" : ""}
                {...register("fullName")}
              />
            </div>

            <div className="form-group">
              <label className={errors.email ? "label-alert" : ""}>
                {errors.email ? "Valid email is required!" : "Email"}
              </label>
              <input
                type="email"
                defaultValue="najmuddin@gmail.com"
                className={errors.email ? "input-alert" : ""}
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
                defaultValue="+92 346 9611585"
                className={errors.phoneNumber ? "input-alert" : ""}
                {...register("phoneNumber")}
              />
            </div>

            <div className="form-group">
              <label className={errors.role ? "label-alert" : ""}>
                {errors.role ? "Role is required!" : "Role"}
              </label>
              <select
                defaultValue="Seller"
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
                defaultValue="COMSATS University Islamabad"
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
                defaultValue="Abbottabad Campus"
                className={errors.campus ? "input-alert" : ""}
                {...register("campus")}
              >
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className={errors.status ? "label-alert" : ""}>
              {errors.status ? "Status is required!" : "Status"}
            </label>
            <select
              defaultValue="Active"
              className={errors.status ? "input-alert" : ""}
              {...register("status")}
            >
              <option>Active</option>
              <option>Suspended</option>
            </select>
          </div>

          <div className="form-actions">
            <Link to="/admin/users" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Changes
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}