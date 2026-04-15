import StepAddress from "@/features/registration/ui/RegistrationSteps/StepAddress";
import StepConfirmation from "@/features/registration/ui/RegistrationSteps/StepConfirmation";
import StepPersonalInfo from "@/features/registration/ui/RegistrationSteps/StepPersonalInfo";
import StepIndicator from "@/features/registration/ui/RegistrationStepsIndicator";
import { RegistrationStep } from "@/features/registration/model/types/registrationStep.types";
import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import type { UseRegistrationFormResult } from "@/features/registration/hooks/useRegistrationForm";
import "./RegistrationForm.scss";

type Props = {
  step: RegistrationStep;
  formData: RegistrationFormData;
  errors: FormErrors;
  nextStep: UseRegistrationFormResult["nextStep"];
  prevStep: UseRegistrationFormResult["prevStep"];
  updateField: UseRegistrationFormResult["updateField"];
};

const RegistrationFormView = ({
  step,
  formData,
  errors,
  nextStep,
  prevStep,
  updateField,
}: Props) => {
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
            <form
              className="registration-form__content"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();

                if (step === RegistrationStep.Confirmation) {
                  nextStep();
                }
              }}
            >
              {renderStep()}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationFormView;
