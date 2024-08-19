export interface Friend {
    id: string | number
    img: string
    first_name: string
    last_name: string
    full_name: string
    status: string
    available: boolean
}

export interface FriendDetail extends Friend {
    phone: string | number
    address_1: string
    city: string
    state: string
    zipcode: string | number
    bio: string
    photos: string[]
    statuses: string[]
}
