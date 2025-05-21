import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({ userData: null, isLoading: true, hasError: null });

  const grabFreshUser = async () => {
    setProfile(prevState => ({ ...prevState, isLoading: true, hasError: null }));
    try {
      const { data } = await axios('https://randomuser.me/api');
      setProfile({ userData: data.results[0], isLoading: false, hasError: null });
    } catch (err) {
      console.error('Fetching boomed:', err);
      setProfile({ userData: null, isLoading: false, hasError: 'Failed to snag a user.' });
    }
  };

  useEffect(() => {
    grabFreshUser();
  }, []);

  const renderContent = () =>
    profile.isLoading ? (
      <div className={styles.loading}>Spinning up...</div>
    ) : profile.hasError ? (
      <div className={styles.error}>{profile.hasError}</div>
    ) : profile.userData ? (
      <FragmentRender user={profile.userData} onReload={grabFreshUser} />
    ) : null;

  return <div className={styles.userProfile}>{renderContent()}</div>;
};

const FragmentRender = ({ user, onReload }) => {
  const { name, email, picture, location } = user;
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={picture.large} alt={`${name.first} ${name.last}`} className={styles.avatar} />
      </div>
      <section className={styles.info}>
        <h2 className={styles.name}>
          {name.first} {name.last}
        </h2>
        <p className={styles.email}>{email}</p>
        <p className={styles.country}>{location.country}</p>
      </section>
      <button className={styles.loadButton} onClick={onReload}>
        Gimme Another One!
      </button>
    </>
  );
};

export default UserProfile;