import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

it('should render Header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button');

  expect(loginButton).toBeInTheDocument();
});

it('should render Header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button');

  expect(loginButton).toBeInTheDocument();
});
