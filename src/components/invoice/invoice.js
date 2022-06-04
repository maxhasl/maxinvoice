import cn from 'classnames';
import Contact from '../contact';
import Details from '../details/details';
import Logo from '../logo';
import InputNumber from '../input-number';
import InputTitle from '../input-title';
import styles from './invoice.module.scss';
import List from '../list';

const Invoice = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <div className={styles.form__logo}>
                <Logo />
              </div>
              <Contact />
            </div>
            <div className={cn(styles.form__col, styles.form__col_rtl)}>
              <div className={styles.form__title}>
                <InputTitle />
              </div>
              <div className={styles.form__number}>
                <InputNumber />
              </div>
              <Details />
            </div>
          </div>
          <div className={styles.form__row}>
            <List />
          </div>
        </div>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
