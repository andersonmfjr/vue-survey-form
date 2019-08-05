<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
};
</script>

<style lang="less" scoped>
button {
  padding: @base-padding;
  border-radius: @base-radius;
  border: none;
  background-color: @color-primary;
  cursor: pointer;
  color: @color-white;

  &:hover {
    background-color: @color-secondary;
  }
}
</style>
