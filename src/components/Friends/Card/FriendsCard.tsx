import Image from 'next/image'
import { FC } from 'react'

import { Box, Button, Status } from '@/shared'
import { Available } from '@/shared/Available/Available'
import { Friend } from '@/types/friends'
import { concat, FRIENDS_ENDPOINT } from '@/utils'

import styles from './FriendsCard.module.scss'

interface FriendCardProps {
    friend: Friend
}

const FriendsCard: FC<FriendCardProps> = ({ friend }) => {
    const name = concat([friend.first_name, friend.last_name])

    return (
        <Box className={styles.item}>
            <Box className={styles.content}>
                <Box className={styles.img}>
                    <Available available={friend.available} size="small" />

                    <Image
                        className="--contain"
                        src={`/img/avatar.jpg`} // img from object not working, some issues with S3 bucket
                        fill
                        alt={name}
                    />
                </Box>

                <Box className={styles.info}>
                    <h2>{name}</h2>
                    {friend.status && <Status status={friend.status} />}
                </Box>
            </Box>

            <Button to={`${FRIENDS_ENDPOINT}/${friend.id}`}>Details</Button>
        </Box>
    )
}

export default FriendsCard
