import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

import HowItWorks from '../HowItWorks'

describe('HowItWorks component', () => {
  beforeEach(() => {
    global.IntersectionObserver = class {
      observe() {}
      disconnect() {}
      unobserve() {}
      takeRecords() {
        return []
      }
    }
  })

  it('lists three sequential steps', () => {
    render(<HowItWorks />)

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })
})
