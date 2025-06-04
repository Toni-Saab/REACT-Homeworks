import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ArticlePage.module.css';

const articleContent = {
  volvo: {
    title: 'Volvo: A Heritage of Safety and Innovation',
    content: `
      Volvo, founded in 1927 in Gothenburg, Sweden, has built its reputation on an unwavering commitment to safety. From the introduction of the three-point seatbelt in 1959 (which they famously made open-source for the benefit of all) to pioneering technologies like side-impact protection and pedestrian detection, Volvo has consistently been at the forefront of automotive safety. Beyond safety, Volvo is known for its durable engineering, practical design, and a strong focus on environmental sustainability, constantly pushing towards electrification and carbon-neutral production.
    `,
  },
  saab: {
    title: 'Saab: The Aviation Legacy and Automotive Avant-garde',
    content: `
      Saab Automobile, a spin-off from the Swedish aerospace company Saab AB, brought an aeronautical approach to car design, resulting in unique, aerodynamic, and often quirky vehicles. Founded in 1945, Saab cars were celebrated for their innovative features, like ignition keys placed between the seats, turbocharged engines, and strong emphasis on ergonomics. Despite its eventual bankruptcy, Saab left an indelible mark on the automotive world, embodying a spirit of independent thinking and design eccentricity that still resonates with enthusiasts today.
    `,
  },
  koenigsegg: {
    title: 'Koenigsegg: Engineering Beyond Limits',
    content: `
      Koenigsegg Automotive AB, established in 1994 by Christian von Koenigsegg, is a Swedish manufacturer of high-performance sports cars, often referred to as hypercars. Located in Ängelholm, Sweden, the company is renowned for its relentless pursuit of extreme performance, advanced engineering, and exquisite craftsmanship. Koenigsegg holds numerous world records for speed and acceleration, consistently pushing the boundaries of what's possible in automotive design and technology with innovations like their "freevalve" engine technology and megacar power outputs.
    `,
  },
  scania: {
    title: 'Scania: Powering Global Logistics',
    content: `
      While perhaps less known for passenger cars, Scania AB is a major Swedish manufacturer of commercial vehicles, specifically heavy trucks and buses, as well as marine and industrial engines. Founded in 1891, Scania has a long history of engineering excellence, focusing on fuel efficiency, robust design, and modular production systems. Their vehicles are integral to logistics and transportation worldwide, known for their reliability and powerful performance in demanding environments.
    `,
  },
  polestar: {
    title: 'Polestar: The Future of Electric Performance',
    content: `
      Polestar, originally Volvo's performance division, was spun off in 2017 as a standalone Swedish automotive brand focused exclusively on electric performance cars. Combining sleek Scandinavian design with cutting-edge electric powertrain technology, Polestar aims to redefine sustainable luxury and high-performance motoring. With models like the Polestar 1 (a hybrid grand tourer) and the fully electric Polestar 2, the brand is quickly establishing itself as a significant player in the premium EV market, balancing environmental consciousness with driving dynamics.
    `,
  },
};

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articleContent[id];

  if (!article) {
    return (
      <div className={styles.articlePage}>
        <h2 className={styles.title}>Article Not Found</h2>
        <button onClick={() => navigate('/articles')} className={styles.backButton}>
          Back to Articles
        </button>
      </div>
    );
  }

  const articleKeys = Object.keys(articleContent);
  const currentIndex = articleKeys.indexOf(id);
  const prevArticleId = currentIndex > 0 ? articleKeys[currentIndex - 1] : null;
  const nextArticleId = currentIndex < articleKeys.length - 1 ? articleKeys[currentIndex + 1] : null;

  return (
    <div className={styles.articlePage}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.content}>{article.content}</p>
      <div className={styles.navigationControls}>
        {prevArticleId && (
          <button onClick={() => navigate(`/articles/${prevArticleId}`)} className={styles.navButton}>
            Previous Article
          </button>
        )}
        <button onClick={() => navigate('/articles')} className={styles.backButton}>
          Back to Articles
        </button>
        {nextArticleId && (
          <button onClick={() => navigate(`/articles/${nextArticleId}`)} className={styles.navButton}>
            Next Article
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;