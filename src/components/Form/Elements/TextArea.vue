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
    fieldId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      textAreaValue: this.$store.state.form.responses[this.fieldId],
    };
  },
  watch: {
    textAreaValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>
