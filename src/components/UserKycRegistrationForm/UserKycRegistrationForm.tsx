import { useForm } from "react-hook-form";
import type { UserFormData } from "./types";
import "./UserKycRegistrationForm.scss";

const UserKycRegistrationForm = () => {
  const { register, handleSubmit } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="form-container">
      <h2>KYC Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />

          <input
            {...register("loginId", { required: true })}
            placeholder="Login ID"
          />
          <input type="date" {...register("dob")} />

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
          />

          <input
            {...register("mobile", {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            placeholder="Mobile"
          />

          <select {...register("gender", { required: true })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input {...register("nationality")} placeholder="Nationality" />
          <input {...register("occupation")} placeholder="Occupation" />

          <input {...register("addressLine1")} placeholder="Address Line 1" />
          <input {...register("addressLine2")} placeholder="Address Line 2" />

          <input {...register("city")} placeholder="City" />
          <input {...register("state")} placeholder="State" />
          <input {...register("country")} placeholder="Country" />

          <input
            {...register("pincode", {
              pattern: /^[0-9]{6}$/,
            })}
            placeholder="Pincode"
          />

          <select {...register("documentType")}>
            <option value="">Select Document Type</option>
            <option value="PAN">PAN</option>
            <option value="Aadhar">Aadhar</option>
            <option value="Passport">Passport</option>
          </select>

          <input
            {...register("documentNumber")}
            placeholder="Document Number"
          />
        </div>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserKycRegistrationForm;
