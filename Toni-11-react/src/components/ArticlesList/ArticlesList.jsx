import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticlesList.module.css';

const articles = [
  { id: 'volvo', title: 'Volvo: A Heritage of Safety and Innovation' },
  { id: 'saab', title: 'Saab: The Aviation Legacy and Automotive Avant-garde' },
  { id: 'koenigsegg', title: 'Koenigsegg: Engineering Beyond Limits' },
  { id: 'scania', title: 'Scania: Powering Global Logistics' },
  { id: 'polestar', title: 'Polestar: The Future of Electric Performance' },
];

const ArticlesList = () => (
  <div className={styles.articlesList}>
    <h2 className={styles.title}>Explore the Articles</h2>
    <ul className={styles.list}>
      {articles.map(article => (
        <li key={article.id} className={styles.listItem}>
          <Link to={`/articles/${article.id}`} className={styles.linkWrapper}>
            <span className={styles.linkText}>{article.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticlesList;