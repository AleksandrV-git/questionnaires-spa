<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="firstName"
        label="Имя *"
        hint="Name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="lastName"
        label="Фамилия *"
        hint="Surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="middleName"
        label="Отчество *"
        hint="MiddleName"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="birthDate"
        label="Возраст *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <q-input
        filled
        type="textarea"
        v-model="description"
        label="Описание"
        hint="Description"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>

import { computed, ref } from 'vue'
import { useStore, mapMutations } from 'vuex'

export default {
  setup () {
    const $store = useStore()

    const questionnaire = computed({
      get: () => $store.state.questionnaires.questionnaire,
      set: val => {
        $store.commit('questionnaires/setCurrentQuestionnaire', val)
      }
    })

  const firstName = ref(null)
  const lastName = ref(null)
  const middleName = ref(null)
  const birthDate = ref(null)
  const description = ref(null)

    return {
      questionnaire,
      firstName,
      lastName,
      middleName,
      birthDate,
      description
    }
  },
  watch: {
    questionnaire: function () {
      this.firstName = this.questionnaire.firstName,
      this.lastName = this.questionnaire.lastName,
      this.middleName = this.questionnaire.middleName,
      this.birthDate = this.questionnaire.birthDate,
      this.description = this.questionnaire.description;
    },
  },
  methods: {
    ...mapMutations("questionnaires", ["addQuestionnaire"]),

    onSubmit() {
      const newQuestionnaire = {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        birthDate: this.birthDate,
        description: this.description,
        id: Date.now(),
      };

      this.addQuestionnaire(newQuestionnaire)
      this.onReset();
    },
    onReset() {
      this.firstName = null,
      this.lastName = null,
      this.middleName = null,
      this.birthDate = null,
      this.description = null;
    },
  },
};
</script>
