import { useCallback, useMemo, useState } from 'react'

import { initialFormData, RegistrationStep, type RegistrationFormData } from '../types/form.types'

type UpdateField = <K extends keyof RegistrationFormData>(
  name: K,
  value: RegistrationFormData[K],
) => void

export type UseRegistrationFormResult = {
  step: RegistrationStep
  formData: RegistrationFormData
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: RegistrationStep) => void
  updateField: UpdateField
}

export const useRegistrationForm = (): UseRegistrationFormResult => {
  const [step, setStep] = useState<RegistrationStep>(RegistrationStep.PersonalInfo)
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData)

  const nextStep = useCallback(() => {
    setStep((prev) => (prev >= RegistrationStep.Confirmation ? prev : (prev + 1) as RegistrationStep))
  }, [])

  const prevStep = useCallback(() => {
    setStep((prev) => (prev <= RegistrationStep.PersonalInfo ? prev : (prev - 1) as RegistrationStep))
  }, [])

  const goToStep = useCallback((target: RegistrationStep) => {
    setStep(target)
  }, [])

  const updateField: UpdateField = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  return useMemo(
    () => ({
      step,
      formData,
      nextStep,
      prevStep,
      goToStep,
      updateField,
    }),
    [formData, goToStep, nextStep, prevStep, step, updateField],
  )
}
