<template>
  <div id="app">
    <app-header></app-header>
    <br>
    <router-view></router-view>

  </div>
</template>

<script>
import Header from "./components/Header"

export default {

  components : {
    appHeader : Header
  },
  data () {
    return {


    }
  },
  methods : {


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;;
}


.flex-container {
  display: flex;

}
.card {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
button {
  background-color: #1abc9c; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

</style>
