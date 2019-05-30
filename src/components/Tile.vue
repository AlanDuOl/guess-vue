<template>
    <div class="board-tiles" :src="image"></div>
</template>

<script>

export default {
	name: 'tile',
	props: {
		image: Image
	}
}
</script>

<style>

    .board-tiles {
        width: 50px;
        height: 50px;
    }

</style>
