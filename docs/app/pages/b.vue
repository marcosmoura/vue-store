<template>
  <div @click="changeTitle">B: {{ title }}</div>
</template>

<script>
  export default {
    state: {
      default: ['title']
    },
    methods: {
      changeTitle () {
        this.title = 'BB Title'
      }
    }
  }
</script>
