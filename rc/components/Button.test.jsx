import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders and handles onClick', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
