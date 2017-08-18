<template>
  <div class="app">
    <main-header></main-header>

    <div class="app-wrapper">
      <main-nav></main-nav>
      <router-view></router-view>
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainHeader from './template/MainHeader'
  import MainNav from './template/MainNav'
  import MainFooter from './template/MainFooter'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainNav,
      MainFooter
    }
  }
</script>

<style lang="scss">
  html,
  body,
  .app {
    height: 100%;
  }

  html {
    box-sizing: border-box;

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  audio,
  img,
  object,
  embed,
  canvas,
  video,
  iframe {
    height: auto;
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }
</style>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    color: rgba(#000, .87);
    font-family: "Roboto Mono", "Operator Mono", "Hack", monospace;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .01em;
    line-height: 20px;
  }

  .app-wrapper {
    display: flex;
    flex: 1;
    overflow: auto;
  }
</style>
