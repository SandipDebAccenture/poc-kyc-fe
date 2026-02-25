import { apiClient } from "../../lib/axios";

export const createOnboarding = async (data: unknown) => {
  const response = await apiClient.post("/api/onboarding", data);
  return response.data;
};

export const getOnboardingStatus = async (customerId: string) => {
  const response = await apiClient.get(`/api/onboarding/status/${customerId}/`);
  return response.data;
};
