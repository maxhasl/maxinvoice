import { useState } from 'react';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Close } from './close.svg';
import styles from './input-file.module.scss';

const InputFile = ({ initialValue, placeholder, getValue }) => {
  const [image, setImage] = useState(initialValue);

  const getLogoUrl = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      getValue(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeLogo = (e) => {
    e.preventDefault();
    setImage(null);
    getValue(null);
  };

  return (
    <label className={styles.label}>
      <input type="file" className={styles.file} onChange={getLogoUrl} />
      {image ? (
        <div className={styles.imgContainer}>
          <button className={styles.remove} onClick={removeLogo}>
            <Close className={styles.removeIcon} />
          </button>
          <img src={image} alt="Logo" className={styles.img} />
        </div>
      ) : (
        <div className={styles.placeholder}>
          <Plus className={styles.plus} /> {placeholder}
        </div>
      )}
    </label>
  );
};

export default InputFile;
