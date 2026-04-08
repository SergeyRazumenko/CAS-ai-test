import type { FormErrors, RegistrationFormData } from "../../../model/types";
import type { UseRegistrationFormResult } from "../../../hooks/useRegistrationForm";
import { FORM_LABELS } from "../../../model/constants/labels";
import Input from "../../../../../shared/ui/Input/Input";
import Button from "../../../../../shared/ui/Button/Button";

type StepPersonalInfoProps = {
  formData: RegistrationFormData;
  errors: FormErrors;
  updateField: UseRegistrationFormResult["updateField"];
  nextStep: UseRegistrationFormResult["nextStep"];
};

const StepPersonalInfo = ({
  formData,
  errors,
  updateField,
  nextStep,
}: StepPersonalInfoProps) => {
  return (
    <section
      className="registration-form__section"
      aria-labelledby="step-personal-title"
    >
      <h2 className="h5 mb-1">Personal info</h2>
      <p className="text-muted mb-4">Step 1 of 3</p>

      <fieldset>
        <legend id="step-personal-title" className="visually-hidden">
          Personal info
        </legend>

        <div className="row">
          <div className="col-md-6">
            <Input
              id="firstName"
              label={FORM_LABELS.firstName}
              value={formData.firstName}
              error={errors.firstName}
              required
              placeholder="John"
              onChange={(value) => updateField("firstName", value)}
            />
          </div>

          <div className="col-md-6">
            <Input
              id="lastName"
              label={FORM_LABELS.lastName}
              value={formData.lastName}
              error={errors.lastName}
              required
              placeholder="Doe"
              onChange={(value) => updateField("lastName", value)}
            />
          </div>
        </div>

        <Input
          id="email"
          type="email"
          label={FORM_LABELS.email}
          value={formData.email}
          error={errors.email}
          required
          placeholder="john@example.com"
          onChange={(value) => updateField("email", value)}
        />

        <Input
          id="phone"
          type="tel"
          label={FORM_LABELS.phone}
          value={formData.phone}
          error={errors.phone}
          required
          placeholder="+380 (XX) XXX-XX-XX"
          onChange={(value) => updateField("phone", value)}
        />

        <Input
          id="dateOfBirth"
          type="date"
          label={FORM_LABELS.dateOfBirth}
          value={formData.dateOfBirth}
          onChange={(value) => updateField("dateOfBirth", value)}
        />

        <div className="d-flex justify-content-end registration-form__actions">
          <Button variant="primary" onClick={nextStep}>
            Next
            <span className="ms-2" aria-hidden="true">
              →
            </span>
          </Button>
        </div>
      </fieldset>
    </section>
  );
};

export default StepPersonalInfo;
