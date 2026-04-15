import { useRegistrationForm } from "@/features/registration/hooks/useRegistrationForm";
import RegistrationFormView from "./RegistrationFormView";

const RegistrationFormContainer = () => {
  const {
    step,
    formData,
    errors,
    goToNextStep,
    goToPreviousStep,
    setFieldValue,
  } = useRegistrationForm();

  return (
    <RegistrationFormView
      step={step}
      formData={formData}
      errors={errors}
      goToNextStep={goToNextStep}
      goToPreviousStep={goToPreviousStep}
      setFieldValue={setFieldValue}
    />
  );
};

export default RegistrationFormContainer;
