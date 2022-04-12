import { createStore } from "vuex";
import mutations from "@/mutations/boards";
import actions from "@/actions/boards";

const store = createStore({
  state() {
    return {
      boards: {
        arr: [],
        active: null,
      },
      lists: {
        arr: [],
        active: [],
      },
      tasks: {
        arr: [],
        active: [],
      },
      fetchingData: false,
      user: null,
      errors: null,
    };
  },
  mutations,
  getters: {},
  actions,
});

export default store;
