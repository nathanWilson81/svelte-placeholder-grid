export const getPhotos = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  const data = await request.json()
  return data
}
