type Props = {
  children: React.ReactNode;
};

const FormStep = ({ children }: Props) => {
  return <section className="registration-form__section">{children}</section>;
};

export default FormStep;
