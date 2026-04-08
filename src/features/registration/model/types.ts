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
