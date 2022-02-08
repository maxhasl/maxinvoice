import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logo__text}>maxINVOICE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
