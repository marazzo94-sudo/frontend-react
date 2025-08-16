import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import NewsDigest from './NewsDigest';

describe('NewsDigest', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows you're all caught up after scrolling to bottom", async () => {
    const { getByTestId } = render(<NewsDigest />);
    await waitFor(() =>
      expect(
        screen.getByText('Bitcoin tops $70K for the first time 🚀')
      ).toBeInTheDocument()
    );

    const container = getByTestId('news-digest');
    Object.defineProperty(container, 'scrollHeight', { value: 200, writable: true });
    Object.defineProperty(container, 'clientHeight', { value: 100, writable: true });

    fireEvent.scroll(container, { target: { scrollTop: 100 } });

    expect(screen.getByText("You're all caught up!")).toBeInTheDocument();
  });
});
