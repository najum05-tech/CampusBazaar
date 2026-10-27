// src/pages/Admin/AdminSettings.jsx
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for General Settings Form
const settingsSchema = z.object({
  siteName: z.string().min(1, "Site Name is required"),
  supportEmail: z.string().min(1, "Support Email is required").email("Please enter a valid email address"),
  footerTagline: z.string().min(1, "Footer Tagline is required"),
  contactPhone: z.string().min(1, "Contact Phone is required"),
  defaultCity: z.string().min(1, "Default City is required"),
});

// Zod Validation Schema for Social Links Form
const socialLinksSchema = z.object({
  facebookUrl: z.string().min(1, "Facebook URL is required").url("Please enter a valid URL"),
  instagramUrl: z.string().min(1, "Instagram URL is required").url("Please enter a valid URL"),
  linkedinUrl: z.string().min(1, "LinkedIn URL is required").url("Please enter a valid URL"),
  twitterUrl: z.string().min(1, "Twitter / X URL is required").url("Please enter a valid URL"),
});

// Zod Validation Schema for Account Password Form
const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current Password is required"),
    newPassword: z.string().min(6, "New Password must be at least 6 characters"),
    confirmNewPassword: z.string().min(1, "Confirm New Password is required"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match!",
  });

export default function AdminSettings() {
  // General Settings form
  const {
    register: settingsRegister,
    handleSubmit: settingsHandleSubmit,
    formState: { errors: settingsErrors },
  } = useForm({
    resolver: zodResolver(settingsSchema),
  });

  // Social Links form
  const {
    register: socialRegister,
    handleSubmit: socialHandleSubmit,
    formState: { errors: socialErrors },
  } = useForm({
    resolver: zodResolver(socialLinksSchema),
  });

  // Account Password form
  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  // Function to log valid submitted data
  const handleSettingsSubmit = (data) => {
    console.log("General Settings submitted with data:", data);
  };

  const handleSocialLinksSubmit = (data) => {
    console.log("Social Links submitted with data:", data);
  };

  const handlePasswordSubmit = (data) => {
    console.log("Account Password submitted with data:", data);
  };

  return (
    <AdminLayout activePage="settings">

      <section className="admin-form-card">

        <h2>General Settings</h2>
        <p>Basic site information shown across CampusBazaar.</p>

        <form className="admin-form" onSubmit={settingsHandleSubmit(handleSettingsSubmit)}>

          <div className="form-row">
            <div className="form-group">
              <label className={settingsErrors.siteName ? "label-alert" : ""}>
                {settingsErrors.siteName?.message}
              </label>
              <input
                type="text"
                defaultValue="CampusBazaar"
                className={settingsErrors.siteName ? "input-alert" : ""}
                {...settingsRegister("siteName")}
              />
            </div>

            <div className="form-group">
              <label className={settingsErrors.supportEmail ? "label-alert" : ""}>
                {settingsErrors.supportEmail?.message}
              </label>
              <input
                type="email"
                placeholder="support@campusbazaar.com"
                className={settingsErrors.supportEmail ? "input-alert" : ""}
                {...settingsRegister("supportEmail")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className={settingsErrors.footerTagline ? "label-alert" : ""}>
              {settingsErrors.footerTagline?.message}
            </label>
            <input
              type="text"
              defaultValue="Your campus marketplace to buy, sell, and exchange."
              className={settingsErrors.footerTagline ? "input-alert" : ""}
              {...settingsRegister("footerTagline")}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label className={settingsErrors.contactPhone ? "label-alert" : ""}>
                {settingsErrors.contactPhone?.message}
              </label>
              <input
                type="text"
                placeholder="+92 300 1234567"
                className={settingsErrors.contactPhone ? "input-alert" : ""}
                {...settingsRegister("contactPhone")}
              />
            </div>

            <div className="form-group">
              <label className={settingsErrors.defaultCity ? "label-alert" : ""}>
                {settingsErrors.defaultCity?.message}
              </label>
              <select
                className={settingsErrors.defaultCity ? "input-alert" : ""}
                {...settingsRegister("defaultCity")}
              >
                <option>Abbottabad</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Settings
            </button>
          </div>

        </form>

      </section>

      <section className="admin-form-card">

        <h2>Social Links</h2>
        <p>Links shown in the website footer.</p>


        <form className="admin-form" onSubmit={socialHandleSubmit(handleSocialLinksSubmit)}>

          <div className="form-row">
            <div className="form-group">
              <label className={socialErrors.facebookUrl ? "label-alert" : ""}>
                {socialErrors.facebookUrl?.message}
              </label>
              <input
                type="text"
                placeholder="https://facebook.com/campusbazaar"
                className={socialErrors.facebookUrl ? "input-alert" : ""}
                {...socialRegister("facebookUrl")}
              />
            </div>

            <div className="form-group">
              <label className={socialErrors.instagramUrl ? "label-alert" : ""}>
                {socialErrors.instagramUrl?.message}
              </label>
              <input
                type="text"
                placeholder="https://instagram.com/campusbazaar"
                className={socialErrors.instagramUrl ? "input-alert" : ""}
                {...socialRegister("instagramUrl")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={socialErrors.linkedinUrl ? "label-alert" : ""}>
                {socialErrors.linkedinUrl?.message}
              </label>
              <input
                type="text"
                placeholder="https://linkedin.com/company/campusbazaar"
                className={socialErrors.linkedinUrl ? "input-alert" : ""}
                {...socialRegister("linkedinUrl")}
              />
            </div>

            <div className="form-group">
              <label className={socialErrors.twitterUrl ? "label-alert" : ""}>
                {socialErrors.twitterUrl?.message}
              </label>
              <input
                type="text"
                placeholder="https://x.com/campusbazaar"
                className={socialErrors.twitterUrl ? "input-alert" : ""}
                {...socialRegister("twitterUrl")}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Links
            </button>
          </div>


        </form>

      </section>

      <section className="admin-form-card">

        <h2>Account Password</h2>
        <p>Update your admin login password.</p>

        <form className="admin-form" onSubmit={passwordHandleSubmit(handlePasswordSubmit)}>

          <div className="form-group">
            <label className={passwordErrors.currentPassword ? "label-alert" : ""}>
              {passwordErrors.currentPassword?.message}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={passwordErrors.currentPassword ? "input-alert" : ""}
              {...passwordRegister("currentPassword")}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={passwordErrors.newPassword ? "label-alert" : ""}>
                {passwordErrors.newPassword?.message}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={passwordErrors.newPassword ? "input-alert" : ""}
                {...passwordRegister("newPassword")}
              />
            </div>

            <div className="form-group">
              <label className={passwordErrors.confirmNewPassword ? "label-alert" : ""}>
                {passwordErrors.confirmNewPassword?.message}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={passwordErrors.confirmNewPassword ? "input-alert" : ""}
                {...passwordRegister("confirmNewPassword")}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>

              Update Password
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}