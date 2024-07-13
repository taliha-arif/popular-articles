import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleItem from './ArticleItem';

const mockArticle = {
  id: 1,
  title: "Test Article",
};

test("renders article link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <ArticleItem article={mockArticle} />
    </MemoryRouter>
  );

  const linkElement = getByText(mockArticle.title);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', `/article/${mockArticle.id}`);
});
