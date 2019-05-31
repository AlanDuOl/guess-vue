<template>
    <div :id="grid[level]">
        <tile v-for="(value, index) in paths" :key="index" :style="'background-color'+':'+ 'rgb('+value.red+','+ value.green+','+ value.blue+')'">
        </tile>
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
		level: String
	},
	data: function() {
		return {
			grid: {
				'12': 'board-container-1',
				'16': 'board-container-2',
				'20': 'board-container-3'
			}
		}
	}
}
</script>

<style>

    #board-container-1 {
        display: grid;
		grid: repeat(3, 1fr) / repeat(4, 1fr);
		grid-gap: 1rem;
		align-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }
	
	#board-container-2 {
        display: grid;
		grid: repeat(4, 1fr) / repeat(4, 1fr);
		grid-gap: 1rem;
		align-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }
	
	#board-container-3 {
        display: grid;
		grid: repeat(4, 1fr) / repeat(5, 1fr);
		grid-gap: 1rem;
		align-items: center;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }

</style>
