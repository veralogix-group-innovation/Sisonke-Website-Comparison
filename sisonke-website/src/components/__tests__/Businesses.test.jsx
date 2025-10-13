/* global global */

import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../../firebaseClient.js', () => ({
  db: {},
}))

const collectionMock = vi.fn()
const getDocsMock = vi.fn()

vi.mock('firebase/firestore', () => ({
  collection: (...args) => collectionMock(...args),
  getDocs: (...args) => getDocsMock(...args),
}))

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

    collectionMock.mockReset()
    collectionMock.mockReturnValue('collectionRef')
    getDocsMock.mockReset()
  })

  it('renders fetched businesses from Firestore', async () => {
    getDocsMock.mockResolvedValue({
      docs: [
        {
          id: 'biz-1',
          data: () => ({
            name: 'Ikhaya Kitchens',
            community: 'Soweto',
            summary: 'Collective kitchens scaling affordable meals with local growers.',
            focusArea: 'Food systems',
            impact: '1 200 meals a day',
          }),
        },
      ],
    })

    render(<Businesses />)

    expect(screen.getByText('Loading community businesses...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Ikhaya Kitchens')).toBeInTheDocument()
      expect(collectionMock).toHaveBeenCalledWith({}, 'businesses')
      expect(getDocsMock).toHaveBeenCalledWith('collectionRef')
    })
  })

  it('surfaces an error message when fetching fails', async () => {
    getDocsMock.mockRejectedValue(new Error('Firestore unavailable'))

    render(<Businesses />)

    await waitFor(() => {
      expect(
        screen.getByText('We could not load the latest community businesses. Please try again shortly.'),
      ).toBeInTheDocument()
    })
  })
})
