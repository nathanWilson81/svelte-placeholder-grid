<script lang="ts">
	import type { PageData } from './$types';
  import Photo from '../components/Photo.svelte';

	export let data: PageData;
</script>

<div class="flex flex-wrap gap-4 justify-center items-center">
  {#each data.photos as photo}
    <Photo photo={photo} />
  {/each}
</div>
