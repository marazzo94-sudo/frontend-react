import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TopBar from './TopBar';

const stats = [
  { label: 'Total Value', value: '$10,000' },
  { label: 'P/L', value: '+5%' }
];

const user = { name: 'Jane Doe', avatar: 'avatar.png' };

describe('TopBar', () => {
  it('renders stats and user info', () => {
    const { getByText, getByAltText } = render(<TopBar stats={stats} user={user} />);
    expect(getByText('Total Value')).toBeInTheDocument();
    expect(getByText('$10,000')).toBeInTheDocument();
    expect(getByText('P/L')).toBeInTheDocument();
    expect(getByText('+5%')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
    const avatar = getByAltText('user avatar');
    expect(avatar).toHaveAttribute('src', 'avatar.png');
  });

  it('renders ThemeToggle when provided', () => {
    const toggleTheme = vi.fn();
    const { getByRole } = render(<TopBar theme="light" toggleTheme={toggleTheme} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

