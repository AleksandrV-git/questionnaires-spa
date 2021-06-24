<template>
  <div id="q-app">
    <router-view />
    <Index
    v-bind:questionnaires="questionnaires"
    />
    <Form
      @add-questionnaire="addQuestionnaire"
    />
  </div>
</template>
<script>
import Index from './pages/Index.vue'
import Form from './pages/Form.vue'

export default {
  name: 'App',
  components: { Index, Form },
  data () {
    return {
      columns: [
        { name: 'lastName', align: 'center', label: 'Фамилия', field: 'lastName', sortable: true },
        { name: 'firstName', label: 'Имя', field: 'firstName', sortable: true },
        { name: 'middleName', label: 'Отчество', field: 'middleName' },
        { name: 'birthDate', label: 'Дата рождения', field: 'birthDate', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)},
        { name: 'description', label: 'Описание', field: 'description' },
        { name: 'action', label: 'действие', field: 'action' }
      ],
      questionnaires: [

      ]
    }
  },

  methods: {
    addQuestionnaire (Questionnaire) {
     this.questionnaires.push(Questionnaire);
     console.log(Questionnaire);
    },
  }
}
</script>

