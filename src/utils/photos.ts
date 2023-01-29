const localStorageKey = 'svelte-placeholder-grid'

export const getPhotosFromLocalStorage = () => {
	const data = localStorage.getItem(localStorageKey)
	if (data) {
		return JSON.parse(data)
	} else {
		return {}
	}
}

export const getPhotoFromLocalStorage = (id: number) => {
	return getPhotosFromLocalStorage()[id]
}

export const savePhotoToLocalStorage = (newLocalStorage: PhotoStorage) => {
	localStorage.setItem(localStorageKey, JSON.stringify(newLocalStorage))
}
