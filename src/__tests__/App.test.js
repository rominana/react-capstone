import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

const renderApp = () => {
  const { container } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  return container;
};

describe('integrations tests', () => {
  test('match Snapshot', () => {
    expect(renderApp().firstChild).toMatchSnapshot();
  });
});
