import type { RegistrationStep } from '../../types/form.types'

type StepIndicatorProps = {
  step: RegistrationStep
}

const StepIndicator = ({ step }: StepIndicatorProps) => {
  return (
    <header className="mb-4">
      <h1 className="h4 mb-2">Registration Form</h1>
      <p className="text-muted mb-0">Current step: {step}</p>
    </header>
  )
}

export default StepIndicator
