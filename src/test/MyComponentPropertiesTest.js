import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Greeting component with correct name', () => {
  const { getByText } = render(<Greeting name="Alice" />);
  const greetingElement = getByText(/Hello, Alice!/i);
  expect(greetingElement).toBeInTheDocument();
});