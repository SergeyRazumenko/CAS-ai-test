import StepAddress from './steps/StepAddress'
import StepConfirmation from './steps/StepConfirmation'
import StepPersonalInfo from './steps/StepPersonalInfo'
import StepIndicator from './StepIndicator'

const RegistrationForm = () => {
  return (
    <main className="container py-4">
      <section className="mx-auto" style={{ maxWidth: '720px' }}>
        <StepIndicator />
        <StepPersonalInfo />
        <StepAddress />
        <StepConfirmation />
      </section>
    </main>
  )
}

export default RegistrationForm
