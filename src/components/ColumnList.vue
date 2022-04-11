<template>
  <div class="bg-gray-200 p-5 mt-4 rounded">
    <h4 class="text-lg">Shop List</h4>

    <div class="mt-3">
      <item-list></item-list>
      <item-list></item-list>
    </div>

    <input
      type="text"
      class="block w-full mt-1 bg-transparent border-none border-transparent focus:border-transparent p-1 text-base input-list"
      placeholder="Add a new task..."
    />
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";

export default {
  name: "column-list",
  components: {
    ItemList,
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
