import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types";
import { VALIDATION_MESSAGES } from "@/features/registration/model/constants/validationMessages";

const isEmpty = (value: string): boolean => value.trim().length === 0;

const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePersonalInfo = (
  data: RegistrationFormData,
): FormErrors => {
  const errors: FormErrors = {};

  if (isEmpty(data.firstName)) {
    errors.firstName = VALIDATION_MESSAGES.required;
  }
  if (isEmpty(data.lastName)) {
    errors.lastName = VALIDATION_MESSAGES.required;
  }
  if (isEmpty(data.email)) {
    errors.email = VALIDATION_MESSAGES.required;
  } else if (!isValidEmail(data.email)) {
    errors.email = VALIDATION_MESSAGES.email;
  }
  if (isEmpty(data.phone)) {
    errors.phone = VALIDATION_MESSAGES.required;
  }

  return errors;
};

export const validateAddress = (data: RegistrationFormData): FormErrors => {
  const errors: FormErrors = {};

  if (isEmpty(data.country)) {
    errors.country = VALIDATION_MESSAGES.required;
  }
  if (isEmpty(data.city)) {
    errors.city = VALIDATION_MESSAGES.required;
  }

  return errors;
};

export const validateConfirmation = (
  data: RegistrationFormData,
): FormErrors => {
  const errors: FormErrors = {};

  if (!data.agreeToTerms) {
    errors.agreeToTerms = VALIDATION_MESSAGES.agreeToTerms;
  }

  return errors;
};
