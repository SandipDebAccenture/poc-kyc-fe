import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient } from "../lib/axios";
import "../styles/KycVerifyPage.scss";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import { USER_KYC_VERIFICATION_VALUES } from "../constants/formInputs";

type KycFormValues = {
  customerId: number;
  documentType: string;
  documentNumber: string;
};

const KycVerify: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const customerInfo: string | null = localStorage.getItem("onboarding_info");
  const customerId: number | null = customerInfo
    ? JSON.parse(customerInfo).customerId
    : null;

  const isCustomerIdDisabled = !!customerId;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<KycFormValues>({
    defaultValues: {
      ...USER_KYC_VERIFICATION_VALUES,
      customerId: customerId || undefined,
    },
  });

  const onSubmit = async (data: KycFormValues) => {
    setLoading(true);
    try {
      const response = await apiClient.post("/api/kyc/verify", data);
      toast.success(response.data.message || "KYC verified successfully", {
        duration: 3000,
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(
        axiosError.response?.data?.message || "Failed to verify KYC",
        {
          duration: 3000,
        },
      );
    } finally {
      setLoading(false);
    }
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
              disabled={isCustomerIdDisabled}
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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KycVerify;
