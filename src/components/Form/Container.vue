<template>
  <div>
    <form
      v-if="!loading && success"
      @submit.prevent="submit"
    >
      <template v-for="(field, key) in formFields">
        <form-group
          :key="field.name"
          :field-id="key"
        >
          <div class="form-area">
            <form-label
              :for="field.name"
              :label="field.label"
              :order="key"
              :validation="field.validation"
            />
            <Component
              :is="field.component"
              :id="field.name"
              v-model="responses[field.id]"
              v-validate="field.validation"
              :field="field.name"
              v-bind="{ ...field.options.attrs }"
              :name="field.name"
              :type="field.type"
              :data-vv-as="field.label"
              :options="!!field.options.choices ? field.options.choices : false"
              @input="handleResponse(field)"
            />
          </div>
          <form-error
            :fields="fields"
            :field-name="field.name"
          >
            {{ errors.first(field.name) }}
          </form-error>
        </form-group>
      </template>

      <form-navigation
        @back="back"
        @next="next"
      />

      <form-result v-if="isComplete" />
    </form>

    <div
      v-if="loading"
      class="information__container"
    >
      <v-icon
        name="spinner"
        scale="3"
        spin
      />
    </div>

    <div
      v-if="!loading && error"
      class="information__container"
    >
      <span class="information__error">
        Ocorreu algum erro, por favor recarregue a página e tente novamente.
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { TimelineLite, Elastic } from 'gsap';
import { UPDATE_FORM_DATA, UPDATE_FORM_STATE, RESET_FETCH_STATUS } from '@/store/form/types';
import getComponent from './utils/getComponent';

// Form Components
import FormLabel from './Elements/Label.vue';
import FormGroup from './Auxiliaries/Group.vue';
import FormError from './Auxiliaries/Error.vue';
import FormNavigation from './Auxiliaries/Navigation.vue';
import FormResult from './Auxiliaries/Result.vue';

export default {
  name: 'FormContainer',
  state: {
    formFields: [],
  },
  components: {
    FormLabel,
    FormGroup,
    FormError,
    FormNavigation,
    FormResult,
  },
  computed: {
    firestoreData() {
      return this.$store.state.form.formData;
    },
    formState() {
      return this.$store.state.form.formState;
    },
    isComplete() {
      return this.$store.state.form.formState.isComplete;
    },
    responses() {
      return this.$store.state.form.responses;
    },
    loading() {
      return this.$store.state.form.fetching;
    },
    success() {
      return this.$store.state.form.fetchSuccess;
    },
    error() {
      return this.$store.state.form.fetchError;
    },
    activeFieldName() {
      return this.fields[this.formFields[this.formState.activeField].name];
    },
    isCurrentFieldValid() {
      if (this.isLastField) {
        return this.activeFieldName && this.activeFieldName.valid;
      }
    },
    isLastField() {
      return this.formState.activeField < this.formState.formLength;
    },
  },
  watch: {
    isLastField(newValue) {
      if (!newValue) {
        this.updateFormState({ key: 'isComplete', value: true });
      } else {
        this.updateFormState({ key: 'isComplete', value: false });
      }
    },
    isCurrentFieldValid(newValue) {
      if (newValue) {
        this.updateFormState({ key: 'isValid', value: true });
      } else {
        this.updateFormState({ key: 'isValid', value: false });
      }
    },
    success(value) {
      if (value) {
        this.formFields = this.firestoreData.map((field) => {
          const component = getComponent(field.type);
          return { ...field, component };
        });
      }
    },
  },
  async created() {
    await this.fetchForm();
  },
  destroyed() {
    this.resetFetchStatus();
  },
  methods: {
    ...mapMutations({
      updateField: `form/${UPDATE_FORM_DATA}`,
      updateFormState: `form/${UPDATE_FORM_STATE}`,
      resetFetchStatus: `form/${RESET_FETCH_STATUS}`,
    }),
    ...mapActions({
      fetchForm: 'form/fetchForm',
    }),
    handleResponse(field) {
      this.updateField({ key: field.id, value: this.responses[field.id] });
    },
    next() {
      this.updateFormState({ key: 'isNext', value: true });
      if (this.isCurrentFieldValid) {
        this.proceed();
      } else {
        this.decline('.form-area');
      }
    },
    back() {
      this.updateFormState({ key: 'isNext', value: false });

      if (this.formState.activeField) {
        this.formState.activeField = this.formState.activeField - 1;
      }
    },
    submit() {
      this.updateFormState({ key: 'isNext', value: true });

      if (this.isCurrentFieldValid) {
        this.proceed();
      }
    },
    proceed() {
      if (this.isLastField) {
        const value = this.formState.activeField + 1;
        this.updateFormState({ key: 'activeField', value });
      }
    },
    decline(element) {
      const tl = new TimelineLite();
      tl.to(element, 0.1, { x: 30 });
      tl.to(element, 3, {
        x: 0,
        color: '#ef6574',
        ease: Elastic.easeOut.config(0.9, 0.1),
      });
    },
  },
};
</script>

<style lang="less" scoped>
form, .information__container {
  min-height: 100vh - 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.information {
  &__container {
    color: @color-primary;
  }

  &__error {
    color: @color-required;
    font-size: 1.6rem;
    text-align: center;
    padding: @base-padding;
  }
}
</style>
