import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        firstName: 'Никита',
        lastName: 'Зиновьев',
        id: 123312312,
      },
      {
        firstName: 'Нуришланг',
        lastName: 'Нуришлангович',
        id: 123212312,
      },
      {
        firstName: 'Артур',
        lastName: 'PHP-хович',
        id: 123112312,
      },
    ],
    meets: [
      {
        name: 'Сбор js обезьян',
        date: {
          from: 1575902956975,
          to: 1575903556975,
        },
        members: [
          {
            firstName: 'Никита',
            lastName: 'Зиновьев',
          },
          {
            firstName: 'Нуришланг',
            lastName: 'Нуришлангович',
          },
        ],
      },
      {
        name: 'Сбор php свиней',
        date: {
          from: 1575902956975,
          to: 1575903556975,
        },
        members: [
          {
            firstName: 'Артур',
            lastName: 'PHP-хович',
          },
        ],
      },
    ],
  },
  mutations: {
    setUser(state, values) {
      state.users.push(Object.assign({}, values));
    },
  },
  actions: {
  },
  modules: {
  },
});
