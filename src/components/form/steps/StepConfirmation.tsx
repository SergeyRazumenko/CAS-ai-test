import type {
  FormErrors,
  RegistrationFormData,
} from "../../../types/form.types";
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
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Confirmation</h2>
        <p className="text-muted mb-3">Step 3 of 3</p>

        <div className="form-check mb-3">
          <input
            id="agreeToTerms"
            type="checkbox"
            className="form-check-input"
            checked={formData.agreeToTerms}
            onChange={(event) =>
              updateField("agreeToTerms", event.target.checked)
            }
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            I agree to terms
          </label>
          {errors.agreeToTerms && <p>{errors.agreeToTerms}</p>}
        </div>

        <div className="form-check mb-3">
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

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={prevStep}
          >
            Back
          </button>
          <button type="button" className="btn btn-success" onClick={nextStep}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepConfirmation;
