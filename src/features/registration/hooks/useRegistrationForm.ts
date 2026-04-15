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
import { RegistrationStep } from "@/features/registration/model/types";
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
  handleSubmit: () => void;
  isSubmitting: boolean;
};

export const useRegistrationForm = (): UseRegistrationFormResult => {
  const [step, setStep] = useState<RegistrationStep>(
    RegistrationStep.PersonalInfo,
  );
  const [formData, setFormData] =
    useState<RegistrationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (Object.keys(nextErrors).length > 0) return;

    if (step < RegistrationStep.Confirmation) {
      setStep((prev) => (prev + 1) as RegistrationStep);
    }
  }, [step, validateCurrentStep]);

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

  const handleSubmit = useCallback(async () => {
    const nextErrors = validateCurrentStep();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 1000));

    console.log("Form submitted:", formData);

    setFormData(initialFormData);
    setErrors({});
    setStep(RegistrationStep.PersonalInfo);

    setIsSubmitting(false);
  }, [formData, validateCurrentStep]);

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
      handleSubmit,
      isSubmitting,
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
      handleSubmit,
      isSubmitting,
    ],
  );
};
