import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		currentLevel: ''
	},

	mutations: {
		setLevel(state, value){
			state.currentLevel = value
		}
	}
	
})
