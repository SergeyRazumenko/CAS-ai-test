import type {
  FormErrors,
  RegistrationFormData,
} from "../../../types/form.types";
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
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Address</h2>
        <p className="text-muted mb-3">Step 2 of 3</p>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            className="form-control"
            value={formData.country}
            onChange={(event) => updateField("country", event.target.value)}
          />
          {errors.country && <p>{errors.country}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input
            id="city"
            className="form-control"
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="streetAddress">
            Street address
          </label>
          <input
            id="streetAddress"
            className="form-control"
            value={formData.streetAddress}
            onChange={(event) =>
              updateField("streetAddress", event.target.value)
            }
          />
          {errors.streetAddress && <p>{errors.streetAddress}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="postalCode">
            Postal code
          </label>
          <input
            id="postalCode"
            className="form-control"
            value={formData.postalCode}
            onChange={(event) => updateField("postalCode", event.target.value)}
          />
          {errors.postalCode && <p>{errors.postalCode}</p>}
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={prevStep}
          >
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepAddress;
