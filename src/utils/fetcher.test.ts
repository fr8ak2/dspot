import { fetcher } from './fetcher'

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
    }),
) as jest.Mock

describe('fetcher', () => {
    it('should fetch data successfully', async () => {
        const data = await fetcher('http://example.com')
        expect(data).toEqual({ data: 'test' })
    })

    it('should throw an error if the fetch fails', async () => {
        ;(global.fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({
                ok: false,
                statusText: 'Not Found',
            }),
        )

        await expect(fetcher('http://example.com')).rejects.toThrow(
            'Failed to fetch from http://example.com: Not Found',
        )
    })
})
