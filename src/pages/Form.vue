<template>
  <h5 style="margin-left: 16px">Создание новой анкеты</h5>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="firstName"
        label="Имя *"
        hint="Name"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Укажите Имя',
          (val) => (val.length < 20) || 'Некорректное значение',
        ]"
      />

      <q-input
        filled
        v-model="lastName"
        label="Фамилия *"
        hint="Surname"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Укажите фамилию',
          (val) => (val.length < 20) || 'Некорректное значение',
        ]"
      />

      <q-input
        filled
        v-model="middleName"
        label="Отчество"
        hint="MiddleName"
        lazy-rules
      />

      <q-input
        filled
        v-model="birthDate"
        label="Дата рождения *"
        lazy-rules
        :rules="[
          (val) => (val && val !== '' && val.length > 0) || 'Укажите дату рождения',
          (val) => (val.length < 15) || 'Некорректное значение',
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
        <q-btn label="сохранить" type="submit" color="primary" />
        <q-btn
          label="очистить"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <router-link to="/" exact>
          <q-btn color="primary" flat text-color="black" label="отмена"/>
        </router-link>
      </div>
    </q-form>
  </div>
</template>

<script>

import { ref } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  setup () {

  const firstName =  ref(null)
  const lastName = ref(null)
  const middleName = ref(null)
  const birthDate = ref(null)
  const description = ref(null)

    return {
      firstName,
      lastName,
      middleName,
      birthDate,
      description
    }
  },

  methods: {
    ...mapMutations("questionnaires", ["addQuestionnaire", "getQuestionnaires"]),
    ...mapGetters("questionnaires", ["getQuestionnaires"]),

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
      localStorage.questionnaires = JSON.stringify(this.getQuestionnaires());
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
