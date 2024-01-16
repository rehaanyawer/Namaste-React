import { render, screen, act, fireEvent } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/RestaurantCardMock.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from '../Cart';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it('should render the Restaurant Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordian = screen.getByText('Desserts(8)');

  fireEvent.click(accordian);

  expect(screen.getAllByTestId('foodItems').length).toBe(8);

  const addBtn = screen.getAllByRole('button', { name: 'Add +' });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();

  const cartBtn = screen.getByText('Cart (2 items)');

  fireEvent.click(cartBtn);

  expect(
    screen.getByRole('button', { name: 'Clear Cart' })
  ).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItems').length).toBe(10);
});
