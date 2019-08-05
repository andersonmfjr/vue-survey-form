<template>
  <div class="radio-group">
    <vue-radio
      v-for="(option, key) in options"
      :key="key"
      v-model="selectedValue"
      :value="option"
      type="border"
    >
      {{ option }}
    </vue-radio>
  </div>
</template>

<script>
export default {
  name: 'FormRadioButton',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    fieldId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      selectedValue: this.$store.state.form.responses[this.fieldId],
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style lang="less" scoped>
.radio-group {
  margin-top: @base-margin;
}

.vue-radio {
  display: block;
  margin-left: 0;
  margin-bottom: @base-margin / 2;
}
</style>
