export const RegistrationStep = {
  PersonalInfo: 1,
  Address: 2,
  Confirmation: 3,
} as const;

export type RegistrationStep =
  (typeof RegistrationStep)[keyof typeof RegistrationStep];

export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  agreeToTerms: boolean;
  subscribeToNewsletter: boolean;
};

export type FormErrors = Partial<Record<keyof RegistrationFormData, string>>;

export type TouchedFields = Partial<
  Record<keyof RegistrationFormData, boolean>
>;

export const initialFormData: RegistrationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  country: "",
  city: "",
  streetAddress: "",
  postalCode: "",
  agreeToTerms: false,
  subscribeToNewsletter: false,
};
