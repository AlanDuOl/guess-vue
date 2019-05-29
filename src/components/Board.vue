<template>
    <div id="board-container">
        <tile v-for="(value, key) in images" :key="key" :url="value">
        </tile>
		{{numTiles}}
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
		numTiles: String
	},
	data: () => {
		return {
			images: { red: '@/assets/imgs/red.png',
				green: '@/assets/imgs/green.png',
				blue: '@/assets/imgs/blue.png',
				brown: '@/assets/imgs/brown.png',
				gray: '@/assets/imgs/gray.png',
				orange: '@/assets/imgs/orange.png'
			},
			tiles: []
		}
	},
	methods: {
		shuffleTiles(){
			if(this.tiles.lenght < this.numTiles+1){
				
			}
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
