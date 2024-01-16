import { RestaurantCard, withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Should render Restaurant card with props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText('Chicago Pizza');

  expect(name).toBeInTheDocument();
});

it('Should render higher order components (withPromotedLabel) with props Data', () => {
  const RestaurantPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantPromoted resData={MOCK_DATA} />);
  const name = screen.getByText('Chicago Pizza');

  expect(name).toBeInTheDocument();
});
