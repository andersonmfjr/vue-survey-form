<template>
  <vue-select
    v-model="selected"
    :data="formatedOptions"
    placeholder="Selecione"
    @change="handleChange"
  >
    <vue-option
      v-for="i in formatedOptions"
      :key="i.value"
      :value="i.value"
      :label="i.label"
    />
  </vue-select>
</template>

<script>
export default {
  name: 'FormSelect',
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
      selected: '',
    };
  },
  computed: {
    formatedOptions() {
      return this.options.map(el => ({ label: el, value: el }));
    },
  },
  created() {
    if (this.value.length > 0) {
      this.selected = this.value;
    }
  },
  methods: {
    handleChange() {
      this.$emit('input', this.selected);
    },
  },
};
</script>

<style lang="less" scoped>
.vue-select {
  display: block;
  margin-left: 0;
  margin-top: @base-margin;
}

.vue-select__option--selected {
  color: @color-primary;
}
</style>
