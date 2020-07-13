import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

test('renders button to invoke modal', () => {
  const modal = render(<Modal />);
  let modalTrigger = modal.getByTestId('buttonTrigger');
  return Boolean(modalTrigger);
});

test('renders close button on modal', () => {
  const modal = render(<Modal />);
  let state = modal.getByTestId('showState');
  if (state === 'true') {
    let modalClose = modal.getByTestId('modalClose');
    return Boolean(modalClose);
  }
});

test('counter is false initially', () => {
  const modal = render(<Modal />);
  let state = modal.getByTestId('showState');
  expect(state.textContent).toBe('false');
});

test('counter is update', () => {
  const modal = render(<Modal />);
  let state = modal.getByTestId('showState');
  expect(state.textContent).toBe('false');
  const button = modal.getByTestId('modalBtn');
  userEvent.click(button);
  state = modal.getByTestId('showState');
  expect(state.textContent).toBe('true');
});

// test('test escape event', () => {
//   const modal = render(<Modal />);
//   let state = modal.getByTestId('show');
//   expect(state.textContent).toBe('false');
// });
