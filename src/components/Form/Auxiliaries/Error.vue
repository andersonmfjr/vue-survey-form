<template>
  <div class="form-error-message">
    <type-driven-transition transition-type="fadeUpDown">
      <v-button
        v-if="fieldValid"
        class="form-button"
      >
        <span v-if="activeQuestion + 1 !== formLength">Próxima pergunta</span>
        <span v-else>Revisar questões</span>
      </v-button>

      <span
        v-else
        class="error"
      >
        <slot />
      </span>
    </type-driven-transition>
  </div>
</template>
<script>
import TypeDrivenTransition from '../Transitions/TypeDriven.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'FormError',
  components: {
    TypeDrivenTransition,
    VButton,
  },
  props: {
    fields: {
      type: Object,
      required: true,
    },
    fieldName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      formFields: {},
    };
  },
  computed: {
    fieldValid() {
      return this.formFields[this.fieldName].valid;
    },
    formLength() {
      return this.$store.state.form.formState.formLength;
    },
    activeQuestion() {
      return this.$store.state.form.formState.activeField;
    },
  },
  watch: {
    fields(newValue) {
      this.formFields = newValue;
    },
  },
  mounted() {
    this.formFields = this.fields;
  },
};
</script>

<style lang="less" scoped>
.form-error-message {
  position: absolute;
  bottom: -50px;
  right: 0;
  left: 0;
  text-align: center;
}

.error {
  font-size: 1.6rem;
  color: @color-required;
}

.form-button {
  padding: @base-padding / 2;
}
</style>
