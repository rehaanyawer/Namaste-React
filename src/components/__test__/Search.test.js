import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Body } from '../Body';
import MOCK_DATA from '../mocks/mockRestData.json';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('should render the body component with Search button', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole('button', { name: 'Search' });

  expect(searchButton).toBeInTheDocument();
});

it('should trigger the input and click the search button to find the matches', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId('resCard');
  expect(cardsBeforeClick.length).toBe(9);
  const searchInput = screen.getByTestId('searchInput');
  const searchButton = screen.getByRole('button', { name: 'Search' });

  fireEvent.change(searchInput, { target: { value: 'burger' } });

  fireEvent.click(searchButton);

  const cardsAfterClick = screen.getAllByTestId('resCard');

  expect(cardsAfterClick.length).toBe(1);
});
