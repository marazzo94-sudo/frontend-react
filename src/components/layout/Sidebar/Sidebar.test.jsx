import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders default navigation items', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

      ['Dashboard', 'News', 'Market', 'AI Signals', 'Portfolio', 'Settings'].forEach(
      (label) => {
        expect(getByText(label, { exact: false })).toBeInTheDocument();
      }
    );
  });
});
