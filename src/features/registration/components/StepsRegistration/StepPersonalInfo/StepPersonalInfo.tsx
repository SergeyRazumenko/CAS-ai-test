import type { FormErrors, RegistrationFormData } from "../../../model/types";
import type { UseRegistrationFormResult } from "../../../hooks/useRegistrationForm";
import { FORM_LABELS } from "../../../model/constants/labels";

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
          <div className="col-md-6 mb-3 registration-form__field">
            <label className="form-label" htmlFor="firstName">
              {FORM_LABELS.firstName} *
            </label>
            <input
              id="firstName"
              placeholder="John"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              required
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              value={formData.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
            />
            {errors.firstName && (
              <div id="firstName-error" className="invalid-feedback d-block">
                {errors.firstName}
              </div>
            )}
          </div>

          <div className="col-md-6 mb-3 registration-form__field">
            <label className="form-label" htmlFor="lastName">
              {FORM_LABELS.lastName} *
            </label>
            <input
              id="lastName"
              placeholder="Doe"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              required
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              value={formData.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
            />
            {errors.lastName && (
              <div id="lastName-error" className="invalid-feedback d-block">
                {errors.lastName}
              </div>
            )}
          </div>
        </div>

        <div className="mb-3 registration-form__field">
          <label className="form-label" htmlFor="email">
            {FORM_LABELS.email} *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
          {errors.email && (
            <div id="email-error" className="invalid-feedback d-block">
              {errors.email}
            </div>
          )}
        </div>

        <div className="mb-3 registration-form__field">
          <label className="form-label" htmlFor="phone">
            {FORM_LABELS.phone} *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+380 (XX) XXX-XX-XX"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          {errors.phone && (
            <div id="phone-error" className="invalid-feedback d-block">
              {errors.phone}
            </div>
          )}
        </div>

        <div className="mb-4 registration-form__field">
          <label className="form-label" htmlFor="dateOfBirth">
            {FORM_LABELS.dateOfBirth}
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className="form-control"
            value={formData.dateOfBirth}
            onChange={(event) => updateField("dateOfBirth", event.target.value)}
          />
        </div>

        <div className="d-flex justify-content-end registration-form__actions">
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

export default StepPersonalInfo;
