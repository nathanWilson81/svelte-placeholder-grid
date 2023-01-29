<script lang="ts">
	import { getPhotos } from '../utils/http';

	interface Photo {
		albumId: number;
		id: number;
		thumbnailUrl: string;
		title: string;
		url: string;
	}

	let photos: Photo[] = [];
	const fetchData = async () => {
		const data = await getPhotos();
		photos = data;
	};

	fetchData();
</script>

<h1>Image Grid - Svelte </h1>
<div class="w-full h-screen p-16">
  <div class="flex flex-wrap gap-4 justify-center items-center">
    {#each photos as photo}
      <img class="w-32 h-32 cursor-pointer" src={photo.thumbnailUrl} alt={photo.title} />
    {/each}
  </div>
</div>
