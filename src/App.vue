<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  setup() {
    const $store = useStore();

    const questionnaires = computed({
      get: () => $store.state.questionnaires.questionnaires,
      set: (val) => {
        $store.commit("questionnaires/setQuestionnaires", val);
      },
    });

    watch(questionnaires, () => {
      localStorage.questionnaires = JSON.stringify(questionnaires.value);
    });
  },
};
</script>
