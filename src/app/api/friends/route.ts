import 'server-only'

import { NextResponse } from 'next/server'

import { Friend } from '@/types/friends'
import { concat } from '@/utils'
import { FRIENDS_API_URL, FRIENDS_ENDPOINT } from '@/utils/api'

export const GET = async (request: Request) => {
    try {
        const res = await fetch(`${FRIENDS_API_URL()}${FRIENDS_ENDPOINT}`)

        if (!res.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch friends data' },
                { status: 400 },
            )
        }

        const data = (await res.json()) as Friend[]

        const json = data.map(
            (friend: { first_name: string; last_name: string }) => ({
                ...friend,
                full_name: concat([friend.first_name, friend.last_name]),
            }),
        )

        return NextResponse.json(json)
    } catch (e) {
        const error = e instanceof Error ? e.message : 'Internal Server Error'

        return NextResponse.json({ error }, { status: 500 })
    }
}
