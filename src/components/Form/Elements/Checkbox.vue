<template>
  <div>
    <vue-checkbox-group
      v-model="selectedValues"
      type="border"
    >
      <vue-checkbox
        v-for="(option, key) in options"
        :key="key"
        :value="option"
        type="border"
      >
        {{ option }}
      </vue-checkbox>
    </vue-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  directives: {
    checked(el, binding) {
      const { value, arg } = binding;

      if (value.includes(arg)) {
        // eslint-disable-next-line no-param-reassign
        el.checked = true;
      } else {
        // eslint-disable-next-line no-param-reassign
        el.checked = false;
      }

      return el;
    },
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      selectedValues: [],
    };
  },
  watch: {
    selectedValues(newVal) {
      this.$emit('input', newVal);
    },
  },
  created() {
    if (this.value.length > 0) {
      this.selectedValues = this.value;
    }
  },
};
</script>

<style lang="less" scoped>
.vue-checkbox {
  display: block;
  margin-left: 0;
  margin-bottom: @base-margin / 2;

  &-group {
    margin-top: @base-margin;
  }
}
</style>
