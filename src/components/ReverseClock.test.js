import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ReverseClock from './ReverseClock';

const padDoubleDigits = (num) => (num < 10 ? `0${num}` : `${num}`);

test('renders component', () => {
  const component = render(<ReverseClock />);
  expect(component.container).toHaveTextContent('Decrementing by 1 every second');
});

test('renders the current time correctly', () => {
  const component = render(<ReverseClock />);
  const clockDigit = component.container.querySelector('.reverse-clock__digits');
  let date = new Date();
  let hours = padDoubleDigits(date.getHours());
  let minutes = padDoubleDigits(date.getMinutes());
  let seconds = padDoubleDigits(date.getSeconds());

  expect(clockDigit).toHaveTextContent(`${hours}:${minutes}:${seconds}`);
});
