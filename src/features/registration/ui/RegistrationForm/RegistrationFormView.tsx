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
  handleSubmit: UseRegistrationFormResult["handleSubmit"];
  isSubmitting: UseRegistrationFormResult["isSubmitting"];
};

const RegistrationFormView = ({
  step,
  formData,
  errors,
  goToNextStep,
  goToPreviousStep,
  setFieldValue,
  handleSubmit,
  isSubmitting,
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
        isSubmitting={isSubmitting}
      />
    ),
  };

  return (
    <main className="container py-4 py-md-5">
      <section className="mx-auto registration-form-wrapper">
        <StepIndicator step={step} />
        <div
          key={step}
          className="registration-form card border-0 shadow-sm registration-form--animated"
        >
          <div className="card-body registration-form__body">
            <form
              className="registration-form__content"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
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
