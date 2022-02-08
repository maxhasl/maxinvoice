import InputFile from '../input-file';
import styles from './invoice.module.scss';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form>
          <InputFile />
        </form>
      </div>
    </section>
  );
};

export default Invoice;
