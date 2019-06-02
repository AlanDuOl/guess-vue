import Vue from 'vue'
import Vuex from 'vuex'
import levels from './levels.js'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		currentLevel: levels.lvl1,
		reload: true,
		activeTiles: [],
		disableTiles: false
	},

	mutations: {
		setLevel(state, value){
			state.currentLevel = value
		},
		reload(state, value){
			state.reload = value
		},
		play(state, value){
			state.activeTiles.push(value)
		},
		disableTiles(state, value){
			state.disableTiles = value
		}
	}
	
})
