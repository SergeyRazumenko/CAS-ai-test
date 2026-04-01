import type { RegistrationFormData } from '../../../types/form.types'
import type { UseRegistrationFormResult } from '../../../hooks/useRegistrationForm'

type StepPersonalInfoProps = {
  formData: RegistrationFormData
  updateField: UseRegistrationFormResult['updateField']
  nextStep: UseRegistrationFormResult['nextStep']
}

const StepPersonalInfo = ({ formData, updateField, nextStep }: StepPersonalInfoProps) => {
  return (
    <section className="card mb-3">
      <div className="card-body">
        <h2 className="h5 mb-1">Personal info</h2>
        <p className="text-muted mb-3">Step 1 placeholder</p>

        <div className="d-flex gap-2 flex-wrap">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => updateField('firstName', formData.firstName)}
          >
            Update field (noop)
          </button>
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default StepPersonalInfo
