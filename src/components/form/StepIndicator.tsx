import type { RegistrationStep } from "../../types/form.types";

type StepIndicatorProps = {
  step: RegistrationStep;
};

const StepIndicator = ({ step }: StepIndicatorProps) => {
  const steps = [1, 2, 3] as const;

  return (
    <header className="registration-form-wrapper__step mb-3 mb-md-4">
      <ol className="step-indicator list-unstyled mb-0" aria-label="Form progress">
        {steps.map((item, index) => {
          const state = step > item ? "completed" : step === item ? "active" : "upcoming";
          const lineState = step > item ? "active" : "upcoming";

          return (
            <li
              key={item}
              className={`step-indicator__item ${state}`}
              aria-current={step === item ? "step" : undefined}
            >
              <div className="step-indicator__circle" aria-hidden="true">
                {item}
              </div>
              {index < steps.length - 1 && (
                <div className={`step-indicator__line ${lineState}`} />
              )}
            </li>
          );
        })}
      </ol>
    </header>
  );
};

export default StepIndicator;
