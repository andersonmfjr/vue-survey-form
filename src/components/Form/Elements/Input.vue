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
    field: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: this.$store.state.form.responses[this.field],
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
