<template>
  <app-content>
    Title: <span @click="changeTitle">{{ title }}</span>

    <aa></aa>
    <bb></bb>
  </app-content>
</template>

<script>
  import Aa from './a'
  import Bb from './b'

  export default {
    name: 'Home',
    components: {
      Aa,
      Bb
    },
    state: {
      default: ['title']
    },
    methods: {
      changeTitle () {
        this.title = 'Another Title'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
