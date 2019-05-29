<template>
  <div id="app">
    <h5>Nivel</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn" value="16" v-on:click="changeLvl">Nivel 1</button>
      <button class="lvl-btn" value="25" @click="changeLvl">Nivel 2</button>
      <button class="lvl-btn" value="36" @click="changeLvl">Nivel 3</button>
    </div>
    <Board :numTiles="numTiles" />
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
		numTiles: '16'
	}
  },
  methods: {
	changeLvl(event) {
		this.numTiles = event.target.value
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
