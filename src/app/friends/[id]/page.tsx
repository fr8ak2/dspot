import { FC, Suspense } from 'react'

import FriendsInfo from '@/components/Friends/Info/FriendsInfo'
import { Loading, Section, Wrapper } from '@/shared'
import { FriendDetail } from '@/types/friends'
import { BASE_API_URL, fetcher, FRIEND_DETAIL_ENDPOINT } from '@/utils'

interface FriendsDetailsProps {
    params: {
        id: string
    }
}

const FriendsDetails: FC<FriendsDetailsProps> = async ({ params }) => {
    // TODO: add unique ID. Issue comes from provided API, it's just doesn't work with different id's
    const friend = await fetcher<FriendDetail>(
        `${BASE_API_URL()}/${FRIEND_DETAIL_ENDPOINT('id')}`,
    )

    return (
        <Section>
            <Wrapper>
                <Suspense fallback={<Loading />}>
                    <FriendsInfo friend={friend} />
                </Suspense>
            </Wrapper>
        </Section>
    )
}

export default FriendsDetails
