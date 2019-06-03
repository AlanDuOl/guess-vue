<template>
    <div class="board-tiles" @click="setActive" :style="state.active ? 'background-color: rgb('+bgColor+')': 'background-color: rgb(0,0,0);'">
	{{hasChange}}
	</div>
</template>

<script>

export default {

	name: 'tile',
	
	props: {
		bgColor: String,
		level: String,
		hasChange: Boolean
	},
	
	data(){
		return {
			state: {
				active: false
			}
		}
	},
	
	computed: {
		resetLevels(){
			return this.$store.state.reloadSameLevel
		}
	},

	watch: {
		level(){
			//Reset on level change
			this.setInactive()
			this.$store.commit('resetElements')
		},
		resetLevels(){
			//Reset same level after first play (numPlays bigger than zero
			console.log('reset')
			this.setInactive()
		}
	},

	methods: {
		setActive(event){
			if(this.$store.state.activeTiles.length < 2){
				if(this.state.active) return
				this.$store.commit('play', event.target.outerHTML)
				this.state.active = true
			}
		},
		setInactive(){
			this.state.active = false
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
