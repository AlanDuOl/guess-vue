<template>
    <div id="board-container">
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
		paths: Array
	}
}
</script>

<style>

    #board-container {
        display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }

</style>
