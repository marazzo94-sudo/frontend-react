import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import NewsDigest from '../NewsDigest';

const mockArticles = [
  { title: 'Article 1', description: 'Desc 1', url: '1' },
  { title: 'Article 2', description: 'Desc 2', url: '2' },
];

describe('NewsDigest', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ articles: mockArticles }),
      })
    ));
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows you're all caught up after scrolling to bottom", async () => {
    const { getByTestId } = render(<NewsDigest />);
    await waitFor(() => expect(screen.getByText('Article 1')).toBeInTheDocument());

    const container = getByTestId('news-digest');
    Object.defineProperty(container, 'scrollHeight', { value: 200, writable: true });
    Object.defineProperty(container, 'clientHeight', { value: 100, writable: true });

    fireEvent.scroll(container, { target: { scrollTop: 100 } });

    expect(screen.getByText("You're all caught up!")).toBeInTheDocument();
  });
});
