<template>
  <div id="q-app">
    <Index
      v-bind:questionnaires="questionnaires"
      @remove-questionnaire="removeQuestionnaire"
    />
    <Form @add-questionnaire="addQuestionnaire" />
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
          firstName: 1,
          lastName: 2,
          middleName: 3,
          birthDate: 4,
          description: 5,
          id: 2,
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
    };
  },

  methods: {
    addQuestionnaire(Questionnaire) {
      this.questionnaires.push(Questionnaire);
      console.log(Questionnaire);
    },
    removeQuestionnaire(id) {
      this.questionnaires = this.questionnaires.filter(el => el.id !== id)
    },
  },
};
</script>
