import React, { useEffect, useState } from "react";
import styles from "./NewsDigest.module.scss";

const mockArticles = [
  {
    url: "https://cointelegraph.com/",
    title: "Bitcoin tops $70K for the first time 🚀",
    description: "Market optimism pushes BTC above its all-time high.",
  },
  {
    url: "https://decrypt.co/",
    title: "Ethereum upgrade boosts transactions ⚡",
    description: "ETH network speed improves following latest update.",
  },
  {
    url: "https://cryptoslate.com/",
    title: "Solana gains 12% amid NFT market surge 🎨",
    description: "SOL rallies as NFT trading volume jumps.",
  },
];

function NewsDigest() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("digestDate");
    const storedArticles = localStorage.getItem("digestArticles");

    // Reuse today's cached digest if it exists
    if (storedDate === today && storedArticles) {
      setArticles(JSON.parse(storedArticles));
      setLoading(false);
      return;
    }

    try {
      // For now, just use mock data
      setArticles(mockArticles);
      localStorage.setItem("digestArticles", JSON.stringify(mockArticles));
      localStorage.setItem("digestDate", today);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight) {
      setAtEnd(true);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load news.</div>;

  return (
    <div
      className={styles.container}
      onScroll={handleScroll}
      data-testid="news-digest"
    >
      {articles.map((article) => {
        const domain = new URL(article.url).hostname.replace("www.", "");
        const placeholder =
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23ccc'/></svg>";
        return (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.content}>
              <span className={styles.domain}>{domain}</span>
              <h3>{article.title}</h3>
              {article.description && <p>{article.description}</p>}
            </div>
            <img
              src={article.image || placeholder}
              alt=""
              className={styles.thumbnail}
            />
          </a>
        );
      })}
      {atEnd && <p className={styles.caughtUp}>You&apos;re all caught up!</p>}
    </div>
  );
}

export default NewsDigest;
