import React from "react";
import { useForm } from "react-hook-form";
import "../styles/KycVerifyPage.scss";

type KycFormValues = {
  customerId: number;
  documentType: string;
  documentNumber: string;
};

const KycVerify: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<KycFormValues>();

  const onSubmit = (data: KycFormValues) => {
    console.log("KYC Payload:", data); // FIXME: Remove
  };

  return (
    <div className="kyc-container">
      <div className="kyc-card">
        <h2 className="kyc-title">KYC Verification</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="customerId">Customer ID</label>
            <input
              type="number"
              id="customerId"
              {...register("customerId", {
                required: "Customer ID is required",
                valueAsNumber: true,
              })}
              placeholder="Please enter customer ID"
            />
            {errors.customerId && (
              <span className="error">{errors.customerId.message}</span>
            )}
          </div>
          <div className="document-container">
            <div className="form-group">
              <label htmlFor="documentType">Document Type</label>
              <select
                id="documentType"
                {...register("documentType", {
                  required: "Document type is required",
                })}>
                <option value="">Select Document</option>
                <option value="PAN">PAN</option>
                <option value="AADHAR">Aadhar</option>
                <option value="PASSPORT">Passport</option>
              </select>
              {errors.documentType && (
                <span className="error">{errors.documentType.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="documentNumber">Document Number</label>
              <input
                type="text"
                id="documentNumber"
                {...register("documentNumber", {
                  required: "Document number is required",
                })}
                placeholder="Please enter document number"
              />
              {errors.documentNumber && (
                <span className="error">{errors.documentNumber.message}</span>
              )}
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-btn">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KycVerify;
