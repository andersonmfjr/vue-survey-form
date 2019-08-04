<template>
  <div>
    <type-driven-transition transition-type="fadeUpDown">
      <div
        class="form-complete"
      >
        <h1>Revise suas respostas!</h1>
        <p
          v-for="question in questions"
          :key="question.id"
        >
          <span> {{ question.label }}: </span> {{ question.value }}
        </p>
      </div>
    </type-driven-transition>
  </div>
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
  },
  mounted() {
    this.questions = this.formData
      .map(el => ({ id: el.id, label: el.label, value: this.responses[el.id] || '' }));
  },
};
</script>

<style lang="less" scoped>

</style>
