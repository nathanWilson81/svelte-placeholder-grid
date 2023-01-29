import type { PageServerLoad } from './$types'

interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export const prerender = true

export const load = (async ({ fetch }) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  const photos: Photo[] = await data.json()
;
  return {
    photos
  }
}) satisfies PageServerLoad
