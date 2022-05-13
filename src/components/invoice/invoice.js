import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import InputFile from '../input-file';
import InputGroup from '../input-group';
import InputNumber from '../input-number';
import InputTextarea from '../input-textarea';
import InputTitle from '../input-title';
import styles from './invoice.module.scss';

const Invoice = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.main.title);
  const number = useSelector((state) => state.main.number);
  const { placeholder: logoPlacehplder, value: logoValue } = useSelector(
    (state) => state.main.logo
  );

  const { placeholder: contactFromPlaceholder, value: contactFromValue } =
    useSelector((state) => state.contact.from);

  const {
    placeholder: contactFromBillPlaceholder,
    title: contactFromBillName,
    value: contactFromBillValue,
  } = useSelector((state) => state.contact.bill);

  const {
    placeholder: contactFromShipPlaceholder,
    title: contactFromShipName,
    value: contactFromShipValue,
  } = useSelector((state) => state.contact.ship);

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

  const handleTitle = (value) => {
    dispatch({ type: 'SET_TITLE', payload: value });
  };

  const handleNumber = (value) => {
    dispatch({ type: 'SET_NUMBER', payload: value });
  };

  const handleLogo = (value) => {
    console.log(value);
    dispatch({ type: 'SET_LOGO', payload: value });
  };

  const handleContactFrom = (value) => {
    dispatch({ type: 'SET_CONTACT_FROM', payload: value });
  };

  const handleContactBillTitle = (value) => {
    dispatch({ type: 'SET_CONTACT_BILL_TITLE', payload: value });
  };

  const handleContactBillValue = (value) => {
    dispatch({ type: 'SET_CONTACT_BILL_VALUE', payload: value });
  };

  const handleContactShipTitle = (value) => {
    dispatch({ type: 'SET_CONTACT_SHIP_TITLE', payload: value });
  };

  const handleContactShipValue = (value) => {
    dispatch({ type: 'SET_CONTACT_SHIP_VALUE', payload: value });
  };

  const handleDetailsDateTitle = (value) => {
    dispatch({ type: 'SET_DETAILS_DATE_TITLE', payload: value });
  };

  const handleDetailsDateValue = (value) => {
    dispatch({ type: 'SET_DETAILS_DATE_VALUE', payload: value });
  };

  const handleDetailsTermsTitle = (value) => {
    dispatch({ type: 'SET_DETAILS_TERMS_TITLE', payload: value });
  };

  const handleDetailsTermsValue = (value) => {
    dispatch({ type: 'SET_DETAILS_TERMS_VALUE', payload: value });
  };

  const handleDetailsDueDateTitle = (value) => {
    dispatch({ type: 'SET_DETAILS_DUE_DATE_TITLE', payload: value });
  };

  const handleDetailsDueDateValue = (value) => {
    dispatch({ type: 'SET_DETAILS_DUE_DATE_VALUE', payload: value });
  };

  const handleDetailsPONumberTitle = (value) => {
    dispatch({ type: 'SET_DETAILS_PO_NUMBER_TITLE', payload: value });
  };

  const handleDetailsPONumberValue = (value) => {
    dispatch({ type: 'SET_DETAILS_PO_NUMBER_VALUE', payload: value });
  };

  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.form__logo}>
              <InputFile
                initialValue={logoValue}
                getValue={handleLogo}
                placeholder={logoPlacehplder}
              />
            </div>
            <div className={styles.form__area_m}>
              <InputTextarea
                initialValue={contactFromValue}
                getValue={handleContactFrom}
                placeholder={contactFromPlaceholder}
              />
            </div>
            <div className={styles.form__row_s}>
              <div className={styles.form__col}>
                <InputGroup
                  initialName={contactFromBillName}
                  getName={handleContactBillTitle}
                  initialValue={contactFromBillValue}
                  getValue={handleContactBillValue}
                  placeholder={contactFromBillPlaceholder}
                  type="col"
                  child="textarea"
                />
              </div>
              <div className={styles.form__col}>
                <InputGroup
                  initialName={contactFromShipName}
                  getName={handleContactShipTitle}
                  initialValue={contactFromShipValue}
                  getValue={handleContactShipValue}
                  placeholder={contactFromShipPlaceholder}
                  type="col"
                  child="textarea"
                />
              </div>
            </div>
          </div>
          <div className={cn(styles.form__col, styles.form__col_rtl)}>
            <div className={styles.form__title}>
              <InputTitle initialValue={title} handleTitle={handleTitle} />
            </div>
            <div className={styles.form__number}>
              <InputNumber initialValue={number} getValue={handleNumber} />
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
