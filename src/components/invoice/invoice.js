import cn from 'classnames';
import Logo from '../logo';
import Contact from '../contact';
import Title from '../title';
import Number from '../number';
import Details from '../details/details';
import List from '../list';
import Description from '../description';
import Estimation from '../estimation';

import styles from './invoice.module.scss';

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
                <Title />
              </div>
              <div className={styles.form__number}>
                <Number />
              </div>
              <Details />
            </div>
          </div>
          <div className={styles.form__row}>
            <List />
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <Description />
            </div>
            <div className={cn(styles.form__col, styles.form__col_rtl)}>
              <Estimation />
            </div>
          </div>
        </div>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
