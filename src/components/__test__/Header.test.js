import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

it('should render Header component with a login button using Role', () => {
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

it('should render Header component with a login button using text', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole('button');
  const loginButton = screen.getByText('Login');
  expect(loginButton).toBeInTheDocument();
});

it('should render Header component with a login button using Role with text', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  expect(loginButton).toBeInTheDocument();
});

it('should render Header component with a login button but half text matching using regex', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Cart/);

  expect(loginButton).toBeInTheDocument();
});

it('should render Header component with a login button changing to logout (toggle)', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByText('Logout');

  expect(logoutButton).toBeInTheDocument();
});
