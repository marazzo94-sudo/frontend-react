import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import LoadingIndicator from '../LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders spinner with status role', () => {
    const { getByRole } = render(<LoadingIndicator />);
    const indicator = getByRole('status');
    expect(indicator).toBeInTheDocument();
  });
});
