import { RegistrationStep } from "@/features/registration/model/types";
import "./StepIndicator.scss";

type StepIndicatorProps = {
  step: RegistrationStep;
};

const StepIndicator = ({ step }: StepIndicatorProps) => {
  const steps = [1, 2, 3] as const;

  return (
    <header className="registration-form-wrapper__step mb-3 mb-md-4">
      <ol
        className="step-indicator list-unstyled mb-0"
        aria-label="Form progress"
      >
        {steps.map((item, index) => {
          const isCompleted = step > item;
          const isActive = step === item;
          const isLineActive = step > item;

          return (
            <li
              key={item}
              className={`step-indicator__item 
                ${isActive ? "step-indicator__item--active" : ""} 
                ${isCompleted ? "step-indicator__item--completed" : ""}
              `}
              aria-current={isActive ? "step" : undefined}
            >
              <div className="step-indicator__circle" aria-hidden="true">
                {isCompleted ? "✓" : item}
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`step-indicator__line 
                    ${isLineActive ? "step-indicator__line--active" : ""}
                  `}
                />
              )}
            </li>
          );
        })}
      </ol>
    </header>
  );
};

export default StepIndicator;
