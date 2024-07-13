import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import ArticleList from './ArticleList';

jest.mock('axios');

const mockArticles = [
  {
    id: 1,
    title: 'Test Article 1',
  },
  {
    id: 2,
    title: 'Test Article 2',
  },
];

test('fetches and displays articles', async () => {
  axios.get.mockResolvedValueOnce({ data: { results: mockArticles } });

  render(
    <MemoryRouter>
      <ArticleList />
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText(mockArticles[0].title)).toBeInTheDocument());
  expect(screen.getByText(mockArticles[1].title)).toBeInTheDocument();
});
