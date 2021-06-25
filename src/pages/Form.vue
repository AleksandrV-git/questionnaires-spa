<template>
  <div class="q-pa-md" style="max-width: 400px">
    {{ questionnaire }}
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
export default {
  props: ["questionnaire"],
  data() {
    return this.questionnaire;
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
    onSubmit() {
      const newQuestionnaire = {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        birthDate: this.birthDate,
        description: this.description,
        id: Date.now(),
      };

      this.$emit("add-questionnaire", newQuestionnaire);
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
