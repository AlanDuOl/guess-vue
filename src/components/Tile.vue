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
				active: false
			}
		}
	},

	watch: {
		level(){
			this.setInactive()
			this.$store.commit('resetElements')
		},
		resetLevels(){
			this.setInactive()
		}

	},

	methods: {
		setActive(event){
			if(this.$store.state.activeTiles.length < 2){
				if(this.state.active) return
				this.state.active = true
				this.$store.commit('play', event.target.outerHTML)
			} else {
				console.log('jumped here')
			}

		},
		setInactive(){
			this.state.active = false
		}
	},

	created(){
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
