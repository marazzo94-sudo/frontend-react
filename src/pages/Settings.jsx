import React, { useState } from 'react';
import styles from './Settings.module.scss';

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Persist settings to backend
    console.log('Saved settings', {
      username,
      email,
      password,
      theme,
      notifications,
    });
    alert('Settings saved!');
  };

  return (
    <div className={styles.container}>
      <h2>Settings</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Theme</span>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label className={styles.fieldCheckbox}>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <span>Enable Notifications</span>
        </label>

        <button className={styles.saveButton} type="submit">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;

