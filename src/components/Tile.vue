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
        min-width: 80px;
        min-height: 80px;
    }
	
	.board-tiles:hover {
		box-shadow: 4px 4px gray;
	}

</style>
