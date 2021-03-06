import Vue from 'vue'
import Vuex from 'vuex'
import levels from './levels.js'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		currentLevel: levels.lvl1,
		reloadTiles: 0,
		numPlays: 0,
		activeTiles: [],
		checkMatch: 0,
		resetBoard: 0,
		matchs: []
	},

	mutations: {
		setLevel(state, value){
			state.currentLevel = value
			state.reloadTiles++
			state.activeTiles = []
			state.numPlays = 0
		},
		play(state, value){
			state.activeTiles.push(value)
			state.numPlays++
		},
		resetElements(state){
			state.activeTiles = []
		},
		checkMatch(state){
			if(state.activeTiles.length === 2) state.checkMatch++
		},
		resetBoard(state){
			state.resetBoard++
		},
		addMatch(state, value){
			state.matchs.push(value)
		},
		resetMatch(state){
			state.matchs = []
		}
	}
	
})
