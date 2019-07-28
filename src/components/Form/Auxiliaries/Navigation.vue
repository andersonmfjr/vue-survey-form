<template>
  <div class="nav">
    <div
      class="nav-button"
      @click="$emit('back')"
    >
      <v-icon name="chevron-up" />
    </div>
    <div
      class="nav-button"
      @click="$emit('next')"
    >
      <v-icon name="chevron-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormNavigation',
};
</script>

<style lang="less">
.nav {
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: @base-padding;
  padding-right: @base-padding;
  background-color: @color-secondary;
  color: @color-white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-button {
  background-color: @color-primary;
  width: 3.5rem;
  height: 3.5rem;
  color: @color-white;
  font-size: 1.6rem;
  border-radius: @base-radius / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
