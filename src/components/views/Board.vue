<template>
  <section>
    <div class="flex items-center justify-between flex-wrap">
      <h3 class="text-2xl">
        <router-link to="/">My Panels</router-link> > {{ name }}
      </h3>

      <div class="flex justify-end gap-3">
        <button
          class="inline-block hover:text-white hover:bg-amber-500 p-2 transition rounded w-full font-semibold flex gap-1 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
          <span>Edit Panel</span>
        </button>

        <button
          class="inline-block hover:text-white hover:bg-red-500 p-2 transition rounded w-full font-semibold flex gap-1 justify-center items-center"
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
          <span class="whitespace-nowrap">Delete Panel</span>
        </button>
      </div>
    </div>

    <input
      type="text"
      v-model="listName"
      @keyup.enter="addNewList()"
      placeholder="Add a new list"
      class="block w-full sm:w-96 mt-5"
    />

    <div class="mt-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-2">
      <board-list
        v-for="(list, index) in boardList"
        :name="list.name"
        :id="list.id"
        :items="list.items"
        :key="index"
        @newItemList="addNewItemList"
      ></board-list>
    </div>
  </section>
</template>

<script>
import shortid from "shortid";
import BoardList from "../BoardList.vue";

export default {
  name: "board-view",
  props: {
    id: String,
    name: String,
  },
  components: {
    BoardList,
  },
  data() {
    return {
      listName: "",
      boardList: [],
    };
  },
  methods: {
    addNewList() {
      if (this.listName !== "") {
        const newList = {
          id: shortid.generate(),
          name: this.listName,
          items: [],
        };
        this.boardList = [...this.boardList, newList];
        this.listName = "";
      }
    },
    addNewItemList({ name, id, listId }) {
      const newItem = { name, id };
      let myList = this.boardList.find((list) => list.id === listId);
      myList.items = [...myList.items, newItem];
    },
  },
};
</script>
