import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@components/HomePage/HomePage';
import ArticlesList from '@components/ArticlesList/ArticlesList';
import ArticlePage from '@components/ArticlePage/ArticlePage';
import Navigation from '@components/Navigation/Navigation';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Navigation />
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </main>
  </div>
);

export default App;