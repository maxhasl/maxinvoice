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
    <main className={styles.wrap}>
      <div className={cn(styles.row, styles.row_header)}>
        <div className={styles.col}>
          <Logo />
        </div>
        <div className={cn(styles.col, styles.col_rtl)}>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.number}>
            <Number />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.contact}>
            <Contact />
          </div>
        </div>
        <div className={cn(styles.col, styles.col_rtl)}>
          <div className={styles.details}>
            <Details />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.list}>
          <List />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Description />
        </div>
        <div className={cn(styles.col, styles.col_rtl)}>
          <div className={styles.estimation}>
            <Estimation />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Invoice;
