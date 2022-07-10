<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {


    return {}
  }
}
</script>

<style lang="scss">
/* @font-face{
    font-family: "SF Pro Text";
    src: url("@/assets/fonts/SF-Pro-Text-Bold.otf");
    font-weight: 700;
} */
@font-face {
    font-family: "SF Pro Text";
    src: url("@/assets/fonts/SF-Pro-Text-Regular.otf");
    font-weight: 400;
}

@font-face {
    font-family: "SF Pro Text";
    src: url("@/assets/fonts/SF-Pro-Text-Medium.otf");
    font-weight: 500;
}

@font-face {
    font-family: "SF Pro Text";
    src: url("@/assets/fonts/SF-Pro-Text-Heavy.otf");
    font-weight: 900;
}

html,
body {
    font-family: "SF Pro Text" !important;
    background-color: white;
}

.layout {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 10px;
    margin-bottom: 227px;
}
</style>