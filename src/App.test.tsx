import { expect, test } from 'vitest'
import AppWithProviders from './App'
import { act, fireEvent, render, screen, within } from '@testing-library/react'

test('renders App', () => {
  render(<AppWithProviders />)
})

test('edit mode works', async () => {
  render(<AppWithProviders />)
  const editButtons = await screen.findAllByTestId('EditIcon')

  act(async () => {
    fireEvent.click(editButtons[0])
    const saveButtons = await screen.findAllByTestId('SaveIcon')
    const saveButton = saveButtons[0]
    expect(saveButton).toBeDefined()

    const firstName: HTMLInputElement = screen.getByPlaceholderText('First Name')
    expect(firstName).toBeDefined()
    firstName.value = ''
    fireEvent.click(saveButton)
    const errorMessage = screen.findByText('First Name is Required')
    expect(errorMessage).toBeDefined()
  })
})
