import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Features from '../Features'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    useInView: () => true,
  }
})

describe('Features component', () => {
  it('renders three feature cards with titles', () => {
    render(<Features />)

    expect(screen.getByText('Faster Field Deployments')).toBeInTheDocument()
    expect(screen.getByText('Insight-Led Playbooks')).toBeInTheDocument()
    expect(screen.getByText('Partnership Ready')).toBeInTheDocument()
  })
})
