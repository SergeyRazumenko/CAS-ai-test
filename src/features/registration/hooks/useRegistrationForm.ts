import {
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  type FormErrors,
  type RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import { RegistrationStep } from "@/features/registration/model/types/registrationStep.types";
import { initialFormData } from "@/features/registration/config/initialValues";
import {
  validatePersonalInfo,
  validateAddress,
  validateConfirmation,
} from "@/features/registration/validation/registrationValidation";

type UpdateField = <K extends keyof RegistrationFormData>(
  name: K,
  value: RegistrationFormData[K],
) => void;

export type UseRegistrationFormResult = {
  step: RegistrationStep;
  formData: RegistrationFormData;
  errors: FormErrors;
  setErrors: Dispatch<SetStateAction<FormErrors>>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: RegistrationStep) => void;
  validateCurrentStep: () => FormErrors;
  setFieldValue: UpdateField;
};

export const useRegistrationForm = (): UseRegistrationFormResult => {
  const [step, setStep] = useState<RegistrationStep>(
    RegistrationStep.PersonalInfo,
  );
  const [formData, setFormData] =
    useState<RegistrationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateCurrentStep = useCallback((): FormErrors => {
    switch (step) {
      case RegistrationStep.PersonalInfo:
        return validatePersonalInfo(formData);
      case RegistrationStep.Address:
        return validateAddress(formData);
      case RegistrationStep.Confirmation:
        return validateConfirmation(formData);
      default:
        return {};
    }
  }, [formData, step]);

  const goToNextStep = useCallback(() => {
    const nextErrors = validateCurrentStep();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (step < RegistrationStep.Confirmation) {
      setStep((prev) => (prev + 1) as RegistrationStep);
    } else {
      console.log("Form submitted:", formData);

      setFormData(initialFormData);
      setErrors({});
      setStep(RegistrationStep.PersonalInfo);

      return;
    }
  }, [step, validateCurrentStep, formData]);

  const goToPreviousStep = useCallback(() => {
    setStep((prev) =>
      prev <= RegistrationStep.PersonalInfo
        ? prev
        : ((prev - 1) as RegistrationStep),
    );
  }, []);

  const goToStep = useCallback((target: RegistrationStep) => {
    setStep(target);
  }, []);

  const setFieldValue: UpdateField = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });
  }, []);

  return useMemo(
    () => ({
      step,
      formData,
      errors,
      setErrors,
      goToNextStep,
      goToPreviousStep,
      goToStep,
      validateCurrentStep,
      setFieldValue,
    }),
    [
      errors,
      formData,
      goToStep,
      goToNextStep,
      goToPreviousStep,
      setErrors,
      step,
      setFieldValue,
      validateCurrentStep,
    ],
  );
};
