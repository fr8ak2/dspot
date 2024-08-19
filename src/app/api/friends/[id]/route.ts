import 'server-only'

import { NextResponse } from 'next/server'

import { FRIEND_DETAIL_ENDPOINT, FRIENDS_API_URL } from '@/utils/api'

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const id = params.id

    if (!id) {
        return NextResponse.json(
            { message: 'Friend ID is required' },
            { status: 400 },
        )
    }

    try {
        const response = await fetch(
            `${FRIENDS_API_URL()}${FRIEND_DETAIL_ENDPOINT(id)}`,
        )

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch friend with id: ${id}` },
                { status: 400 },
            )
        }

        const data = (await response.json()) as string[]

        return NextResponse.json(data)
    } catch (e) {
        const error = e instanceof Error ? e.message : 'Internal Server Error'

        return NextResponse.json({ error: error }, { status: 500 })
    }
}
