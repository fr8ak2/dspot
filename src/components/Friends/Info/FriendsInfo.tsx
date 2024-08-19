import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Photos } from '@/mock/photos'
import { Available, Box, Status } from '@/shared'
import { Lightbox } from '@/shared/Lightbox/Lightbox'
import { Tabs } from '@/shared/Tabs/Tabs'
import { FriendDetail } from '@/types/friends'
import { FRIENDS_ENDPOINT } from '@/utils'

import styles from './FriendsInfo.module.scss'

interface FriendInfoProps {
    friend: FriendDetail
}

const FriendsInfo: FC<FriendInfoProps> = ({ friend }) => {
    // TODO: API sends incorrect data for imgs, using static mock

    const location = [
        { label: 'Address', value: friend.address_1 },
        { label: 'City', value: friend.city },
        { label: 'State', value: friend.state },
        { label: 'Zipcode', value: friend.zipcode },
    ]

    return (
        <Box className={styles.module}>
            <Box className={styles.inner}>
                <Box className={styles.back}>
                    <Link href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            fill="none"
                            viewBox="0 0 16 14"
                        >
                            <path
                                fill="#2E57FA"
                                d="M15 6H3.14l3.63-4.36A1.001 1.001 0 0 0 5.23.36l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 0 7a1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6A1 1 0 0 0 6 14a1 1 0 0 0 .77-1.64L3.14 8H15a1 1 0 1 0 0-2Z"
                            />
                        </svg>
                    </Link>
                </Box>

                <Box className={styles.header}>
                    <Box className={styles.img}>
                        <Available available={friend.available} size="medium" />
                        <Image
                            className="--cover"
                            src={`/img/avatar.jpg`} // img from object not working, some issues with S3 bucket
                            width={300}
                            height={300}
                            priority
                            alt={friend.full_name}
                        />
                    </Box>

                    <Box className={styles.title}>
                        <h1 className="--h4">{friend.full_name}</h1>
                        {friend.statuses && (
                            <Status status={friend.statuses[0]} />
                        )}
                    </Box>
                </Box>

                <Box className={styles.content}>
                    <Box className={styles.tabs}>
                        <Tabs labels={['Info', 'Photos']}>
                            <Box className={styles.tab}>
                                <Box
                                    className={clsx(
                                        styles.tabItem,
                                        styles.tabBio,
                                    )}
                                >
                                    <h2 className="--h6">Bio:</h2>
                                    <span>{friend.bio}</span>
                                </Box>
                                <Box className={styles.tabItem}>
                                    <Box className={styles.tabDetail}>
                                        <h2 className="--h6">Phone:</h2>
                                        <span>{friend.phone}</span>
                                    </Box>
                                </Box>
                                <Box
                                    className={clsx(
                                        styles.tabItem,
                                        styles.tabLocation,
                                    )}
                                >
                                    {location.map(({ label, value }) => (
                                        <Box
                                            className={styles.tabDetail}
                                            key={`location-${label.toLowerCase()}`}
                                        >
                                            <h2 className="--h6">{label}:</h2>
                                            <span>{value}</span>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            <Box className={clsx(styles.tab, styles.tabImgs)}>
                                <Lightbox images={Photos} />
                                {/*{friend.photos.map((photo, index) => (*/}
                                {/*    <Box*/}
                                {/*        className={styles.tabImg}*/}
                                {/*        key={`photo-${index}`}*/}
                                {/*    >*/}
                                {/*        <Image*/}
                                {/*            className="--cover"*/}
                                {/*            src={photo}*/}
                                {/*            width={300}*/}
                                {/*            height={300}*/}
                                {/*            alt="Friend photo"*/}
                                {/*        />*/}
                                {/*    </Box>*/}
                                {/*))}*/}
                            </Box>
                        </Tabs>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FriendsInfo
