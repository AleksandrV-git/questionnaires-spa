
export function addQuestionnaire(state, questionnaire) {
  state.questionnaires.push(questionnaire);
}
export function setCurrentQuestionnaire(state, questionnaire) {
  state.questionnaire = questionnaire;
  console.log(state.questionnaire);
}
export function deleteQuestionnaire(state, id) {
  state.questionnaires = state.questionnaires.filter((el) => el.id !== id);
}
export function editQuestionnaire(state, id) {
  state.questionnaire = state.questionnaires.find((el) => el.id === id);
}

