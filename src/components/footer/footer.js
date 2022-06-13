import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <a
        href="https://github.com/maxhasl/maxinvoice"
        target="_blank"
        className={styles.link}
      >
        MADE BY maxhasl
      </a>
    </footer>
  );
};

export default Footer;
