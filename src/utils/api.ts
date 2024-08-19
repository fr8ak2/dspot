export const BASE_URL = () =>
    (process.env.NEXT_PUBLIC_BASE_URL as string)?.replace(/\/$/, '')

export const BASE_API_URL = () =>
    (process.env.NEXT_PUBLIC_BASE_API_URL as string)?.replace(/\/$/, '')
export const FRIENDS_API_URL = () =>
    (process.env.NEXT_PUBLIC_FRIENDS_API_URL as string)?.replace(/\/$/, '')

export const FRIENDS_ENDPOINT = '/friends'
export const FRIEND_DETAIL_ENDPOINT = (id: string) => `/friends/${id}`
