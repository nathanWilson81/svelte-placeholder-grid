<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-wrap gap-4 justify-center items-center">
	<img class="w-96 h-96" src={data.photo.url} alt={data.photo.title} />
</div>
