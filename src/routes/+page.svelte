<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<h1>Image Grid - Svelte </h1>
<div class="w-full h-screen p-16">
  <div class="flex flex-wrap gap-4 justify-center items-center">
    {#each data.photos as photo}
      <img class="w-32 h-32 cursor-pointer" src={photo.thumbnailUrl} alt={photo.title} />
    {/each}
  </div>
</div>
