<template>
  <label class="field-label">
    <span>{{ fixedOrder }}. </span>
    <span>
      <span
        v-if="required"
        class="required"
      >*
      </span>
      {{ label }}:
    </span>
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    validation: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    fixedOrder() {
      return this.order + 1;
    },
    required() {
      return this.validation.includes('required');
    },
  },
};
</script>

<style lang="less" scoped>
.field-label {
  color: @color-primary;
  font-size: 2rem;
  margin-bottom: @base-padding;
}

.required {
  color: @color-required;
}
</style>
