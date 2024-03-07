import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter value when button is clicked', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const incrementButton = getByText('+');
  const counterValue = getByTestId('counter-value');

  fireEvent.click(incrementButton);

  expect(counterValue.textContent).toBe('1');
});