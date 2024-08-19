import { render, screen } from '@testing-library/react'

import { Friend } from '@/types/friends'
import { fetcher } from '@/utils/fetcher'

import FriendsList from './page'

jest.mock('@/lib/fetch')

const mockFriends: Friend[] = [
    {
        id: '1',
        img: '/img/avatar.jpg',
        first_name: 'Steph',
        last_name: 'Walters',
        full_name: 'Steph Walters',
        status: 'Designing beautiful things',
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
                'Steph Walters, Status: Designing beautiful things, Available: Online',
            ),
        ).toBeInTheDocument()
        expect(
            await screen.findByText(
                'Jane Smith, Status: Hangout out by the pool, Available: Offline',
            ),
        ).toBeInTheDocument()
    })
})
