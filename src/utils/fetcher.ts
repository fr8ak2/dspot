export const fetcher = async <T>(
    url: string,
    token?: string,
    options?: RequestInit[],
): Promise<T> => {
    const res = await fetch(url, {
        headers: new Headers({
            Authorization: token ? `Bearer ${token}` : 'No Auth',
        }),
        ...options,
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch from ${url}: ${res.statusText}`)
    }

    return (await res.json()) as T
}
