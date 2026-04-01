import type {
  FormErrors,
  RegistrationFormData,
} from "../../../types/form.types";
import type { UseRegistrationFormResult } from "../../../hooks/useRegistrationForm";

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
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Personal info</h2>
        <p className="text-muted mb-3">Step 1 of 3</p>

        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="form-control"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="dateOfBirth">
            Date of birth
          </label>
          <input
            id="dateOfBirth"
            className="form-control"
            value={formData.dateOfBirth}
            onChange={(event) => updateField("dateOfBirth", event.target.value)}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepPersonalInfo;
