import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrap}>
      <a
        href="https://github.com/maxhasl/maxinvoice"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        MADE BY maxhasl
      </a>
    </footer>
  );
};

export default Footer;
