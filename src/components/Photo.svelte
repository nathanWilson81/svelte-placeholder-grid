<script lang="ts">
  export let photo: Photo
</script>

<a href={`/image/${photo.id}`}>
  <img class="w-32 h-32 cursor-pointer" src={photo.thumbnailUrl} alt={photo.title} />
</a>
