<template>
    <div class="board-tiles">
	</div>
</template>

<script>
export default {
	name: 'tile',
	props: {
		src: String
	}
}
</script>

<style>

    .board-tiles {
        border: 1px solid red;
        width: 50px;
        height: 50px;
		background-image: url('../assets/imgs/blue.png');
    }

</style>
