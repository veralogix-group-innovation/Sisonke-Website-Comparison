import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HowItWorks from '../HowItWorks'

describe('HowItWorks component', () => {
  it('updates the active step when a different option is selected', () => {
    render(<HowItWorks />)

    const discoverButton = screen.getByRole('button', { name: /1\. Discover/ })
    const purchaseButton = screen.getByRole('button', { name: /2\. Purchase/ })

    expect(discoverButton).toHaveAttribute('aria-pressed', 'true')
    expect(purchaseButton).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(purchaseButton)

    expect(discoverButton).toHaveAttribute('aria-pressed', 'false')
    expect(purchaseButton).toHaveAttribute('aria-pressed', 'true')
  })
})
