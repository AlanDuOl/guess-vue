<template>
    <div class="board-tiles" @click="setActive" :style="state.active ? 'background-color: rgb('+bgColor+')': 'background-color: rgb(0,0,0);'">
	{{state.active}}
	</div>
</template>

<script>

export default {

	name: 'tile',
	
	props: {
		bgColor: String,
		level: String,
		checkMatch: Number,
		update: Number,
		disable: Number
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
		},
		resetBoard(){
			return this.$store.state.resetBoard
		}
	},

	watch: {
		resetLevels(){
			//Reset same level after first play (numPlays bigger than zero)
			if(this.state.canChange) this.setInactive()
			this.$store.commit('resetElements')
		},
		update(){
			setTimeout(() => {
				if(this.state.canChange) this.state.active = false
			}, 500)
		},
		disable(){
			if(this.state.active) this.state.canChange = false
		},
		resetBoard(){
			this.state.active = false
			this.state.canChange = true
		}
	},

	methods: {
		setActive(event){
			if(this.state.canChange){
				if(this.$store.state.activeTiles.length < 2){
					//If tile is already active do nothing
					if(this.state.active){
						return
					}
					//If tile can be changed set it to active and add it to activeTiles
					else {
						this.state.active = true
						this.$store.commit('play', this.bgColor)
						this.$store.commit('checkMatch')
					}
				}
				else if(this.$store.state.activeTiles.length === 2){
					this.$store.commit('resetElements')
				}
				else {
					throw 'Unkonw length for activeTiles'
				}
			}
		},
		setInactive(){
			if(this.state.canChange) this.state.active = false
		}
	},

	mounted(){
		if(this.state.canChange) this.setInactive()
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
