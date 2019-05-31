<template>
    <div class="board-tiles" :src="image" @click="toggleActivity"></div>
</template>

<script>

export default {
	name: 'tile',
	props: {
		image: Image
	},
	data: function(){
		return {
			state: {
				active: false
			}
		}
	},
	methods: {
		toggleActivity: function(){
			this.state.active = !this.state.active
		}
	}
}
</script>

<style>

    .board-tiles {
        width: 100px;
        height: 100px;
    }
	
	.board-tiles:hover {
		box-shadow: 4px 4px gray;
	}

</style>
