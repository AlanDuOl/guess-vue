<template>
  <div id="app">
    <h5>Nivel</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn" :value="levels.lvl1" v-on:click="changeLvl">Nivel 1</button>
      <button class="lvl-btn" :value="levels.lvl2" @click="changeLvl">Nivel 2</button>
      <button class="lvl-btn" :value="levels.lvl3" @click="changeLvl">Nivel 3</button>
    </div>
    <Board :paths="finalPaths" :numTiles="numTiles"/>
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
      numTiles: '8',
      paths: ['@/assets/imgs/red.png', '@/assets/imgs/green.png',
				'@/assets/imgs/blue.png', '@/assets/imgs/brown.png',
				'@/assets/imgs/gray.png', '@/assets/imgs/orange.png'
      ],
      finalPaths: ['@/assets/imgs/red.png', '@/assets/imgs/green.png',
        '@/assets/imgs/blue.png', '@/assets/imgs/brown.png'
      ],
      levels: {
        lvl1: '8',
        lvl2: '10',
        lvl3: '12'
      }
    }
  },

  methods: {

    changeLvl(event) {
      this.numTiles = event.target.value
      this.setPaths(this.numTiles)
    },

    setPaths(numTiles){
      if(numTiles === this.levels.lvl1){
        this.finalPaths = this.paths.slice(0,4)
      }
      else if(numTiles === this.levels.lvl2){
        this.finalPaths = this.paths.slice(0,5)
      }
      else if(numTiles === this.levels.lvl3){
        this.finalPaths = this.paths.slice(0,6)
      }
      else {
        throw 'Unknow value for numTiles'
      }
    }

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
