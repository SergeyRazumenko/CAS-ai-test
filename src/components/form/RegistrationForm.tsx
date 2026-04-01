import StepAddress from "./steps/StepAddress";
import StepConfirmation from "./steps/StepConfirmation";
import StepPersonalInfo from "./steps/StepPersonalInfo";
import StepIndicator from "./StepIndicator";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import { RegistrationStep } from "../../types/form.types";

const RegistrationForm = () => {
  const { step, formData, errors, nextStep, prevStep, updateField } =
    useRegistrationForm();

  const renderStep = () => {
    switch (step) {
      case RegistrationStep.PersonalInfo:
        return (
          <StepPersonalInfo
            formData={formData}
            errors={errors}
            updateField={updateField}
            nextStep={nextStep}
          />
        );
      case RegistrationStep.Address:
        return (
          <StepAddress
            formData={formData}
            errors={errors}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case RegistrationStep.Confirmation:
        return (
          <StepConfirmation
            formData={formData}
            errors={errors}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
    }
  };

  return (
    <main className="container py-4">
      <section className="mx-auto" style={{ maxWidth: "720px" }}>
        <StepIndicator step={step} />

        {renderStep()}
      </section>
    </main>
  );
};

export default RegistrationForm;
