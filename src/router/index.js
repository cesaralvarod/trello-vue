import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/views/Home";
import Board from "@/components/views/Board";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board/:id",
    name: "Board",
    component: Board,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
