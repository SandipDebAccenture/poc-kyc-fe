import { useForm } from "react-hook-form";
import type { UserFormData } from "./types";
import "./UserKycRegistrationForm.scss";

const UserKycRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid">
          <div className="form-field">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              aria-invalid={errors.firstName ? "true" : "false"}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              className={errors.firstName ? "invalid" : ""}
            />
            {errors.firstName && (
              <span id="firstName-error" className="error">
                {String(errors.firstName.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              aria-invalid={errors.lastName ? "true" : "false"}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={errors.lastName ? "invalid" : ""}
            />
            {errors.lastName && (
              <span id="lastName-error" className="error">
                {String(errors.lastName.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("loginId", { required: "Login ID is required" })}
              placeholder="Login ID"
              aria-invalid={errors.loginId ? "true" : "false"}
              aria-describedby={errors.loginId ? "loginId-error" : undefined}
              className={errors.loginId ? "invalid" : ""}
            />
            {errors.loginId && (
              <span id="loginId-error" className="error">
                {String(errors.loginId.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              type="date"
              {...register("dob", { required: "Date of birth is required" })}
              aria-invalid={errors.dob ? "true" : "false"}
              aria-describedby={errors.dob ? "dob-error" : undefined}
              className={errors.dob ? "invalid" : ""}
            />
            {errors.dob && (
              <span id="dob-error" className="error">
                {String(errors.dob.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={errors.email ? "invalid" : ""}
            />
            {errors.email && (
              <span id="email-error" className="error">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={errors.password ? "invalid" : ""}
            />
            {errors.password && (
              <span id="password-error" className="error">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile must be a 10-digit number",
                },
              })}
              placeholder="Mobile"
              aria-invalid={errors.mobile ? "true" : "false"}
              aria-describedby={errors.mobile ? "mobile-error" : undefined}
              className={errors.mobile ? "invalid" : ""}
            />
            {errors.mobile && (
              <span id="mobile-error" className="error">
                {String(errors.mobile.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <select
              {...register("gender", { required: "Gender is required" })}
              aria-invalid={errors.gender ? "true" : "false"}
              aria-describedby={errors.gender ? "gender-error" : undefined}
              className={errors.gender ? "invalid" : ""}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <span id="gender-error" className="error">
                {String(errors.gender.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              placeholder="Nationality"
              aria-invalid={errors.nationality ? "true" : "false"}
              aria-describedby={
                errors.nationality ? "nationality-error" : undefined
              }
              className={errors.nationality ? "invalid" : ""}
            />
            {errors.nationality && (
              <span id="nationality-error" className="error">
                {String(errors.nationality.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("occupation", {
                required: "Occupation is required",
              })}
              placeholder="Occupation"
              aria-invalid={errors.occupation ? "true" : "false"}
              aria-describedby={
                errors.occupation ? "occupation-error" : undefined
              }
              className={errors.occupation ? "invalid" : ""}
            />
            {errors.occupation && (
              <span id="occupation-error" className="error">
                {String(errors.occupation.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("addressLine1", {
                required: "Address Line 1 is required",
              })}
              placeholder="Address Line 1"
              aria-invalid={errors.addressLine1 ? "true" : "false"}
              aria-describedby={
                errors.addressLine1 ? "addressLine1-error" : undefined
              }
              className={errors.addressLine1 ? "invalid" : ""}
            />
            {errors.addressLine1 && (
              <span id="addressLine1-error" className="error">
                {String(errors.addressLine1.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input {...register("addressLine2")} placeholder="Address Line 2" />
          </div>

          <div className="form-field">
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              aria-invalid={errors.city ? "true" : "false"}
              aria-describedby={errors.city ? "city-error" : undefined}
              className={errors.city ? "invalid" : ""}
            />
            {errors.city && (
              <span id="city-error" className="error">
                {String(errors.city.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              aria-invalid={errors.state ? "true" : "false"}
              aria-describedby={errors.state ? "state-error" : undefined}
              className={errors.state ? "invalid" : ""}
            />
            {errors.state && (
              <span id="state-error" className="error">
                {String(errors.state.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("country", { required: "Country is required" })}
              placeholder="Country"
              aria-invalid={errors.country ? "true" : "false"}
              aria-describedby={errors.country ? "country-error" : undefined}
              className={errors.country ? "invalid" : ""}
            />
            {errors.country && (
              <span id="country-error" className="error">
                {String(errors.country.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("pincode", {
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be a 6-digit number",
                },
              })}
              placeholder="Pincode"
              aria-invalid={errors.pincode ? "true" : "false"}
              aria-describedby={errors.pincode ? "pincode-error" : undefined}
              className={errors.pincode ? "invalid" : ""}
            />
            {errors.pincode && (
              <span id="pincode-error" className="error">
                {String(errors.pincode.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <select
              {...register("documentType", {
                required: "Document type is required",
              })}
              aria-invalid={errors.documentType ? "true" : "false"}
              aria-describedby={
                errors.documentType ? "documentType-error" : undefined
              }
              className={errors.documentType ? "invalid" : ""}>
              <option value="">Select Document Type</option>
              <option value="PAN">PAN</option>
              <option value="Aadhar">Aadhar</option>
              <option value="Passport">Passport</option>
            </select>
            {errors.documentType && (
              <span id="documentType-error" className="error">
                {String(errors.documentType.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <input
              {...register("documentNumber", {
                required: "Document number is required",
              })}
              placeholder="Document Number"
              aria-invalid={errors.documentNumber ? "true" : "false"}
              aria-describedby={
                errors.documentNumber ? "documentNumber-error" : undefined
              }
              className={errors.documentNumber ? "invalid" : ""}
            />
            {errors.documentNumber && (
              <span id="documentNumber-error" className="error">
                {String(errors.documentNumber.message)}
              </span>
            )}
          </div>
        </div>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserKycRegistrationForm;
