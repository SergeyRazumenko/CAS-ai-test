import type { FormErrors, RegistrationFormData } from "../../../model/types";
import type { UseRegistrationFormResult } from "../../../hooks/useRegistrationForm";

type StepAddressProps = {
  formData: RegistrationFormData;
  errors: FormErrors;
  updateField: UseRegistrationFormResult["updateField"];
  nextStep: UseRegistrationFormResult["nextStep"];
  prevStep: UseRegistrationFormResult["prevStep"];
};

const StepAddress = ({
  formData,
  errors,
  updateField,
  nextStep,
  prevStep,
}: StepAddressProps) => {
  return (
    <section
      className="registration-form__section"
      aria-labelledby="step-address-title"
    >
      <h2 className="h5 mb-1">Address</h2>
      <p className="text-muted mb-4">Step 2 of 3</p>
      <fieldset>
        <legend id="step-address-title" className="visually-hidden">
          Address
        </legend>

        <div className="mb-3 registration-form__field">
          <label className="form-label" htmlFor="country">
            Country *
          </label>
          <select
            id="country"
            className={`form-select ${errors.country ? "is-invalid" : ""}`}
            required
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "country-error" : undefined}
            value={formData.country}
            onChange={(event) => updateField("country", event.target.value)}
          >
            <option value="">Select country...</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Germany">Germany</option>
          </select>
          {errors.country && (
            <div id="country-error" className="invalid-feedback d-block">
              {errors.country}
            </div>
          )}
        </div>

        <div className="mb-3 registration-form__field">
          <label className="form-label" htmlFor="city">
            City *
          </label>
          <input
            id="city"
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
            required
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city-error" : undefined}
            placeholder="Odesa"
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
          {errors.city && (
            <div id="city-error" className="invalid-feedback d-block">
              {errors.city}
            </div>
          )}
        </div>

        <div className="mb-3 registration-form__field">
          <label className="form-label" htmlFor="streetAddress">
            Street address
          </label>
          <input
            id="streetAddress"
            className="form-control"
            placeholder="123 Main St, Apt 4"
            value={formData.streetAddress}
            onChange={(event) =>
              updateField("streetAddress", event.target.value)
            }
          />
        </div>

        <div className="mb-4 registration-form__field">
          <label className="form-label" htmlFor="postalCode">
            ZIP / Postal code
          </label>
          <input
            id="postalCode"
            className="form-control"
            placeholder="65000"
            value={formData.postalCode}
            onChange={(event) => updateField("postalCode", event.target.value)}
          />
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
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
            <span className="ms-2" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </fieldset>
    </section>
  );
};

export default StepAddress;
