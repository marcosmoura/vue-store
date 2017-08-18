<template>
  <footer class="main-footer">
    <div class="main-footer-section">
      <router-link to="/about">About Vue Store</router-link>
      <a href="https://github.com/vuematerial/vue-material-experiments/blob/master/LICENSE" target="_blank">License</a>
    </div>

    <div class="main-footer-section">
      <a href="https://github.com/marcosmoura" target="_blank">Made with <span class="red">❤</span> by Marcos Moura</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MainFooter'
  }
</script>

<style lang="scss" scoped>
  .main-footer {
    min-height: 96px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 4;
    background-color: #fafafa;
  }

  a {
    display: inline-block;
    border-bottom: 1px solid transparent;
    color: currentColor;
    text-decoration: none;

    &:hover {
      border-bottom-color: currentColor;

      .red {
        display: inline-block;
        transform: scale(1.4);
        color: red;
      }
    }

    + a {
      margin-left: 32px;
    }
  }

  .main-footer-section {
    position: relative;
  }

  .red {
    transition: .3s ease;
  }
</style>
