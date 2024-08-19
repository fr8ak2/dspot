import { clsx } from 'clsx'
import { FC } from 'react'

import { Box } from '@/shared'
import { Friend } from '@/types/friends'

import FriendsCard from '../Card/FriendsCard'
import styles from './FriendsList.module.scss'

interface FriendCardProps {
    friends: Friend[]
}

const FriendsList: FC<FriendCardProps> = ({ friends }) => {
    return (
        <Box className={styles.module}>
            <Box className={styles.inner}>
                <h1 className={clsx(styles.title, '--h4')}>Friends</h1>

                <Box className={styles.list}>
                    {friends?.map((friend) => (
                        <FriendsCard key={friend.id} friend={friend} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default FriendsList
