import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';

function SearchBar({ className }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      try {
        setRecent(JSON.parse(stored));
      } catch (_) {
        setRecent([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recent));
  }, [recent]);

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecent(prev => [trimmed, ...prev.filter(r => r !== trimmed)].slice(0, 5));
    setQuery('');
    setOpen(false);
  };

  return (
    <>
      <input
        type="text"
        readOnly
        placeholder="Search cryptos..."
        className={`${styles.searchInput} ${className ?? ''}`}
        onFocus={() => setOpen(true)}
      />
      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search cryptos..."
              />
            </form>
            <h4>Recent Searches</h4>
            <ul>
              {recent.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
