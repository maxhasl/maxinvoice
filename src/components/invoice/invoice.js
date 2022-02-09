import InputFile from '../input-file';
import InputTextarea from '../input-textarea';
import styles from './invoice.module.scss';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form__col}>
            <InputFile />
            <InputTextarea placeholder="Who is this invoice to? (required)" />
          </div>
          <div className={styles.form__col}>
            <InputFile />
            <InputTextarea placeholder="Who is this invoice to? (required)" />
          </div>
        </form>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
