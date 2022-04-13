import * as types from "../store/mutations-types";

export default {
  addNewBoard({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_BOARD, { ...payload });
  },

  setActiveBoard({ commit }, { payload }) {
    commit(types.BOARDS_SET_ACTIVE_BOARD, payload);
  },

  unsetActiveBoard({ commit }) {
    commit(types.BOARDS_UNSET_ACTIVE_BOARD);
  },

  addNewList({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_LIST, { ...payload });
  },

  getListsByBoard({ commit }, { payload }) {
    commit(types.BOARDS_GET_LISTS_BY_BOARD, payload);
  },

  addNewTask({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_TASK, { ...payload });
  },

  getTasks({ commit }) {
    commit(types.BOARDS_GET_TASKS);
  },
};
