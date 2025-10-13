import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

import Businesses from '../Businesses'

describe('Businesses component', () => {
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

  it('highlights partner types', () => {
    render(<Businesses />)

    expect(screen.getByText('Township Retailers')).toBeInTheDocument()
    expect(screen.getByText('Impact Investors')).toBeInTheDocument()
    expect(screen.getByText('Civic Networks')).toBeInTheDocument()
  })
})
