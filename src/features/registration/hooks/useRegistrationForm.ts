import {
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  initialFormData,
  RegistrationStep,
  type FormErrors,
  type RegistrationFormData,
} from "../../registration/model/types";
import {
  validateStep1,
  validateStep2,
  validateStep3,
} from "../../registration/lib/validation";

type UpdateField = <K extends keyof RegistrationFormData>(
  name: K,
  value: RegistrationFormData[K],
) => void;

export type UseRegistrationFormResult = {
  step: RegistrationStep;
  formData: RegistrationFormData;
  errors: FormErrors;
  setErrors: Dispatch<SetStateAction<FormErrors>>;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: RegistrationStep) => void;
  validateCurrentStep: () => FormErrors;
  updateField: UpdateField;
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
        return validateStep1(formData);
      case RegistrationStep.Address:
        return validateStep2(formData);
      case RegistrationStep.Confirmation:
        return validateStep3(formData);
      default:
        return {};
    }
  }, [formData, step]);

  const nextStep = useCallback(() => {
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

  const prevStep = useCallback(() => {
    setStep((prev) =>
      prev <= RegistrationStep.PersonalInfo
        ? prev
        : ((prev - 1) as RegistrationStep),
    );
  }, []);

  const goToStep = useCallback((target: RegistrationStep) => {
    setStep(target);
  }, []);

  const updateField: UpdateField = useCallback((name, value) => {
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
      nextStep,
      prevStep,
      goToStep,
      validateCurrentStep,
      updateField,
    }),
    [
      errors,
      formData,
      goToStep,
      nextStep,
      prevStep,
      setErrors,
      step,
      updateField,
      validateCurrentStep,
    ],
  );
};
