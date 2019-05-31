<template>
  <div id="app">
    <h5>Nivel</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn" :value="levels.lvl1" v-on:click="changeLvl">Nivel 1</button>
      <button class="lvl-btn" :value="levels.lvl2" @click="changeLvl">Nivel 2</button>
      <button class="lvl-btn" :value="levels.lvl3" @click="changeLvl">Nivel 3</button>
    </div>
    <Board :paths="finalImages" :level="currentLvl" />
  </div>
</template>

<script>
import Board from './components/Board'

export default {

	name: 'app',

	components: {
		Board
	},
  
	data: () => {
		return {
			currentLvl: '12',
			images: [],
			finalImages: [],
			levels: {
				lvl1: '12',
				lvl2: '16',
				lvl3: '20'
			}
		}
	},

	methods: {

		changeLvl(event) {
			this.currentLvl = event.target.value
			this.setImages(this.currentLvl)
			this.shuffleTiles(this.images)
			this.$store.commit('setLevel', this.currentLvl)
		},

		setRandomColors(currentLvl){
			let images = []
			while(images.length < currentLvl/2){
				let color = {
					red: Math.floor(Math.random() * 255),
					green: Math.floor(Math.random() * 255),
					blue: Math.floor(Math.random() * 255)
				}
				if(!images.includes(color)){
					images.push(color)
				}
			}
			this.images = images
		},

		setImages(currentLvl){
			if(currentLvl === this.levels.lvl1){
				this.setRandomColors(currentLvl)
			}
			else if(currentLvl === this.levels.lvl2){
				this.setRandomColors(currentLvl)
			}
			else if(currentLvl === this.levels.lvl3){
				this.setRandomColors(currentLvl)
			}
			else {
				throw 'Unknow value for currentLvl'
			}
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
			this.finalImages = finalImages
		}
	},

	mounted(){
		this.setImages(this.currentLvl)
		this.shuffleTiles(this.images)
		this.$store.commit('setLevel', this.currentLvl)
	}
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#lvl-btns-container {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

h5 {
  margin-bottom: 8px;
}

.lvl-btn {
  margin: 0 8px;
}

</style>
