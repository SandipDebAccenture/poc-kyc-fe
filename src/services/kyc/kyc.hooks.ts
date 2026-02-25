import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyKyc, getKycStatus } from "./kyc.api";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useVerifyKyc = () => {
  return useMutation({
    mutationFn: verifyKyc,
  });
};

export const useKycStatus = (customerId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.KYC_STATUS, customerId],
    queryFn: () => getKycStatus(customerId),
    enabled: !!customerId,
  });
};
