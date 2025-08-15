import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders provided items', () => {
    const items = [
      { label: 'Home', to: '/' },
      { label: 'Dashboard', to: '/dashboard' },
    ];

    const { getByText } = render(
      <MemoryRouter>
        <Sidebar items={items} />
      </MemoryRouter>
    );

    items.forEach((item) => {
      expect(getByText(item.label)).toBeInTheDocument();
    });
  });
});
