import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';
import TopBar from './TopBar';

const stats = [
  { label: 'Total Value', value: '$10,000' },
  { label: 'P/L', value: '+5%' }
];

const user = { name: 'Jane Doe', avatar: 'avatar.png' };

describe('TopBar', () => {
  it('renders stats, navigation links, and user info', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <TopBar stats={stats} user={user} />
      </MemoryRouter>
    );
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Total Value', { exact: false })).toBeInTheDocument();
    expect(getByText('$10,000')).toBeInTheDocument();
    expect(getByText('P/L', { exact: false })).toBeInTheDocument();
    expect(getByText('+5%')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
    const avatar = getByAltText('user avatar');
    expect(avatar).toHaveAttribute('src', 'avatar.png');
  });

  it('renders ThemeToggle when provided', () => {
    const toggleTheme = vi.fn();
    const { getByRole } = render(
      <MemoryRouter>
        <TopBar theme="light" toggleTheme={toggleTheme} />
      </MemoryRouter>
    );
    const button = getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });
});

