type InputProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const Input = ({
  id,
  label,
  value,
  error,
  required,
  type = "text",
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="mb-3 registration-form__field">
      <label className="form-label" htmlFor={id}>
        {label} {required && "*"}
      </label>

      <input
        id={id}
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
