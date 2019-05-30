<template>
    <div id="board-container">
        <tile v-for="(value, key) in images" :key="key" :url="value">
        </tile>
		{{this.paths}}
    </div>
</template>

<script>
import Tile from './Tile'
export default {
    name: 'board',
    components: {
        'tile': Tile
    },
	props: {
		paths: Array,
		numTiles: String
	},
	data: () => {
		return {
			tilePaths: []
		}
	},
	methods: {
		shuffleTiles(){
			let images = this.paths
			const finalPaths = new Array(images.length * 2)
			let cIndex = 0
			while(images.length > 0){
				let index = Math.floor(Math.random() * images.length)
				if(this.numTiles.includes(images[index])){
					finalPaths[cIndex] = images[index]
					images.splice(index,1)
					cIndex++
				}
				else {
					this.tilePaths[cIndex] = images[index]
					cIndex++
				}
			}
			this.tilePaths = finalPaths
		}
	}
}
</script>

<style>

    #board-container {
        display: flex;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
    }

</style>
