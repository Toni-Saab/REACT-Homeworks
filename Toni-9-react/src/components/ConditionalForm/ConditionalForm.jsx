import { useForm } from 'react-hook-form';
import styles from './ConditionalForm.module.css';

export default function ConditionalForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstField = watch('firstField') || '';

  const showSecondField = shouldShowSecond(firstField);

  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormBlock
        label="First Field"
        placeholder="At least 5 chars, 1 digit, 1 uppercase"
        error={errors.firstField}
        register={register('firstField', {
          required: true,
          minLength: 5,
          validate: {
            hasUppercase,
            hasDigit,
          },
        })}
      />

      {showSecondField && (
        <FormBlock
          label="Second Field"
          placeholder="You're allowed here now"
          register={register('secondField')}
        />
      )}

      <button className={styles.submit} type="submit">Submit</button>
    </form>
  );
};

function FormBlock({ label, placeholder, register, error }) {
  return (
    <div className={styles.block}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} placeholder={placeholder} {...register} />
      {error && <div className={styles.error}>Invalid input</div>}
    </div>
  );
};

function shouldShowSecond(value) {
  return value.length >= 5 && hasUppercase(value) && hasDigit(value);
};

function hasUppercase(value) {
  return /[A-Z]/.test(value);
};

function hasDigit(value) {
  return /\d/.test(value);
};
