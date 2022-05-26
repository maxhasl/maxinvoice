import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDetailsDateTitleAction,
  setDetailsDateValueAction,
  setDetailsDueDateTitleAction,
  setDetailsDueDateValueAction,
  setDetailsPONumberTitleAction,
  setDetailsPONumberValueAction,
  setDetailsTermsTitleAction,
  setDetailsTermsValueAction,
} from '../../redux/features/details';
import Contact from '../contact';
import InputFile from '../input-file';
import InputGroup from '../input-group';
import InputNumber from '../input-number';
import InputTitle from '../input-title';
import styles from './invoice.module.scss';

const Invoice = () => {
  const dispatch = useDispatch();

  const { title: detailsDateTitle, value: detailsDateValue } = useSelector(
    (state) => state.details.date
  );

  const { title: detailsTermsTitle, value: detailsTermsValue } = useSelector(
    (state) => state.details.terms
  );

  const { title: detailsDueDateTitle, value: detailsDueDateValue } =
    useSelector((state) => state.details.dueDate);

  const { title: detailsPONumberTitle, value: detailsPONumberValue } =
    useSelector((state) => state.details.poNumber);

  const handleDetailsDateTitle = (value) => {
    dispatch(setDetailsDateTitleAction(value));
  };

  const handleDetailsDateValue = (value) => {
    dispatch(setDetailsDateValueAction(value));
  };

  const handleDetailsTermsTitle = (value) => {
    dispatch(setDetailsTermsTitleAction(value));
  };

  const handleDetailsTermsValue = (value) => {
    dispatch(setDetailsTermsValueAction(value));
  };

  const handleDetailsDueDateTitle = (value) => {
    dispatch(setDetailsDueDateTitleAction(value));
  };

  const handleDetailsDueDateValue = (value) => {
    dispatch(setDetailsDueDateValueAction(value));
  };

  const handleDetailsPONumberTitle = (value) => {
    dispatch(setDetailsPONumberTitleAction(value));
  };

  const handleDetailsPONumberValue = (value) => {
    dispatch(setDetailsPONumberValueAction(value));
  };

  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.form__logo}>
              <InputFile />
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
            <div className={styles.form__details}>
              <InputGroup
                initialName={detailsDateTitle}
                getName={handleDetailsDateTitle}
                initialValue={detailsDateValue}
                getValue={handleDetailsDateValue}
                type="row"
                child="date"
              />
              <InputGroup
                initialName={detailsTermsTitle}
                getName={handleDetailsTermsTitle}
                initialValue={detailsTermsValue}
                getValue={handleDetailsTermsValue}
                type="row"
                child="text"
              />
              <InputGroup
                initialName={detailsDueDateTitle}
                getName={handleDetailsDueDateTitle}
                initialValue={detailsDueDateValue}
                getValue={handleDetailsDueDateValue}
                type="row"
                child="date"
              />
              <InputGroup
                initialName={detailsPONumberTitle}
                getName={handleDetailsPONumberTitle}
                initialValue={detailsPONumberValue}
                getValue={handleDetailsPONumberValue}
                type="row"
                child="text"
              />
            </div>
          </div>
        </form>
        <div>Buttons here</div>
      </div>
    </section>
  );
};

export default Invoice;
