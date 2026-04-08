import type { FormErrors, RegistrationFormData } from "../../../model/types";
import type { UseRegistrationFormResult } from "../../../hooks/useRegistrationForm";

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
  nextStep,
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

        <div className="form-check mb-3 registration-form__field">
          <input
            id="agreeToTerms"
            type="checkbox"
            className={`form-check-input ${errors.agreeToTerms ? "is-invalid" : ""}`}
            required
            aria-invalid={Boolean(errors.agreeToTerms)}
            aria-describedby={
              errors.agreeToTerms ? "agreeToTerms-error" : undefined
            }
            checked={formData.agreeToTerms}
            onChange={(event) =>
              updateField("agreeToTerms", event.target.checked)
            }
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            I agree to the{" "}
            <a href="#" className="registration-form__link">
              Terms and Conditions
            </a>{" "}
            *
          </label>
          {errors.agreeToTerms && (
            <div id="agreeToTerms-error" className="invalid-feedback d-block">
              {errors.agreeToTerms}
            </div>
          )}
        </div>

        <div className="form-check mb-4 registration-form__field">
          <input
            id="subscribeToNewsletter"
            type="checkbox"
            className="form-check-input"
            checked={formData.subscribeToNewsletter}
            onChange={(event) =>
              updateField("subscribeToNewsletter", event.target.checked)
            }
          />
          <label className="form-check-label" htmlFor="subscribeToNewsletter">
            Subscribe to newsletter
          </label>
        </div>

        <div className="d-flex justify-content-between registration-form__actions">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={prevStep}
          >
            <span className="me-2" aria-hidden="true">
              ←
            </span>
            Back
          </button>
          <button type="button" className="btn btn-success" onClick={nextStep}>
            Submit
            <span className="ms-2" aria-hidden="true">
              ✓
            </span>
          </button>
        </div>
      </fieldset>
    </section>
  );
};

export default StepConfirmation;
