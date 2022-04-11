<template>
  <div class="bg-gray-100 p-5 mt-4 rounded">
    <h4 class="text-lg">{{ name }}</h4>

    <div class="mt-3">
      <item-list
        v-for="(item, index) in items"
        :key="index"
        :name="item.name"
        :id="item.id"
      ></item-list>
    </div>

    <input
      type="text"
      class="block w-full mt-1 bg-transparent border-none border-transparent focus:border-transparent p-1 text-base input-list"
      placeholder="Add a new task..."
      v-model="itemName"
      @keyup.enter="addItem()"
    />

    <div class="mt-3">
      <button
        class="block bg-red-500 text-white p-2 rounded w-full font-semibold flex gap-2 justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Delete</span>
      </button>
    </div>
  </div>
</template>

<script>
import shortid from "shortid";
import ItemList from "./ItemList.vue";

export default {
  name: "board-list",
  components: {
    ItemList,
  },
  props: {
    id: String,
    name: String,
    items: Array,
  },
  data() {
    return { itemName: "" };
  },
  methods: {
    addItem() {
      if (this.itemName !== "") {
        this.$emit("newItemList", {
          name: this.itemName,
          id: shortid.generate(),
          listId: this.id,
        });
        this.itemName = "";
      }
    },
  },
};
</script>

<style scoped>
input[type="text"].input-list {
  border: none !important;
}

input[type="text"].input-list:focus {
  box-shadow: none;
}
</style>
