import * as types from "../store/mutations-types";

export default {
  // Board

  addNewBoard({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_BOARD, { ...payload });
  },

  setActiveBoard({ commit }, { payload }) {
    commit(types.BOARDS_SET_ACTIVE_BOARD, payload);
  },

  unsetActiveBoard({ commit }) {
    commit(types.BOARDS_UNSET_ACTIVE_BOARD);
  },

  deleteBoard({ commit }, { payload }) {
    commit(types.BOARDS_DELETE_BOARD, payload);
  },

  // Lists

  addNewList({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_LIST, { ...payload });
  },

  deleteList({ commit }, { payload }) {
    commit(types.BOARDS_DELETE_LIST, payload);
    commit(types.BOARDS_SET_ACTIVE_LISTS, payload);
  },

  setActiveLists({ commit }, { payload }) {
    commit(types.BOARDS_SET_ACTIVE_LISTS, payload);
  },

  // Tasks

  addNewTask({ commit }, { payload }) {
    commit(types.BOARDS_ADD_NEW_TASK, { ...payload });
  },

  setActiveTasks({ commit }) {
    commit(types.BOARDS_SET_ACTIVE_TASKS);
  },

  unsetActiveTasks({ commit }) {
    commit(types.BOARDS_UNSET_ACTIVE_TASKS);
  },

  deleteTask({ commit }, { payload }) {
    commit(types.BOARDS_DELETE_TASK, payload);
    commit(types.BOARDS_SET_ACTIVE_TASKS);
  },
};
