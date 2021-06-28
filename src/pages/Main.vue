<template>
  <div class="q-pa-md">
    <router-link to="/form" exact>
      <q-btn color="white" text-color="black" label="Добавит анкету" />
    </router-link>
    <q-table
      title="Анкеты"
      :rows="questionnaires"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr v-bind:id="props.row.id" :props="props">
          <q-td key="lastName" :props="props">
            {{ props.row.lastName }}
          </q-td>
          <q-td key="firstName" :props="props">
            {{ props.row.firstName }}
          </q-td>
          <q-td key="middleName" :props="props">
            {{ props.row.middleName }}
          </q-td>
          <q-td key="birthDate" :props="props">
            {{ props.row.birthDate }}
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td v-bind:id="props.row.id" key="action" :props="props">
            <router-link to="/form-edit" exact>
              <q-icon
                v-on:click="setCurrentQuestionnaire(props.row.id)"
                name="mode_edit"
              />
            </router-link>
            <q-icon
              style="cursor: pointer; margin-left: 10px;"
              v-on:click="handleDeleteQuestionnaire(props.row.id)"
              name="delete"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { mapMutations, mapGetters, useStore, mapState } from "vuex";
import { computed, watch } from "vue";

const columns = [
  {
    name: "lastName",
    align: "center",
    label: "Фамилия",
    field: "lastName",
    sortable: true,
  },
  { name: "firstName", label: "Имя", field: "firstName", sortable: true },
  { name: "middleName", label: "Отчество", field: "middleName" },
  {
    name: "birthDate",
    label: "Дата рождения",
    field: "birthDate",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "description", label: "Описание", field: "description" },
  { name: "action", label: "действие", field: "action" },
];

export default {

  setup() {
    const $store = useStore();

    const questionnaires = computed({
      get: () => $store.state.questionnaires.questionnaires,
      set: (val) => {
        $store.commit("questionnaires/setQuestionnaires", val);
      },
    });

    const data = localStorage.questionnaires !== 'undefined' ? JSON.parse(localStorage.questionnaires) : questionnaires.value;
    questionnaires.value = data.length !== 0 ? data : questionnaires.value

    return {
      questionnaires,
      columns,
    };
  },

  methods: {
    ...mapMutations("questionnaires", [
      "deleteQuestionnaire",
      "setCurrentQuestionnaire",
    ]),
    ...mapGetters("questionnaires", ["getQuestionnaires"]),

    handleDeleteQuestionnaire(id) {
      if (window.confirm("Запись будет удалена. Уверены?")) {
        this.deleteQuestionnaire(id)
      }
    }
  },
};
</script>
