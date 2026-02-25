import { useMutation, useQuery } from "@tanstack/react-query";
import { createOnboarding, getOnboardingStatus } from "./onboarding.api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useCreateOnboarding = () => {
  return useMutation({
    mutationFn: createOnboarding,
  });
};

export const useOnboardingStatus = (customerId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ONBOARDING_STATUS, customerId],
    queryFn: () => getOnboardingStatus(customerId),
    enabled: !!customerId,
  });
};
