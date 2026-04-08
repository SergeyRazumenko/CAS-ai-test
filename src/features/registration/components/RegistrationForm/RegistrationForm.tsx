import StepAddress from "../StepsRegistration/StepAddress/StepAddress";
import StepConfirmation from "../StepsRegistration/StepConfirmation/StepConfirmation";
import StepPersonalInfo from "../StepsRegistration/StepPersonalInfo/StepPersonalInfo";
import StepIndicator from "../StepIndicator/StepIndicator";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import { RegistrationStep } from "../../model/enums";
import "./RegistrationForm.scss";

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
    <main className="container py-4 py-md-5">
      <section className="mx-auto registration-form-wrapper">
        <StepIndicator step={step} />
        <div
          key={step}
          className="registration-form card border-0 shadow-sm form-card-animation"
        >
          <div className="card-body registration-form__body">
            <form className="registration-form__content" noValidate>
              {renderStep()}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationForm;
