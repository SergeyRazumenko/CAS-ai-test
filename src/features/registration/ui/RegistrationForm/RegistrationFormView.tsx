import {
  StepPersonalInfo,
  StepAddress,
  StepConfirmation,
} from "@/features/registration/ui/steps";
import StepIndicator from "@/features/registration/ui/StepIndicator";
import { RegistrationStep } from "@/features/registration/model/types";
import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import type { UseRegistrationFormResult } from "@/features/registration/hooks/useRegistrationForm";
import "./RegistrationForm.scss";

type RegistrationFormViewProps = {
  step: RegistrationStep;
  formData: RegistrationFormData;
  errors: FormErrors;
  goToNextStep: UseRegistrationFormResult["goToNextStep"];
  goToPreviousStep: UseRegistrationFormResult["goToPreviousStep"];
  setFieldValue: UseRegistrationFormResult["setFieldValue"];
};

const RegistrationFormView = ({
  step,
  formData,
  errors,
  goToNextStep,
  goToPreviousStep,
  setFieldValue,
}: RegistrationFormViewProps) => {
  const stepsMap = {
    [RegistrationStep.PersonalInfo]: (
      <StepPersonalInfo
        formData={formData}
        errors={errors}
        setFieldValue={setFieldValue}
        goToNextStep={goToNextStep}
      />
    ),
    [RegistrationStep.Address]: (
      <StepAddress
        formData={formData}
        errors={errors}
        setFieldValue={setFieldValue}
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
      />
    ),
    [RegistrationStep.Confirmation]: (
      <StepConfirmation
        formData={formData}
        errors={errors}
        setFieldValue={setFieldValue}
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
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
                  goToPreviousStep();
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
