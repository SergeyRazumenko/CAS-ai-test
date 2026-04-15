type CheckboxProps = {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  error?: string;
  required?: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox = ({
  id,
  label,
  checked,
  error,
  required,
  onChange,
}: CheckboxProps) => {
  return (
    <div className="form-check mb-3 registration-form__field">
      <input
        id={id}
        type="checkbox"
        className={`form-check-input ${error ? "is-invalid" : ""}`}
        checked={checked}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.checked)}
      />

      <label className="form-check-label" htmlFor={id}>
        {label} {required && "*"}
      </label>

      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
