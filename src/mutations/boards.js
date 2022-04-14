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

  [types.BOARDS_DELETE_BOARD](state, boardId) {
    state.boards.arr = state.boards.arr.filter((board) => board.id !== boardId);
  },

  //List
  [types.BOARDS_ADD_NEW_LIST](state, { id, name, boardId }) {
    state.lists.arr = [...state.lists.arr, { id, name, boardId }];
  },

  [types.BOARDS_SET_ACTIVE_LISTS](state, boardId) {
    state.lists.active = state.lists.arr.filter(
      (list) => list.boardId === boardId
    );
  },

  [types.BOARDS_UNSET_ACTIVE_LISTS](state) {
    state.lists.active = [];
  },

  [types.BOARDS_DELETE_LIST](state, listId) {
    state.lists.arr = state.lists.arr.filter((list) => list.id !== listId);
  },

  //Task
  [types.BOARDS_ADD_NEW_TASK](state, { id, name, listId, completed }) {
    state.tasks.arr = [...state.tasks.arr, { id, name, listId, completed }];
  },

  [types.BOARDS_SET_ACTIVE_TASKS](state) {
    const listIdArr = state.lists.active.map((list) => list.id);
    state.tasks.active = state.tasks.arr.filter((task) => {
      if (listIdArr.includes(task.listId)) return task;
    });
  },

  [types.BOARDS_UNSET_ACTIVE_TASKS](state) {
    state.tasks.active = [];
  },

  [types.BOARDS_DELETE_TASK](state, taskId) {
    state.tasks.arr = state.tasks.arr.filter((task) => task.id !== taskId);
  },

  [types.BOARDS_MARK_TASK_AS_COMPLETE](state, taskId) {
    state.task.arr = state.tasks.arr.map((task) => {
      if (taskId === task.id) task.completed = true;
    });
  },
};
