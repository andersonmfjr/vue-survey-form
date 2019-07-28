<template>
  <transition-group
    :appear="true"
    appear-active-class="animated fadeInUp"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    name="data-driven-transition"
    :duration="500"
    mode="out-in"
    tag="div"
    class="form-question"
  >
    <slot />
  </transition-group>
</template>

<script>
export default {
  name: 'DataDrivenTransition',
  props: {
    isNext: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    enterClass() {
      if (this.isNext) {
        return 'animated fadeInUp';
      }

      return 'animated fadeInDown';
    },
    leaveClass() {
      if (this.isNext) {
        return 'animated fadeOutUp';
      }

      return 'animated fadeOutDown';
    },
  },
};
</script>

<style lang="less" scoped>
.form-question {
  width: 100%;
  max-width: 600px;
}
</style>
