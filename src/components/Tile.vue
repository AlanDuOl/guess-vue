<template>
    <div class="board-tiles" @click="setActive" :style="state.active ? 'background-color: rgb('+bgColor+')': 'background-color: rgb(0,0,0);'">
	</div>
</template>

<script>

export default {

	name: 'tile',
	
	props: {
		bgColor: String,
		level: String
	},
	
	data(){
		return {
			state: {
				active: false,
				canChange: true
			}
		}
	},
	
	computed: {
		resetLevels(){
			return this.$store.state.reloadTiles
		}
	},

	watch: {
		resetLevels(){
			//Reset same level after first play (numPlays bigger than zero
			this.setInactive()
			this.$store.commit('resetElements')
		},
		checkMatch(){
			if(this.$store.state.activeTiles[0] === this.$store.state.activeTiles[1]){
				if(this.state.active) this.state.canChange = false
			}
		}
	},

	methods: {
		setActive(event){
			if(this.$store.state.activeTiles.length < 2){
				//If tile is already active do nothing
				if(this.state.active){
					return
				}
				//If tile can be changed set it to active and add it to activeTiles
				else {
					this.state.active = true
					this.$store.commit('play', event.target.outerHTML)
				}
			}
			else {
				throw 'Unkonw length for activeTiles'
			}
		},
		setInactive(){
			if(this.state.canChange) this.state.active = false
		}
	},

	mounted(){
		this.setInactive()
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
