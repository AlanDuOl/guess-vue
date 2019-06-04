<template>
  <div id="app">
    <h5>Nivel</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn" :value="levels.lvl1" @click="changeLvl">Nivel 1</button>
      <button class="lvl-btn" :value="levels.lvl2" @click="changeLvl">Nivel 2</button>
      <button class="lvl-btn" :value="levels.lvl3" @click="changeLvl">Nivel 3</button>
    </div>
    <Board />
  </div>
</template>

<script>
import Board from './components/Board'
import levels from '@/config/levels.js'

export default {

	name: 'app',

	components: {
		Board
	},

	data(){
		return {
			levels
		}
	},

	methods: {

		changeLvl(event) {
			this.$store.commit('setLevel', event.target.value)
			this.$store.commit('resetBoard')
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
