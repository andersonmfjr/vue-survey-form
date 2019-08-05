<template>
  <type-driven-transition transition-type="fadeUpDown">
    <div
      v-if="isComplete"
      class="questions__container"
    >
      <h1>Revise suas respostas!</h1>
      <p
        v-for="(question, i) in questions"
        :key="question.id"
        class="field__container"
      >
        <span class="field__label"> {{ i + 1 }}. {{ question.label }}: </span>
        <span class="field__response"> {{ question.value }} </span>
      </p>
    </div>
  </type-driven-transition>
</template>

<script>
import TypeDrivenTransition from '../Transitions/TypeDriven.vue';

export default {
  name: 'FormResult',
  components: {
    TypeDrivenTransition,
  },
  data() {
    return {
      questions: [],
    };
  },
  computed: {
    formData() {
      return this.$store.state.form.formData;
    },
    responses() {
      return this.$store.state.form.responses;
    },
    isComplete() {
      return this.$store.state.form.formState.isComplete;
    },
  },
  watch: {
    responses: {
      handler(newValue) {
        this.questions = this.formData
          .map(el => ({ id: el.id, label: el.label, value: newValue[el.id] || '' }));
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.questions__container {
  padding: @base-padding;

  h1 {
    color: @color-primary;
    margin-bottom: @base-margin * 3;
  }

  .field {
    &__container {
      margin-bottom: @base-margin * 2;
    }

    &__label {
      color: @color-primary;
      font-size: 2rem;
    }

    &__response {
      color: @color-secondary;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>
