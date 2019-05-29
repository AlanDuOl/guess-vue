<template>
    <div id="board-container">
        <tile v-for="(item, index) in imgTiles" :key="index" :item="item">
        </tile>
    </div>
</template>

<script>
import Tile from './Tile'
export default {
    name: 'board',
    data: () => {
        return {
            numTiles: 8,
            imgTiles: [1,1,1,1,1,1,1,1]
        }
    },
    components: {
        'tile': Tile
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
