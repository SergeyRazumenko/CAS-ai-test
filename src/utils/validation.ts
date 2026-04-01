import type { FormErrors, RegistrationFormData } from "../types/form.types";

const isEmpty = (value: string): boolean => value.trim().length === 0;

const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validateStep1 = (data: RegistrationFormData): FormErrors => {
  const errors: FormErrors = {};

  if (isEmpty(data.firstName)) {
    errors.firstName = "This field is required";
  }
  if (isEmpty(data.lastName)) {
    errors.lastName = "This field is required";
  }
  if (isEmpty(data.email)) {
    errors.email = "This field is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format";
  }
  if (isEmpty(data.phone)) {
    errors.phone = "This field is required";
  }

  return errors;
};

export const validateStep2 = (data: RegistrationFormData): FormErrors => {
  const errors: FormErrors = {};

  if (isEmpty(data.country)) {
    errors.country = "This field is required";
  }
  if (isEmpty(data.city)) {
    errors.city = "This field is required";
  }

  return errors;
};

export const validateStep3 = (data: RegistrationFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.agreeToTerms) {
    errors.agreeToTerms = "You must agree to the terms";
  }

  return errors;
};
