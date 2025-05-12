import React from 'react';
import styles from './UserCard.module.css';

function UserCard({ user }) {
  const avatarUrl = `https://i.pravatar.cc/150?u=${user.id+10}`;
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${avatarUrl})` }}>
      <div className={styles.info}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.username}>@{user.username}</p>
        <p className={styles.email}>{user.email}</p>
        <div className={styles.company}>
          <h3 className={styles.companyName}>{user.company.name}</h3>
          <p className={styles.catchPhrase}>{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;