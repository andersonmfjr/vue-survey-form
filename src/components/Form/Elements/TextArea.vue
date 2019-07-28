<template>
  <vue-input
    v-model="textAreaValue"
    type="textarea"
    :placeholder="$attrs.placeholder"
    :rows="5"
  />
</template>

<script>
export default {
  name: 'FormTextArea',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    field: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      textAreaValue: this.$store.state.form.responses[this.field],
    };
  },
  watch: {
    textAreaValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>
