<template>
  <div class="app-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AppContent'
  }
</script>

<style lang="scss" scoped>
  .app-content {
    max-width: 1040px;
    padding: 10px;
    margin-left: 200px;

    >>> p {
      margin-top: 0;
    }
  }
</style>
