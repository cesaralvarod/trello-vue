<template>
  <section>
    <div class="flex items-center justify-between flex-wrap pb-4">
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
          @click="deleteBoard"
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

    <div class="mt-3">
      <board-column
        v-for="(list, index) in lists"
        :name="list.name"
        :id="list.id"
        :key="index"
        @setLists="setLists"
      ></board-column>
    </div>
  </section>
</template>

<script>
import shortid from "shortid";
import BoardColumn from "../BoardColumn.vue";
import * as types from "@/store/mutations-types";
import Home from "./Home.vue";
import Swal from "sweetalert2";

export default {
  name: "board-view",
  props: {
    id: String,
    name: String,
  },
  components: {
    BoardColumn,
  },
  data() {
    return {
      listName: "",
      lists: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch({
      type: types.BOARDS_SET_ACTIVE_BOARD,
      payload: this.id,
    });
  },
  created() {
    this.setLists();
  },
  unmounted() {
    this.$store.dispatch(types.BOARDS_UNSET_ACTIVE_BOARD);
    this.$store.dispatch(types.BOARDS_UNSET_ACTIVE_TASKS);
  },
  methods: {
    addNewList() {
      if (this.listName !== "") {
        this.$store.dispatch({
          type: types.BOARDS_ADD_NEW_LIST,
          payload: {
            id: shortid.generate(),
            name: this.listName.trim(),
            boardId: this.id,
          },
        });
        this.setLists();
        this.listName = "";
      }
    },

    setLists() {
      this.$store.dispatch({
        type: types.BOARDS_SET_ACTIVE_LISTS,
        payload: this.id,
      });
      this.lists = this.$store.state.lists.active;
    },

    deleteBoard() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch({
            type: types.BOARDS_DELETE_BOARD,
            payload: this.id,
          });
          this.$router.push({ path: "/", component: Home });

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your panel has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    },
  },
};
</script>
