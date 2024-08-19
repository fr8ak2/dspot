import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Friend } from '@/types/friends'

import FriendCard from './FriendsCard'

const mockFriend: Friend = {
    id: '1',
    img: '/img/avatar.jpg',
    first_name: 'John',
    last_name: 'Doe',
    full_name: 'John Doe',
    status: 'At work...',
    available: true,
}

describe('FriendsCard', () => {
    it('should render correctly', () => {
        const { getByText } = render(
            <Router>
                <FriendCard friend={mockFriend} />
            </Router>,
        )

        expect(
            getByText('John Doe, Status: At work..., Available: Online'),
        ).toBeInTheDocument()
    })
})
