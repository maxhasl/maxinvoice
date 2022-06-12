import styles from './total.module.scss';

const Total = ({ title, value, getTitle }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.title}
        defaultValue={title}
        onChange={(e) => getTitle(e.target.value || '')}
      />
      <div className={styles.value}>${value.toLocaleString()}</div>
    </div>
  );
};

export default Total;
