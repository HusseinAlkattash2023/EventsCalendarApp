<template>
  <va-data-table
    class="table-crud border-2 mt-3"
    :items="items"
    :columns="columns"
    striped
  >
    <template #headerAppend>
      <tr class="table-crud__slot">
        <th
          v-for="(key, index) in Object.keys(createdItem)"
          :key="index"
          class="p-1"
        >
          <va-input
            v-if="index === 0 || index === 1"
            v-model="createdItem[key]"
            :placeholder="key"
          />
          <va-date-input
            v-model="createdItem[key]"
            class="w-full"
            v-if="index === 2 || index === 3"
            name="birthDay"
          />
          <va-select
            class="w-full"
            v-if="index === 4"
            v-model="createdItem[key]"
            :options="['Hockey', 'Basketball']"
          />
          <va-select
            class="w-full"
            v-if="index === 5"
            v-model="createdItem[key]"
            :options="['Sporthall1', 'Sporthall2']"
          />
        </th>
        <th class="p-1">
          <va-button :disabled="!isNewData" block @click="addNewItem">
            Add
          </va-button>
        </th>
      </tr>
    </template>

    <template #cell(actions)="{ rowIndex }">
      <va-button
        preset="plain"
        icon="edit"
        @click="openModalToEditItemById(rowIndex)"
      />
      <va-button
        preset="plain"
        icon="delete"
        class="ml-3"
        @click="deleteItemById(rowIndex)"
      />
    </template>
  </va-data-table>

  <va-modal
    class="modal-crud"
    :model-value="!!editedItem"
    title="Edit item"
    size="small"
    @ok="editItem"
    @cancel="resetEditedItem"
  >
    <va-input
      v-for="key in Object.keys(editedItem)"
      :key="key"
      v-model="editedItem[key]"
      class="my-6"
      :label="key"
    />
  </va-modal>
</template>

<script>
const defaultItem = {
  name: "",
  description: "",
  start_date: new Date().toISOString().slice(0, 10),
  end_date: new Date().toISOString().slice(0, 10),
  category: "",
  place: "",
};

export default defineComponent({
  data() {
    const items = [
      {
        name: "Leanne Graham",
        description: "Bret",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
      {
        name: "Ervin Howell",
        description: "Antonette",
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
        category: "Hockey",
        place: "Sporthall1",
      },
    ];

    const columns = [
      { key: "name", sortable: true },
      { key: "description", sortable: true },
      { key: "start_date", sortable: true },
      { key: "end_date", sortable: true },
      { key: "category", sortable: true },
      { key: "place", sortable: true },
      { key: "actions", width: 80 },
    ];

    return {
      items,
      columns,
      editedItemId: null,
      editedItem: null,
      createdItem: { ...defaultItem },
    };
  },

  computed: {
    isNewData() {
      return Object.keys(this.createdItem).every(
        (key) => !!this.createdItem[key]
      );
    },
  },

  methods: {
    resetEditedItem() {
      this.editedItem = null;
      this.editedItemId = null;
    },
    resetCreatedItem() {
      this.createdItem = { ...defaultItem };
    },
    deleteItemById(id) {
      this.items = [...this.items.slice(0, id), ...this.items.slice(id + 1)];
    },
    addNewItem() {
      this.items = [...this.items, { ...this.createdItem }];
      this.resetCreatedItem();
    },
    editItem() {
      this.items = [
        ...this.items.slice(0, this.editedItemId),
        { ...this.editedItem },
        ...this.items.slice(this.editedItemId + 1),
      ];
      this.resetEditedItem();
    },
    openModalToEditItemById(id) {
      this.editedItemId = id;
      this.editedItem = { ...this.items[id] };
    },
  },
});
</script>

<style lang="scss" scoped>
.table-crud {
  --va-form-element-default-width: 0;

  .va-input {
    display: block;
  }

  &__slot {
    th {
      vertical-align: middle;
    }
  }
}

.modal-crud {
  .va-input {
    display: block;
  }
}
</style>
