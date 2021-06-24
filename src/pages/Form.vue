<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="firstName"
        label="Имя *"
        hint="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="lastName"
        label="Фамилия *"
        hint="Surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="middleName"
        label="Отчество *"
        hint="MiddleName"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="birthDate"
        label="Возраст *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
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
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
        firstName: null,
        lastName: null,
        middleName: null,
        birthDate: null,
        description: null,
      }
  },
  methods: {
    onSubmit () {
      const newQuestionnaire = {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        birthDate: this.birthDate,
        description: this.description
      }

      this.$emit('add-questionnaire', newQuestionnaire)
    },
    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
