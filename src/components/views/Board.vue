<template>
  <section>
    <h3 class="text-2xl pb-4">
      <router-link to="/">My Panels</router-link> > {{ name }}
    </h3>

    <input
      type="text"
      v-model="listName"
      @keyup.enter="add()"
      placeholder="Add a new list"
      class="inline-block"
    />

    <div class="mt-5">
      <column-list></column-list>
      <column-list></column-list>
    </div>
  </section>
</template>

<script>
import ColumnList from "../ColumnList.vue";

export default {
  name: "board-view",
  props: {
    id: String,
    name: String,
  },
  components: {
    ColumnList,
  },
  data() {
    return {
      listName: "",
    };
  },
  methods: {
    add() {},
  },
};
</script>
