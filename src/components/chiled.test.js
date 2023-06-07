import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import Display from './chiled';

describe('Calculator', () => {
  const calculator = render(<Display />);
  test('calculator is rendering', () => {
    expect(prettyDOM(calculator.container)).toMatchSnapshot();
  });
});
