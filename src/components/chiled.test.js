import React from 'react';
import { render } from '@testing-library/react';
import Display from './chiled';
import '@testing-library/jest-dom/extend-expect';

test('Calculator snapshot', () => {
  const calculator = render(
    <Display />,
  );
  const tree = calculator.toJSON();
  expect(tree).toMatchSnapshot();
});
