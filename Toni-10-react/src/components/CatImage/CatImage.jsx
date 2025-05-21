import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const loadingMeme = 'https://i.imgur.com/EB3VgYW.gif';

export default function CatImage() {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchCat() {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatUrl(response.data[0].url);
    } catch {
      setCatUrl('');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.loading}>
          <img src={loadingMeme} alt="Loading meme" className={styles.loadingImage} />
          <div>Hold tight, fetching a fresh cat...</div>
        </div>
      )}

      {catUrl && (
        <img
          src={catUrl}
          alt="Cat"
          className={styles.image}
          style={{ display: loading ? 'none' : 'block' }}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      )}

      <button onClick={fetchCat} disabled={loading} className={styles.button}>
        New Cat
      </button>
    </div>
  );
};
