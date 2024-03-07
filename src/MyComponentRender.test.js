import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './Components/MyComponent';

test('renders MyComponent correctly', () => {
  const { getByText } = render(<MyComponent />);
  const textElement = getByText("Hello World");
  
  expect(textElement).toBeInTheDocument();
});