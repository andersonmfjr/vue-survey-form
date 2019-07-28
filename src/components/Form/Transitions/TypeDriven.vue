<template>
  <transition
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    name="type-based-transition"
    mode="out-in"
    :duration="duration"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'TypeDrivenTransiton',
  props: {
    transitionType: {
      type: String,
      required: false,
      default: 'fadeInOut',
    },
  },
  data() {
    return {
      fadeInOut: {
        enter: 'fadeIn',
        leave: 'fadeOut',
        duration: 800,
      },
      fadeUpDown: {
        enter: 'fadeInUp',
        leave: 'fadeOutDown',
        duration: 800,
      },
    };
  },
  computed: {
    enterClass() {
      return `animated ${this[this.transitionType].enter}`;
    },
    leaveClass() {
      return `animated ${this[this.transitionType].leave}`;
    },
    duration() {
      return this[this.transitionType].duration;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
