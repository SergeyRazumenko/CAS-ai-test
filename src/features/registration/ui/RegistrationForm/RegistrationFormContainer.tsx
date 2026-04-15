import { useRegistrationForm } from "@/features/registration/hooks/useRegistrationForm";
import RegistrationFormView from "./RegistrationFormView";

const RegistrationFormContainer = () => {
  const { step, formData, errors, nextStep, prevStep, updateField } =
    useRegistrationForm();

  return (
    <RegistrationFormView
      step={step}
      formData={formData}
      errors={errors}
      nextStep={nextStep}
      prevStep={prevStep}
      updateField={updateField}
    />
  );
};

export default RegistrationFormContainer;
