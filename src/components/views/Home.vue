<template>
  <div>
    <h3 class="text-2xl pb-4">My Panels</h3>

    <div>
      <input
        type="text"
        v-model="boardName"
        @keyup.enter="addNewBoard()"
        placeholder="Add a new board"
        class="block w-full sm:w-96 mt-5"
      />

      <div class="mt-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-2">
        <board-card
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="board.id"
        ></board-card>
      </div>
    </div>
  </div>
</template>

<script>
import BoardCard from "../BoardCard";
import shortid from "shortid";
import * as types from "@/store/mutations-types";

export default {
  name: "home-view",
  beforeCreate() {
    this.$store.commit(types.BOARDS_CLEAR_LISTS_ACTIVE);
  },
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
      boards: this.$store.state.boards.arr,
    };
  },
  methods: {
    addNewBoard() {
      if (this.boardName !== "") {
        const newBoard = { name: this.boardName, id: shortid.generate() };
        this.$store.commit(types.BOARDS_ADD_NEW_BOARD, newBoard);
        this.boards = this.$store.state.boards.arr;
        this.boardName = "";
      }
    },
  },
};
</script>
