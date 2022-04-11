<template>
  <router-link
    class="block mt-4 p-4 text-white bg-slate-500 rounded cursor-pointer"
    :to="{ name: 'Board', params: { name, id } }"
  >
    <p class="text-lg font-semibold">{{ name }}</p>
    <div>...</div>
  </router-link>
</template>

<script>
export default {
  name: "board-card",
  props: {
    id: String,
    name: String,
  },
};
</script>
