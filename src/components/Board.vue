<template>
    <div id="board-container">
        <tile v-for="(value, index) in tileImages" :key="index" :image="value">
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
	},
	data: () => {
		return {
			tileImages: []
		}
	},
	methods: {
		shuffleTiles(){
			let images = this.paths
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
			this.tileImages = finalImages
			console.log(images)
		}
	},
	mounted() {
		this.shuffleTiles()
	}
}
</script>

<style>

    #board-container {
        display: flex;
		justify-content: space-around;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: auto;
		padding: 16px;
    }

</style>
