import type { RegistrationFormData } from "@/features/registration/model/types/form.types";

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
