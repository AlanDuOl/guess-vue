<template>
    <div :id="grid[currentLvl]">
        <tile :disable="disableTile" :update="update" v-for="(value, index) in finalImages" :key="index" :bgColor="value.red+',' + value.green+ ',' + value.blue">
        </tile>
    </div>
</template>

<script>
import Tile from './Tile.vue'
import levels from '@/config/levels.js'

export default {

    name: 'board',

    components: {
        'tile': Tile
	},

	data() {
		return {
			grid: {
				'12': 'board-container-1',
				'16': 'board-container-2',
				'20': 'board-container-3'
            },
            levels,
			disableTile: 0,
			update: 0
		}
    },

    computed: {
        currentLvl(){
            return this.$store.state.currentLevel
        },
        finalImages(){
            return this.setImages(this.$store.state.currentLevel)
        },
		checkMatch(){
			return this.$store.state.checkMatch
		},
		numPlays(){
			return this.$store.state.numPlays
		}
    },
	
	watch: {
		checkMatch(){
			if(this.$store.state.activeTiles[0] === this.$store.state.activeTiles[1]){
				this.disableTile++
				this.$store.commit('addMatch', this.$store.state.activeTiles[0])
				this.$store.commit('addMatch', this.$store.state.activeTiles[1])
				this.isGameOver(this.$store.state.matchs.length)
			} else {
				this.update++
			}
		}
	},
    
    methods: {

		setImages(currentLvl){
            let result = []
			if(currentLvl === this.levels.lvl1){
				result = this.setRandomColors(currentLvl)
			}
			else if(currentLvl === this.levels.lvl2){
				result = this.setRandomColors(currentLvl)
			}
			else if(currentLvl === this.levels.lvl3){
				result = this.setRandomColors(currentLvl)
			}
			else {
				throw 'Unknow value for currentLvl'
            }
            return result
		},

		setRandomColors(currentLvl){
			let images = []
			while(images.length < currentLvl/2){
				let color = {
					red: Math.floor(Math.random() * 255),
					green: Math.floor(Math.random() * 255),
					blue: Math.floor(Math.random() * 255)
                }
                if(color.red === 0 && color.green === 0 && color.blue === 0) continue
				if(!images.includes(color)){
					images.push(color)
				}
			}
			return this.shuffleTiles(images)
		},

		shuffleTiles(images){
			const finalImages = new Array(images.length * 2)
			let cIndex = 0
			while(images.length > 0){
				let index = Math.floor(Math.random() * images.length)
				if(finalImages.includes(images[index])){
					finalImages[cIndex] = images[index]
					images.splice(index,1)
					cIndex++
				}
				else {
					finalImages[cIndex] = images[index]
					cIndex++
				}
			}
			return finalImages
		},
		
		isGameOver(matchs){
			if(matchs === Number(this.currentLvl)){
				alert(`Voce venceu!\nJogadas: ${this.numPlays}`)
			}
		}
    }
}
</script>

<style>

	#board-container-1 {
        display: grid;
		grid: repeat(3, 1fr) / repeat(4, 1fr);
		align-items: center;
		justify-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }
	
	#board-container-2 {
        display: grid;
		grid: repeat(4, 1fr) / repeat(4, 1fr);
		align-items: center;
		justify-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }
	
	#board-container-3 {
        display: grid;
		grid: repeat(4, 1fr) / repeat(5, 1fr);
		align-items: center;
		justify-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }

@media screen and (min-width: 551px) and (max-width: 899px) {

	#board-container-1 {
		width: 80%;
        max-height: 500px;
	}

	#board-container-2 {
		width: 80%;
        max-height: 500px;
	}

	#board-container-3 {
		width: 80%;
        max-height: 500px;
	}
	
}

@media screen and (max-width: 550px) {
	
	#board-container-1 {
		width: 90%;
        max-height: 400px;
	}

	#board-container-2 {
		width: 90%;
        max-height: 400px;
	}

	#board-container-3 {
		width: 90%;
        max-height: 400px;
	}

}

</style>
