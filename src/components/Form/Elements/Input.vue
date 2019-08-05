<template>
  <vue-input
    v-model="value"
    :type="type"
    :placeholder="$attrs.placeholder"
  />
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      required: true,
    },
    fieldId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      value: this.$store.state.form.responses[this.fieldId],
    };
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style lang="less" scoped>
.vue-input {
  margin-top: @base-margin;
}
</style>
