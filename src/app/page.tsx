import { FC } from 'react'

import FriendsList from '@/components/Friends/List/FriendsList'
import { Box, Section, Wrapper } from '@/shared'
import { Friend } from '@/types/friends'
import { BASE_API_URL, fetcher, FRIENDS_ENDPOINT } from '@/utils'

export const revalidate = 3600

const Home: FC = async () => {
    const friends = await fetcher<Friend[]>(
        `${BASE_API_URL()}${FRIENDS_ENDPOINT}`,
    )

    return (
        <Section>
            <Wrapper>
                <FriendsList friends={friends} />
            </Wrapper>
        </Section>
    )
}

export default Home
