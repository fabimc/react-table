import {expect, test} from 'vitest'
import AppWithProviders from './App'
//import { userEvent } from '@vitest/browser/context'
import { render } from '@testing-library/react'

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3)
})

test('renders App', () => {
  render(<AppWithProviders />);
})