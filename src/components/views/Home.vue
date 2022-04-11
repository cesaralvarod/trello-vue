<template>
  <div>
    <h3 class="text-2xl pb-4">My Panels</h3>

    <div>
      <input
        type="text"
        v-model="boardName"
        @keyup.enter="add()"
        placeholder="Add a new panel"
        class="inline-block"
      />

      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      ></board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from "../BoardCard";

export default {
  name: "home-view",
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
      boards: [
        {
          id: 1,
          name: "Tasks",
        },
        {
          id: 2,
          name: "Buy",
        },
      ],
    };
  },
  methods: {
    add() {},
  },
};
</script>
