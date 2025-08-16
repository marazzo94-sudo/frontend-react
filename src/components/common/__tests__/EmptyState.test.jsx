import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import EmptyState from '../EmptyState';

describe('EmptyState', () => {
  it('renders message and optional action', () => {
    const handleAction = vi.fn();
    const { getByText } = render(
      <EmptyState message="Nothing here" action={handleAction} actionLabel="Do something" />
    );
    expect(getByText('Nothing here')).toBeInTheDocument();
    const button = getByText('Do something');
    fireEvent.click(button);
    expect(handleAction).toHaveBeenCalled();
  });
});
