import type { RegistrationFormData } from '../../../types/form.types'
import type { UseRegistrationFormResult } from '../../../hooks/useRegistrationForm'

type StepConfirmationProps = {
  formData: RegistrationFormData
  updateField: UseRegistrationFormResult['updateField']
  nextStep: UseRegistrationFormResult['nextStep']
  prevStep: UseRegistrationFormResult['prevStep']
}

const StepConfirmation = ({ formData, updateField, nextStep, prevStep }: StepConfirmationProps) => {
  return (
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Confirmation</h2>
        <p className="text-muted mb-3">Step 3 placeholder</p>

        <div className="d-flex gap-2 flex-wrap">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => updateField('agreeToTerms', formData.agreeToTerms)}
          >
            Update field (noop)
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={prevStep}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next (noop)
          </button>
        </div>
      </div>
    </section>
  )
}

export default StepConfirmation
