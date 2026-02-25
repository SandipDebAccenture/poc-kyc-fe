import { apiClient } from "../../lib/axios";

export const verifyKyc = async (data: unknown) => {
  const response = await apiClient.post("/api/kyc/verify", data);
  return response.data;
};

export const getKycStatus = async (customerId: string) => {
  const response = await apiClient.get(`/api/kyc/status/${customerId}`);
  return response.data;
};
