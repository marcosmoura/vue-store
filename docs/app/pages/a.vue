<template>
  <div @click="changeTitle">A: {{ title }}</div>
</template>

<script>
  export default {
    state: {
      default: ['title']
    },
    methods: {
      changeTitle () {
        this.title = 'AA Title'
      }
    }
  }
</script>
