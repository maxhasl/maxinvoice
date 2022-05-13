import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  setContactBillTitleAction,
  setContactBillValueAction,
  setContactFromAction,
  setContactShipTitleAction,
  setContactShipValueAction,
} from '../../redux/features/contact';
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
import {
  setLogoAction,
  setNumberAction,
  setTitleAction,
} from '../../redux/features/main';
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
    dispatch(setTitleAction(value));
  };

  const handleNumber = (value) => {
    dispatch(setNumberAction(value));
  };

  const handleLogo = (value) => {
    dispatch(setLogoAction(value));
  };

  const handleContactFrom = (value) => {
    dispatch(setContactFromAction(value));
  };

  const handleContactBillTitle = (value) => {
    dispatch(setContactBillTitleAction(value));
  };

  const handleContactBillValue = (value) => {
    dispatch(setContactBillValueAction(value));
  };

  const handleContactShipTitle = (value) => {
    dispatch(setContactShipTitleAction(value));
  };

  const handleContactShipValue = (value) => {
    dispatch(setContactShipValueAction(value));
  };

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
