import React from "react";
import UserKycRegistrationForm from "../components/UserKycRegistrationForm";
import "../styles/kycRegistrationPage.scss";

const KycRegistrationPage: React.FC = () => {
  return (
    <div className="kyc-registration-page">
      <h2 className="kyc-registration-title">KYC Registration</h2>
      <UserKycRegistrationForm />
    </div>
  );
};

export default KycRegistrationPage;
