import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import Calculator from './Calculator';

describe('Calculator', () => {
  const calculator = render(<Calculator />);
  test('calculator is rendering', () => {
    expect(prettyDOM(calculator.container)).toMatchSnapshot();
  });
});
