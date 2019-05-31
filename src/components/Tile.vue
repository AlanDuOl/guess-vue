<template>
    <div class="board-tiles" @click="toggleActivity" :style="state.active ? 'background-color: rgb('+bgColor+')': ''"></div>
</template>

<script>

export default {
	name: 'tile',
	props: {
		bgColor: String
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
			this.state.active = true
		}
	}
}
</script>

<style>

    .board-tiles {
        min-width: 80px;
        min-height: 80px;
		background-color: black;
    }
	
	.board-tiles:hover {
		box-shadow: 4px 4px gray;
	}

</style>
