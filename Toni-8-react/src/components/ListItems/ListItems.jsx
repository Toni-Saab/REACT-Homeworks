import React from 'react';
import styles from './ListItems.module.css';

const ListItems = ({ carDetails }) => (
  <div className={styles.listItems__container}>
    {carDetails.map(({ id, model, type, power }, index) => (
      <div key={id} className={styles.listItems__card}>
        <span className={styles.listItems__card__number}>{index + 1}.</span>
        <h3 className={styles.listItems__card__model}>{model}</h3>
        <p className={styles.listItems__card__info}>Type: {type}</p>
        <p className={styles.listItems__card__info}>Power: {power}</p>
      </div>
    ))}
  </div>
);

export default ListItems;