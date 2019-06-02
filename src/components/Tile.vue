<template>
    <div class="board-tiles" @click="setActive" :style="state.active ? 'background-color: rgb('+bgColor+')': 'background-color: rgb(0,0,0)'">
	</div>
</template>

<script>

export default {
	name: 'tile',
	props: {
		bgColor: String,
	},
	data(){
		return {
			state: {
				active: false
			}
		}
	},

	computed: {
		update(){

		}
	},

	watch: {
		level(){
			this.setInactive()
			console.log('watch')
		}
	},

	methods: {
		setActive(event){
			if(this.$store.state.activeTiles.length < 2){
				if(this.state.active) return
				this.state.active = true
				this.$store.commit('play', event.target.outerHTML)
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
