import type { RegistrationFormData } from '../../../types/form.types'
import type { UseRegistrationFormResult } from '../../../hooks/useRegistrationForm'

type StepAddressProps = {
  formData: RegistrationFormData
  updateField: UseRegistrationFormResult['updateField']
  nextStep: UseRegistrationFormResult['nextStep']
  prevStep: UseRegistrationFormResult['prevStep']
}

const StepAddress = ({ formData, updateField, nextStep, prevStep }: StepAddressProps) => {
  return (
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Address</h2>
        <p className="text-muted mb-3">Step 2 placeholder</p>

        <div className="d-flex gap-2 flex-wrap">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => updateField('city', formData.city)}
          >
            Update field (noop)
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={prevStep}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default StepAddress
