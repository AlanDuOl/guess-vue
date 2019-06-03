import Vue from 'vue'
import Vuex from 'vuex'
import levels from './levels.js'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		currentLevel: levels.lvl1,
		reloadSameLevel: 0,
		numPlays: 0,
		activeTiles: [],
		hasChange: false
	},

	mutations: {
		setLevel(state, value){
			if(state.currentLevel === value){
				state.reloadSameLevel++
			} else {
				state.currentLevel = value	
			}
			state.activeTiles = []
		},
		play(state, value){
			state.activeTiles.push(value)
			state.numPlays++
		},
		resetElements(state){
			state.activeTiles = []
		}
	}
	
})
