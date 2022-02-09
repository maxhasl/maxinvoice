import InputFile from '../input-file';
import InputTextarea from '../input-textarea';
import styles from './invoice.module.scss';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form>
          <InputFile />
          <InputTextarea placeholder="Who is this invoice to? (required)" />
        </form>
      </div>
    </section>
  );
};

export default Invoice;
