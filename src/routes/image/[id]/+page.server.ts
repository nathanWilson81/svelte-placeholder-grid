import type { PageServerLoad } from './$types'

export const prerender = true

export const load = (async ({ params, fetch }) => {
	const data = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${params.id}`)
	const photo: Photo[] = await data.json()

	return {
		photo: photo[0]
	}
}) satisfies PageServerLoad
