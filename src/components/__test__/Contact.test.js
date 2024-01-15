import Contact from '../Contact';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Should load heading from contact us page ', () => {
  render(<Contact />);

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
});

it('Should load button from contact us page', () => {
  render(<Contact />);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

it('Should load placeholders from contact us page', () => {
  render(<Contact />);

  const username = screen.getByPlaceholderText('Username');

  expect(username).toBeInTheDocument();
});

it('Should load input boxes from contact us page', () => {
  render(<Contact />);

  const inputboxes = screen.getAllByRole('textbox');
  // console.log(inputboxes.length);
  expect(inputboxes.length).not.toBe(3);
});
