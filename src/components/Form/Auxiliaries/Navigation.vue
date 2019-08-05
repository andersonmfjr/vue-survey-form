<template>
  <div class="nav">
    <div
      class="nav-button"
      @click="$emit('back')"
    >
      <v-icon name="chevron-up" />
    </div>
    <progress-bar
      :options="options"
      :value="step"
    />
    <div
      class="nav-button"
      @click="$emit('next')"
    >
      <v-icon name="chevron-down" />
    </div>
  </div>
</template>

<script>
import ProgressBar from 'vuejs-progress-bar';

const PROGRESS_WIDTH = 200;

export default {
  name: 'FormNavigation',
  components: {
    ProgressBar,
  },
  data() {
    return {
      options: {
        text: {
          hideText: true,
        },
        progress: {
          color: '#FFFFFF',
          backgroundColor: '#333052',
        },
        layout: {
          height: 15,
          verticalTextAlign: 61,
          width: PROGRESS_WIDTH,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: 'line',
        },
      },
    };
  },
  computed: {
    formLength() {
      return this.$store.state.form.formState.formLength;
    },
    activeQuestion() {
      return this.$store.state.form.formState.activeField;
    },
    progressAddition() {
      return 100 / this.formLength;
    },
    step() {
      return (this.activeQuestion + 1) * this.progressAddition;
    },
  },
};
</script>

<style lang="less">
.nav {
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: @base-padding;
  padding-right: @base-padding;
  background-color: @color-secondary;
  color: @color-white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-button {
  background-color: @color-primary;
  width: 3.5rem;
  height: 3.5rem;
  color: @color-white;
  font-size: 1.6rem;
  border-radius: @base-radius / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#line-progress {
  border-radius: @base-radius / 2;
}
</style>
