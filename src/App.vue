<template>
  <app-header>
  </app-header>
  <router-view class="max-w-[1600px] mx-auto py-5 px-4 mb-20"></router-view>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },

};
</script>

<style></style>
