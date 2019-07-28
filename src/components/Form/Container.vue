<template>
  <form
    @submit.prevent="submit"
  >
    <template v-for="(field, key) in formFields">
      <form-group
        :key="`${_uid}-${field.name}`"
        :field-id="key"
      >
        <div class="form-area">
          <form-label
            :for="`${_uid}-${field.name}`"
            :label="field.label"
            :order="key"
            :validation="field.validation"
          />
          <Component
            :is="field.component"
            :id="`${_uid}-${field.name}`"
            v-model="responses[field.name]"
            v-validate="field.validation"
            :field="field.name"
            v-bind="{ ...field.options.attrs }"
            :name="`${field.name}`"
            :type="field.type"
            :data-vv-as="field.label"
            :options="!!field.options.choices ? field.options.choices : false"
            @input="updateField({ key: field.name, value: responses[field.name] })"
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
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import { TimelineLite, Elastic } from 'gsap';
import { UPDATE_FORM_DATA, UPDATE_FORM_STATE } from '@/store/form/types';
import getComponent from './utils/getComponent';

// Form Components
import FormLabel from './Elements/Label.vue';
import FormGroup from './Auxiliaries/Group.vue';
import FormError from './Auxiliaries/Error.vue';
import FormNavigation from './Auxiliaries/Navigation.vue';

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
  },
  computed: {
    firestoreData() {
      return this.$store.state.form.formData;
    },
    formState() {
      return this.$store.state.form.formState;
    },
    responses() {
      return this.$store.state.form.responses;
    },
    activeFieldName() {
      return this.fields[this.formFields[this.formState.activeField].name];
    },
    isCurrentFieldValid() {
      if (!this.isLastField) {
        return this.activeFieldName && this.activeFieldName.valid;
      }
    },
    isLastField() {
      return this.formState.activeField === this.formState.formLength - 1;
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
  },
  created() {
    this.formFields = this.firestoreData.map((field) => {
      const component = getComponent(field.type);
      return { ...field, component };
    });
  },
  methods: {
    ...mapMutations({
      updateField: `form/${UPDATE_FORM_DATA}`,
      updateFormState: `form/${UPDATE_FORM_STATE}`,
    }),
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
      if (!this.isLastField) {
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
form {
  min-height: 100vh - 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
