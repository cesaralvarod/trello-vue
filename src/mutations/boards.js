import * as types from "@/store/mutations-types";

export default {
  // Board
  [types.BOARDS_ADD_NEW_BOARD](state, { id, name }) {
    state.boards.arr = [...state.boards.arr, { id, name }];
  },

  [types.BOARDS_SET_ACTIVE_BOARD](state, boardId) {
    state.boards.active = state.boards.arr.find(
      (board) => board.id === boardId
    );
  },

  [types.BOARDS_UNSET_ACTIVE_BOARD](state) {
    state.boards.active = null;
  },

  //List
  [types.BOARDS_ADD_NEW_LIST](state, { id, name, boardId }) {
    state.lists.arr = [...state.lists.arr, { id, name, boardId }];
  },

  [types.BOARDS_GET_LISTS_BY_BOARD](state, boardId) {
    state.lists.active = state.lists.arr.filter(
      (list) => list.boardId === boardId
    );
  },

  [types.BOARDS_CLEAR_LISTS_ACTIVE](state) {
    state.lists.active = [];
  },

  //Task
  [types.BOARDS_ADD_NEW_TASK](state, { id, name }) {
    state.tasks.arr = [...state.tasks.arr, { id, name }];
  },
};
