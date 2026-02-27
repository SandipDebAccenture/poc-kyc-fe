import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { apiClient } from "../lib/axios";
import "../styles/KycRegistrationPage.scss";
import { USER_KYC_REGISTRATION_VALUES } from "../constants/formInputs";

interface UserFormData {
  firstName: string;
  loginId: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
  mobile: string;
  gender: string;
  nationality: string;
  occupation: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  documentNumber: string;
  documentType: string;
}

const UserKycRegistrationPage = () => {
  const navigate = useNavigate();
  const userInfo: string | null = localStorage.getItem("user_info");
  const username: string = userInfo ? JSON.parse(userInfo).username : "User";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    defaultValues: { ...USER_KYC_REGISTRATION_VALUES, loginId: username },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: UserFormData) => {
    setLoading(true);
    try {
      const res = await apiClient.post("api/onboarding", data);
      localStorage.setItem("onboarding_info", JSON.stringify(res.data));
      console.log("Onboarding response:", res); // FIXME: Remove
      toast.success("Registration submitted successfully");
      reset();
      navigate("/");
    } catch (err: unknown) {
      const error = err as AxiosError<{ message?: string }>;
      const msg =
        error.response?.data?.message || error.message || "Submission failed";
      toast.error(msg);
      console.error("Onboarding error:", err); // FIXME: Remove
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">KYC Registration</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Please enter your first name"
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
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Please enter your last name"
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
            <label htmlFor="loginId">Login ID</label>
            <input
              id="loginId"
              {...register("loginId", { required: "Login ID is required" })}
              placeholder="Please enter your login ID"
              aria-invalid={errors.loginId ? "true" : "false"}
              aria-describedby={errors.loginId ? "loginId-error" : undefined}
              className={errors.loginId ? "invalid" : ""}
              disabled
            />
            {errors.loginId && (
              <span id="loginId-error" className="error">
                {String(errors.loginId.message)}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              {...register("dob", { required: "Date of birth is required" })}
              placeholder="Please enter your date of birth"
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Please enter your email"
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Please enter your password"
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
            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile must be a 10-digit number",
                },
              })}
              placeholder="Please enter your mobile number"
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
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
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
            <label htmlFor="nationality">Nationality</label>
            <input
              id="nationality"
              {...register("nationality", {
                required: "Nationality is required",
              })}
              placeholder="Please enter your nationality"
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
            <label htmlFor="occupation">Occupation</label>
            <input
              id="occupation"
              {...register("occupation", {
                required: "Occupation is required",
              })}
              placeholder="Please enter your occupation"
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
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              id="addressLine1"
              {...register("addressLine1", {
                required: "Address Line 1 is required",
              })}
              placeholder="Please enter your address line 1"
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
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              id="addressLine2"
              {...register("addressLine2")}
              placeholder="Please enter your address line 2"
            />
          </div>

          <div className="form-field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              {...register("city", { required: "City is required" })}
              placeholder="Please enter your city"
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
            <label htmlFor="state">State</label>
            <input
              id="state"
              {...register("state", { required: "State is required" })}
              placeholder="Please enter your state"
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
            <label htmlFor="country">Country</label>
            <input
              id="country"
              {...register("country", { required: "Country is required" })}
              placeholder="Please enter your country"
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
            <label htmlFor="pincode">Pincode</label>
            <input
              id="pincode"
              {...register("pincode", {
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be a 6-digit number",
                },
              })}
              placeholder="Please enter your pincode"
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
            <label htmlFor="documentType">Document Type</label>
            <select
              id="documentType"
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
            <label htmlFor="documentNumber">Document Number</label>
            <input
              id="documentNumber"
              {...register("documentNumber", {
                required: "Document number is required",
              })}
              placeholder="Please enter your document number"
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
          <button type="submit" disabled={loading} aria-busy={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserKycRegistrationPage;
