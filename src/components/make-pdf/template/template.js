import ReactDOMServer from 'react-dom/server';
import cn from 'classnames';
import { listAllSelector } from '../../../redux/features/list';
import styles from './template.module.scss';

const template = (state) => {
  const {
    main,
    contact,
    details,
    list,
    description,
    totals,
    addons,
    paid,
    currency,
  } = state;

  const entities = listAllSelector(state);

  return ReactDOMServer.renderToStaticMarkup(
    <div className={styles.wrap}>
      <div className={styles.row}>
        <div className={styles.col}>
          {main.logo.value ? (
            <div className={styles.logo}>
              <img
                src={main.logo.value}
                alt="logo"
                className={styles.logo__img}
              />
            </div>
          ) : null}
          <pre className={styles.re}>{contact.from.value}</pre>
          <div className={styles.row}>
            <div className={styles.col}>
              <h3 className={styles.contact__title}>{contact.bill.title}</h3>
              <pre className={styles.contact__text}>{contact.bill.value}</pre>
            </div>
            {contact.bill.value ? (
              <div className={styles.col}>
                <h3 className={styles.contact__title}>{contact.ship.title}</h3>
                <pre className={styles.contact__text}>{contact.ship.value}</pre>
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.col}>
          <h1 className={styles.title}>{main.title}</h1>
          <h3 className={styles.number}># {main.number}</h3>
          <div className={cn(styles.row, styles.row_end)}>
            <span className={styles.details__title}>{details.date.title}:</span>
            <span className={styles.details__value}>{details.date.value}</span>
          </div>
          {details.terms.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>
                {details.terms.title}:
              </span>
              <span className={styles.details__value}>
                {details.terms.value}
              </span>
            </div>
          ) : null}
          {details.dueDate.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>
                {details.dueDate.title}:
              </span>
              <span className={styles.details__value}>
                {details.dueDate.value}
              </span>
            </div>
          ) : null}
          {details.poNumber.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>
                {details.poNumber.title}:
              </span>
              <span className={styles.details__value}>
                {details.poNumber.value}
              </span>
            </div>
          ) : null}
          <div className={cn(styles.row, styles.row_end)}>
            <div className={styles.balance__wrap}>
              <div className={cn(styles.row, styles.row_end)}>
                <span className={styles.balance__text}>
                  {totals.balanceDue.title}:
                </span>
                <span className={styles.balance__text}>
                  {currency.selected.value}
                  {totals.balanceDue.value.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <section className={styles.listWrap}>
          <ul className={styles.listHeader}>
            <li
              className={cn(
                styles.listHeader__item,
                styles.listHeader__item_big
              )}
            >
              {list.listHeader.name}
            </li>
            <li className={styles.listHeader__item}>
              {list.listHeader.quantity}
            </li>
            <li className={styles.listHeader__item}>{list.listHeader.cost}</li>
            <li className={styles.listHeader__item}>
              {list.listHeader.amount}
            </li>
          </ul>
          <ul className={styles.list}>
            {entities.map((e) => (
              <li className={styles.list__item} key={e.id}>
                <pre className={styles.list__value}>{e.name}</pre>
                <span className={styles.list__value}>{e.quantity}</span>
                <span className={styles.list__value}>
                  {currency.selected.value}
                  {e.cost.toLocaleString()}
                </span>
                <span className={styles.list__value}>
                  {currency.selected.value}
                  {e.amount.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col}>
          <div className={cn(styles.row, styles.row_end)}>
            <span className={styles.details__title}>
              {totals.subtotal.title}:
            </span>
            <span className={styles.details__value}>
              {currency.selected.value}
              {totals.subtotal.value.toLocaleString()}
            </span>
          </div>
          {addons.discount.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>
                {addons.discount.title}:
              </span>
              <span className={styles.details__value}>
                {addons.discount.type === 'cash'
                  ? `${
                      currency.selected.value
                    }${addons.discount.value.toLocaleString()}`
                  : `${addons.discount.value}%`}
              </span>
            </div>
          ) : null}
          {addons.tax.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>{addons.tax.title}:</span>
              <span className={styles.details__value}>
                {addons.tax.type === 'cash'
                  ? `${
                      currency.selected.value
                    }${addons.tax.value.toLocaleString()}`
                  : `${addons.tax.value}%`}
              </span>
            </div>
          ) : null}
          {addons.shipping.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>
                {addons.shipping.title}:
              </span>
              <span className={styles.details__value}>
                {currency.selected.value}
                {addons.shipping.value.toLocaleString()}
              </span>
            </div>
          ) : null}
          <div className={cn(styles.row, styles.row_end)}>
            <span className={styles.details__title}>{totals.total.title}:</span>
            <span className={styles.details__value}>
              {currency.selected.value}
              {totals.total.value.toLocaleString()}
            </span>
          </div>
          {paid.value ? (
            <div className={cn(styles.row, styles.row_end)}>
              <span className={styles.details__title}>{paid.title}:</span>
              <span className={styles.details__value}>
                {currency.selected.value}
                {paid.value.toLocaleString()}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {description.notes.value ? (
        <section className={styles.description}>
          <h3 className={styles.description__title}>
            {description.notes.title}:
          </h3>
          <p className={styles.description__text}>{description.notes.value}</p>
        </section>
      ) : null}
      {description.terms.value ? (
        <section className={styles.description}>
          <h3 className={styles.description__title}>
            {description.terms.title}:
          </h3>
          <pre className={styles.description__text}>
            {description.terms.value}
          </pre>
        </section>
      ) : null}
    </div>
  );
};

export default template;
