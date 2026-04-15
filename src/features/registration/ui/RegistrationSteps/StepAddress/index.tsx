import type {
  FormErrors,
  RegistrationFormData,
} from "@/features/registration/model/types/form.types";
import type { UseRegistrationFormResult } from "@/features/registration/hooks/useRegistrationForm";
import { FORM_LABELS } from "@/features/registration/config/formLabels";
import Select from "@/shared/ui/Select";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";

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

        <Select
          id="country"
          label={FORM_LABELS.country}
          value={formData.country}
          error={errors.country}
          required
          options={[
            { label: "United States", value: "United States" },
            { label: "Canada", value: "Canada" },
            { label: "Ukraine", value: "Ukraine" },
            { label: "Germany", value: "Germany" },
          ]}
          onChange={(value) => updateField("country", value)}
        />

        <Input
          id="city"
          label={FORM_LABELS.city}
          value={formData.city}
          error={errors.city}
          required
          placeholder="Odesa"
          onChange={(value) => updateField("city", value)}
        />

        <Input
          id="streetAddress"
          label={FORM_LABELS.streetAddress}
          value={formData.streetAddress}
          placeholder="123 Main St, Apt 4"
          onChange={(value) => updateField("streetAddress", value)}
        />

        <Input
          id="postalCode"
          label={FORM_LABELS.postalCode}
          value={formData.postalCode}
          placeholder="65000"
          onChange={(value) => updateField("postalCode", value)}
        />

        <div className="d-flex justify-content-between registration-form__actions">
          <Button variant="secondary" onClick={prevStep}>
            <span className="me-2" aria-hidden="true">
              ←
            </span>
            Back
          </Button>

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

export default StepAddress;
