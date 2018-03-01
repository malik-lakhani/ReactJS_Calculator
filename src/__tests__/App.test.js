import React from 'react';
import ReactDOM from 'react-dom';
import App from '../calculator/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('testing calculate()', () => {
  const app = new App();
  const total = 1;
  const current = 2;
  const operator = '+'
  expect(app.calculate(total,current,operator)).toMatchSnapshot();
});