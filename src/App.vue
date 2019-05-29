<template>
  <div id="app">
    <h5>Nível</h5>
    <div id="lvl-btns-container">
      <button class="lvl-btn">1</button>
      <button class="lvl-btn">2</button>
      <button class="lvl-btn">3</button>
    </div>
    <Board />
  </div>
</template>

<script>
import Board from './components/Board'
export default {
  name: 'app',
  components: {
    Board
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
