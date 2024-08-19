import 'server-only'

import { NextResponse } from 'next/server'

import { Friend } from '@/types/friends'
import { concat } from '@/utils'
import { FRIEND_DETAIL_ENDPOINT, FRIENDS_API_URL } from '@/utils/api'

export const GET = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const id = params.id

    if (!id) {
        return NextResponse.json(
            { message: 'Friend ID is required' },
            { status: 400 },
        )
    }

    try {
        const res = await fetch(
            `${FRIENDS_API_URL()}${FRIEND_DETAIL_ENDPOINT(id)}`,
        )

        if (!res.ok) {
            return NextResponse.json(
                { error: `Failed to fetch friend with id: ${id}` },
                { status: 400 },
            )
        }

        const data = (await res.json()) as Friend

        const json = {
            ...data,
            full_name: `${data.first_name} ${data.last_name}`,
        }

        return NextResponse.json(json)
    } catch (e) {
        const error = e instanceof Error ? e.message : 'Internal Server Error'

        return NextResponse.json({ error: error }, { status: 500 })
    }
}
