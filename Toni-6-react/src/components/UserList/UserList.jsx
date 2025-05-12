import React from 'react';
import UserCard from 'components/UserCard/UserCard';
import styles from './UserList.module.css';

function UserList({ users }) {
  return (
    <ul className={styles.userList}>
      {users.map(user => <li key={user.id} className={styles.userItem}><UserCard user={user} /></li>)}
    </ul>
  );
}

export default UserList;