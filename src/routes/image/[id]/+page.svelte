<script lang="ts">
	import { onMount } from 'svelte'

	import { getPhotoFromLocalStorage, getPhotosFromLocalStorage, savePhotoToLocalStorage } from '../../../utils/photos'
	import type { PageData } from './$types'

	export let data: PageData

	let textInput = ''

  onMount(() => {
    const localStoragePhoto = getPhotoFromLocalStorage(data.photo.id)
    if(localStoragePhoto && localStoragePhoto.value) {
      textInput = localStoragePhoto.value
    }
  })

  const onSubmit = () => {
    let localStorageData = getPhotosFromLocalStorage()
    localStorageData[data.photo.id] = {
      value: textInput
    }
    savePhotoToLocalStorage(localStorageData)
  }

</script>

<div class="flex flex-col justify-center items-center">
	<input class="py-2 px-4 mb-4 font-bold text-white rounded bg-slate-500" bind:value={textInput} placeholder="Enter a description" />
	<div class="flex flex-wrap gap-4 justify-center items-center">
		<img class="w-96 h-96" src={data.photo.url} alt={data.photo.title} />
	</div>
  <button on:click={onSubmit} class="py-2 px-4 mt-4 font-bold text-white bg-blue-500 rounded">Save description</button>
</div>
