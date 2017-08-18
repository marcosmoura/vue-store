<template>
  <aside class="main-nav">
    <router-link to="/" exact>Home</router-link>
  </aside>
</template>

<script>
  export default {
    name: 'MainNav'
  }
</script>

<style lang="scss" scoped>
  .main-nav {
    width: 200px;
    padding: 10px 0;
    position: fixed;
  }

  a {
    padding: 5px 10px;
    display: block;
    color: currentColor;
    text-decoration: none;

    &:hover,
    &.router-link-exact-active {
      color: #437ee5;
    }

    &.router-link-exact-active {
      font-weight: 500;
    }
  }
</style>
