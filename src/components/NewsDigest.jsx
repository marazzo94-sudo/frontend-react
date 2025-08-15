import { useEffect, useState } from 'react';
import styles from './NewsDigest.module.scss';

const API_URL = 'https://api.example.com/news';

function NewsDigest() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('digestDate');
    const storedArticles = localStorage.getItem('digestArticles');

    if (storedDate === today && storedArticles) {
      setArticles(JSON.parse(storedArticles));
      setLoading(false);
      return;
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const newArticles = data.articles || [];
        setArticles(newArticles);
        localStorage.setItem('digestArticles', JSON.stringify(newArticles));
        localStorage.setItem('digestDate', today);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight) {
      setAtEnd(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load news.</div>;
  }

  return (
    <div className={styles.container} onScroll={handleScroll} data-testid="news-digest">
      {articles.map((article) => (
        <article key={article.url} className={styles.article}>
          <h3>{article.title}</h3>
          {article.description && <p>{article.description}</p>}
        </article>
      ))}
      {atEnd && <p className={styles.caughtUp}>You're all caught up!</p>}
    </div>
  );
}

export default NewsDigest;
