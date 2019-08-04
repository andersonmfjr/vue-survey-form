<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import 'animate.css/animate.min.css';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="less">
html {
  font-size: 10px;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

::selection {
  background: @color-primary;
  color: @color-white;
}
::-moz-selection {
  background: @color-primary;
  color: @color-white;
}

#app {
  height: 100%;
}

.vue-checkbox--checked {
  color: @color-primary;
}

.vue-checkbox--checked .vue-checkbox__inner {
  background-color: @color-primary;
  border-color: @color-primary;
}

.vue-checkbox--checked.vue-checkbox--bordered {
  border-color: @color-primary;
}

.vue-input__inner:focus {
  border-color: @color-primary;
}

.vue-radio--checked {
  color: @color-primary;
}

.vue-radio--checked .vue-radio__inner {
  background-color: @color-primary;
  border-color: @color-primary;
}

.vue-radio--checked.vue-radio--bordered {
  border-color: @color-primary;
}
</style>
