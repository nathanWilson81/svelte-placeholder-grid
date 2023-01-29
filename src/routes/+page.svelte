<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-wrap gap-4 justify-center items-center">
  {#each data.photos as photo}
    <a href={`/image/${photo.id}`}>
      <img class="w-32 h-32 cursor-pointer" src={photo.thumbnailUrl} alt={photo.title} />
    </a>
  {/each}
</div>
