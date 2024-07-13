import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import ArticleDetail from "./ArticleDetail";

jest.mock("axios");

const mockArticle = {
  id: 1,
  title: "Test Article",
  abstract: "This is a test article.",
  url: "https://example.com/test-article",
};

test("fetches and displays the article", async () => {
  axios.get.mockResolvedValueOnce({ data: { results: [mockArticle] } });

  render(
    <MemoryRouter initialEntries={["/article/1"]}>
      <Routes>
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText(mockArticle.title)).toBeInTheDocument());
  expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
  expect(screen.getByText("Read more")).toHaveAttribute("href", mockArticle.url);
});
