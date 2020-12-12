<template>
  <div>
    <ThemeProvider :theme="{colors}">
      <router-view/>
    </ThemeProvider>
  </div>
</template>

<script>

import {ThemeProvider} from 'vue-styled-components'

export default {
  name: 'App',
  data(){
    return{
      colors:{
        primary: '#5159AC',
        secondary: '#2CA0C1',
        danger: '#EF5837',
        success: '#02CC9C',
        white:'#FFF',
        background: '#FFF',
        grey:'#DEDEDE',
        text: '#212121',
      }
    }
  },
  components: {
    ThemeProvider,
  }
}
</script>

<style>
    *{
      padding:0;
      margin:0;
      
    }

</style>

