import React, { useState } from 'react';
import styles from './Settings.module.scss';

function Settings() {
  const [profile, setProfile] = useState({
    username: '',
    displayName: '',
    email: '',
    taxId: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Persist settings to backend
    console.log('Saved settings', profile);
    alert('Settings saved!');
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <h2>Settings</h2>
          <p>Manage your details and personal preferences here.</p>
        </div>
        <div className={styles.headerButtons}>
          <button type="button">Invite</button>
          <button type="button" className={styles.upgradeButton}>
            Upgrade
          </button>
        </div>
      </header>

      <nav className={styles.tabs}>
        <button className={styles.activeTab}>Profile</button>
        <button type="button">Security</button>
        <button type="button">Billing</button>
        <button type="button">Notifications</button>
        <button type="button">Integrations</button>
      </nav>

      <div className={styles.notice}>
        <span>Please confirm your email to protect your profile</span>
        <button type="button">Verify email</button>
      </div>

      <form onSubmit={handleSubmit} className={styles.section}>
        <h3>My profile</h3>

        <div className={styles.fieldRow}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={profile.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldRow}>
          <label>Photo</label>
          <div className={styles.photoRow}>
            <div className={styles.avatar} />
            <button type="button">Upload</button>
          </div>
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="displayName">Display name</label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            value={profile.displayName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="email">Contact email</label>
          <div className={styles.emailRow}>
            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
            />
            <button type="button">Verify</button>
          </div>
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="taxId">Business tax ID</label>
          <input
            id="taxId"
            name="taxId"
            type="text"
            value={profile.taxId}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="address">Business address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={profile.address}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldRow}>
          <label>Xero integration</label>
          <button type="button">Connect</button>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.saveButton}>
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;

