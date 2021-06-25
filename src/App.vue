<template>
  <div id="q-app">
    <Index
      v-bind:questionnaires="questionnaires"
      @remove-questionnaire="removeQuestionnaire"
      @edit-questionnaire="editQuestionnaire"
    />
    <Form
      @add-questionnaire="addQuestionnaire"
      v-bind:questionnaire="questionnaire"
    />
  </div>
</template>
<script>
import Index from "./pages/Index.vue";
import Form from "./pages/Form.vue";

export default {
  name: "App",
  components: { Index, Form },
  data() {
    return {

      questionnaires: [
        {
          firstName: 1,
          lastName: 2,
          middleName: 3,
          birthDate: 4,
          description: 5,
          id: 1,
        },
        {
          firstName: 11,
          lastName: 22,
          middleName: 33,
          birthDate: 44,
          description: 55,
          id: 22,
        },
        {
          firstName: 1,
          lastName: 2,
          middleName: 3,
          birthDate: 4,
          description: 5,
          id: 3,
        },
      ],

      questionnaire: {
        firstName: null,
        lastName: null,
        middleName: null,
        birthDate: null,
        description: null
      },
    };
  },

  methods: {
    addQuestionnaire(Questionnaire) {
      this.questionnaires.push(Questionnaire);
    },
    removeQuestionnaire(id) {
      this.questionnaires = this.questionnaires.filter((el) => el.id !== id);
    },
    editQuestionnaire(id) {
      this.questionnaire = this.questionnaires.find((el) => el.id === id);
    },
  },
};
</script>
