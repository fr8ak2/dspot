import { render, screen } from '@testing-library/react'

import { Friend } from '@/types/friends'
import { fetcher } from '@/utils/fetcher'

import FriendsList from './page'

jest.mock('@/lib/fetch')

const mockFriends: Friend[] = [
    {
        id: '1',
        img: '/img/avatar.jpg',
        first_name: 'John',
        last_name: 'Doe',
        full_name: 'John Doe',
        status: 'Designing beatiful things',
        available: true,
    },
    {
        id: '2',
        img: '/img/avatar.jpg',
        first_name: 'Jane',
        last_name: 'Smith',
        full_name: 'Jane Smith',
        status: 'Hangout out by the pool',
        available: false,
    },
]

describe('FriendsList', () => {
    beforeEach(() => {
        ;(fetcher as jest.Mock).mockResolvedValue(mockFriends)
    })

    it('should render friends list', async () => {
        render(<FriendsList />)

        expect(
            await screen.findByText(
                'John Doe, Status: Designing beatiful things, Available: Online',
            ),
        ).toBeInTheDocument()
        expect(
            await screen.findByText(
                'Jane Smith, Status: Hangout out by the pool, Available: Offline',
            ),
        ).toBeInTheDocument()
    })
})
