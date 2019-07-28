<template>
  <data-driven-transition :is-next="isNext">
    <div
      v-if="active"
      :key="fieldId"
      class="form-group"
    >
      <slot />
    </div>
  </data-driven-transition>
</template>

<script>
import DataDrivenTransition from '../Transitions/DataDriven.vue';

export default {
  name: 'FormGroup',
  components: {
    DataDrivenTransition,
  },
  props: {
    fieldId: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    formState() {
      return this.$store.state.form.formState;
    },
    active() {
      return this.formState.activeField === this.fieldId;
    },
    isNext() {
      return this.formState.isNext;
    },
  },
};
</script>

<style lang="less" scoped>
.form-group {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: @base-padding;
}
</style>
