
export function addQuestionnaire(state, questionnaire) {
  state.questionnaires.push(questionnaire);
}
export function setQuestionnaires(state, questionnaires) {
  state.questionnaires = questionnaires
}
export function setCurrentQuestionnaire(state, id) {
  state.questionnaire = state.questionnaires.find((el) => el.id === id);
}
export function editQuestionnaire(state, questionnaire) {
  state.questionnaires = state.questionnaires.map((el) => {
    if (el.id === state.questionnaire.id) {
      return questionnaire
    } else return el
  })
}
export function resetCurrentQuestionnaire(state) {
  state.questionnaire = {
    firstName: null,
    lastName: null,
    middleName: null,
    birthDate: null,
    description: null,
  };
}
export function deleteQuestionnaire(state, id) {
  state.questionnaires = state.questionnaires.filter((el) => el.id !== id);
}


