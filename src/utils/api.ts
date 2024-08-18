export const getFriendsApiUrl = () =>
    (process.env.FRIENDS_API_URL as string)?.replace(/\/$/, '')
