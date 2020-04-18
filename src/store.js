import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugin: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask: state => {
      return (id) => {
        console.log('getTask', id);
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            console.log('task', task);
            if (task.id === id) {
              console.log('task found:', task);
              return task
            }
          }
        }
      }
    }
  },
  mutations: {}
})
