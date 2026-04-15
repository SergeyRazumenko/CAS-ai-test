import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import type { UseRegistrationFormResult } from "@/features/registration/hooks/useRegistrationForm";
import { FORM_LABELS } from "@/features/registration/config/formLabels";
import Checkbox from "@/shared/ui/Checkbox";
import Button from "@/shared/ui/Button";

type StepConfirmationProps = {
  formData: RegistrationFormData;
  errors: FormErrors;
  updateField: UseRegistrationFormResult["updateField"];
  nextStep: UseRegistrationFormResult["nextStep"];
  prevStep: UseRegistrationFormResult["prevStep"];
};

const StepConfirmation = ({
  formData,
  errors,
  updateField,
  prevStep,
}: StepConfirmationProps) => {
  return (
    <section
      className="registration-form__section"
      aria-labelledby="step-confirmation-title"
    >
      <h2 className="h5 mb-1">Confirmation</h2>
      <p className="text-muted mb-4">Step 3 of 3</p>

      <fieldset>
        <legend id="step-confirmation-title" className="visually-hidden">
          Confirmation
        </legend>

        <Checkbox
          id="agreeToTerms"
          label={
            <>
              {FORM_LABELS.agreeToTerms}{" "}
              <a href="#" className="registration-form__link">
                Terms and Conditions
              </a>
            </>
          }
          checked={formData.agreeToTerms}
          error={errors.agreeToTerms}
          required
          onChange={(value) => updateField("agreeToTerms", value)}
        />

        <Checkbox
          id="subscribeToNewsletter"
          label={FORM_LABELS.subscribeToNewsletter}
          checked={formData.subscribeToNewsletter}
          onChange={(value) => updateField("subscribeToNewsletter", value)}
        />

        <div className="d-flex justify-content-between registration-form__actions">
          <Button variant="secondary" onClick={prevStep}>
            <span className="me-2" aria-hidden="true">
              ←
            </span>
            Back
          </Button>

          <Button variant="success" type="submit">
            Submit
            <span className="ms-2" aria-hidden="true">
              ✓
            </span>
          </Button>
        </div>
      </fieldset>
    </section>
  );
};

export default StepConfirmation;
