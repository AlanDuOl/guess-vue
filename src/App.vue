<template>
  <div id="app">
    <h5>Nivel</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn" :value="levels.lvl1" v-on:click="changeLvl">Nivel 1</button>
      <button class="lvl-btn" :value="levels.lvl2" @click="changeLvl">Nivel 2</button>
      <button class="lvl-btn" :value="levels.lvl3" @click="changeLvl">Nivel 3</button>
    </div>
    <Board :paths="images" />
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
      currentLvl: '8',
      images: [],
      levels: {
        lvl1: '8',
        lvl2: '10',
        lvl3: '12'
      }
    }
  },

  methods: {

    changeLvl(event) {
      this.currentLvl = event.target.value
      this.setImages(this.currentLvl)
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
    }

  },
  
  mounted(){
	this.setImages(this.currentLvl)
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
