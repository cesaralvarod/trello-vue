import * as types from "@/store/mutations-types";

export default {
  addNewBoard({ commit }) {
    commit(types.BOARDS_ADD_NEW_BOARD);
  },

  addNewList({ commit }) {
    commit(types.BOARDS_ADD_NEW_LIST);
  },

  getListsByBoard({ commit }) {
    commit(types.BOARDS_GET_LISTS_BY_BOARD);
  },

  addNewTask({ commit }) {
    commit(types.BOARDS_ADD_NEW_TASK);
  },
};
