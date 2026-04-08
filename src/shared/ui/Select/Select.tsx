type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  value: string;
  options: Option[];
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

const Select = ({
  id,
  label,
  value,
  options,
  error,
  required,
  onChange,
}: SelectProps) => {
  return (
    <div className="mb-3 registration-form__field">
      <label className="form-label" htmlFor={id}>
        {label} {required && "*"}
      </label>

      <select
        id={id}
        className={`form-select ${error ? "is-invalid" : ""}`}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;
