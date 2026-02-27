export const USER_KYC_REGISTRATION_VALUES = {
  loginId: "john",
  firstName: "John",
  lastName: "Doe",
  dob: "1995-06-15",
  email: "johndoe@example.com",
  password: "abcdef",
  mobile: "9876543210",
  gender: "Male",
  nationality: "American",
  occupation: "Software Engineer",
  addressLine1: "123 Main Street",
  addressLine2: "Apt 4B",
  city: "New York",
  state: "NY",
  country: "USA",
  pincode: "100001",
  documentType: "PAN",
  documentNumber: "X1234567",
} as const;

export const USER_AUTH_VALUES = {
  username: "John",
  password: "abcdef",
  confirmPassword: "abcdef",
} as const;

export const USER_KYC_VERIFICATION_VALUES = {
  customerId: undefined,
  documentType: "PAN",
  documentNumber: "X1234567",
} as const;
