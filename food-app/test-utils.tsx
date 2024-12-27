import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Twój Redux store

const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(<Provider store={store}>{ui}</Provider>, options);
};

export * from '@testing-library/react';
export { renderWithProviders as render };
