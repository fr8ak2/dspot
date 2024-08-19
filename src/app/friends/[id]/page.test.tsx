import { render, screen } from '@testing-library/react'

import { FriendDetail } from '@/types/friends'
import { fetcher } from '@/utils/fetcher'

import FriendsDetails from './page'

jest.mock('@/lib/fetch')

const mockFriend: FriendDetail = {
    id: '1',
    img: '/img/avatar.jpg',
    first_name: 'Steph',
    last_name: 'Walters',
    full_name: 'Steph Walters',
    bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
    phone: '(820) 289-1818',
    address_1: '5190 Center Court Drive',
    city: 'Spring',
    state: 'TX',
    zipcode: 77370,
    status: 'At work...',
    available: true,
}

describe('FriendDetailPage', () => {
    beforeEach(() => {
        ;(fetcher as jest.Mock).mockResolvedValue(mockFriend)
    })

    it('should render friend detail', async () => {
        render(<FriendsDetails params={{ id: 'id' }} />)

        expect(
            await screen.findByText('Steph Walters Details'),
        ).toBeInTheDocument()
        expect(await screen.findByText('Available: Online')).toBeInTheDocument()
        expect(
            await screen.findByText('Status: At work...'),
        ).toBeInTheDocument()
        expect(
            await screen.findByText(
                "Bio: I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
            ),
        ).toBeInTheDocument()
        expect(
            await screen.findByText('Phone: (820) 289-1818'),
        ).toBeInTheDocument()
        expect(
            await screen.findByText('Address: 5190 Center Court Drive'),
        ).toBeInTheDocument()
        expect(await screen.findByText('City: Spring')).toBeInTheDocument()
        expect(await screen.findByText('State: TX')).toBeInTheDocument()
        expect(await screen.findByText('Zipcode: 77370')).toBeInTheDocument()
    })
})
