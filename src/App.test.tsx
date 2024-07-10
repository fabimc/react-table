import {expect, test} from 'vitest'
import AppWithProviders from './App'
import { act, fireEvent, render, screen } from '@testing-library/react'

test('renders App', () => {
  render(<AppWithProviders />);
})

test('edit mode works', async () => {
  render(<AppWithProviders />);
  const editButtons = await screen.findAllByTestId('EditIcon');
  
  act(async () => {
    fireEvent.click(editButtons[0]);
    const saveButtons = await screen.findAllByTestId('SaveIcon');
    expect(saveButtons[0]).toBeDefined()
  });
  
})