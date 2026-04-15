import {
  StepPersonalInfo,
  StepAddress,
  StepConfirmation,
} from "@/features/registration/ui/steps";
import StepIndicator from "@/features/registration/ui/StepIndicator";
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
  const stepsMap = {
    [RegistrationStep.PersonalInfo]: (
      <StepPersonalInfo
        formData={formData}
        errors={errors}
        updateField={updateField}
        nextStep={nextStep}
      />
    ),
    [RegistrationStep.Address]: (
      <StepAddress
        formData={formData}
        errors={errors}
        updateField={updateField}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    [RegistrationStep.Confirmation]: (
      <StepConfirmation
        formData={formData}
        errors={errors}
        updateField={updateField}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
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
              {stepsMap[step]}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationFormView;
