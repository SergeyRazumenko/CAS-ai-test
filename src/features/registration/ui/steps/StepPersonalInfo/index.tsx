import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import type { UseRegistrationFormResult } from "@/features/registration/hooks/useRegistrationForm";
import { FORM_LABELS } from "@/features/registration/config";
import FormStep from "../FormStep";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";

type StepPersonalInfoProps = {
  formData: RegistrationFormData;
  errors: FormErrors;
  setFieldValue: UseRegistrationFormResult["setFieldValue"];
  goToNextStep: UseRegistrationFormResult["goToNextStep"];
};

const StepPersonalInfo = ({
  formData,
  errors,
  setFieldValue,
  goToNextStep,
}: StepPersonalInfoProps) => {
  return (
    <FormStep>
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
              onChange={(value) => setFieldValue("firstName", value)}
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
              onChange={(value) => setFieldValue("lastName", value)}
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
          onChange={(value) => setFieldValue("email", value)}
        />

        <Input
          id="phone"
          type="tel"
          label={FORM_LABELS.phone}
          value={formData.phone}
          error={errors.phone}
          required
          placeholder="+380 (XX) XXX-XX-XX"
          onChange={(value) => setFieldValue("phone", value)}
        />

        <Input
          id="dateOfBirth"
          type="date"
          label={FORM_LABELS.dateOfBirth}
          value={formData.dateOfBirth}
          onChange={(value) => setFieldValue("dateOfBirth", value)}
        />

        <div className="d-flex justify-content-end registration-form__actions">
          <Button variant="primary" onClick={goToNextStep}>
            Next
            <span className="ms-2" aria-hidden="true">
              →
            </span>
          </Button>
        </div>
      </fieldset>
    </FormStep>
  );
};

export default StepPersonalInfo;
