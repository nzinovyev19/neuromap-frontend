import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 'f5d47a64',
        firstName: 'Никита',
        lastName: 'Зиновьев',
        reservationTimes: [
          {
            from: 1575902956975,
            to: 1575903556975,
          },
        ],
      },
      {
        id: 'f5d47a65',
        firstName: 'Нуришланг',
        lastName: 'Нуришлангович',
        reservationTimes: [
          {
            from: 1575902956975,
            to: 1575903556975,
          },
        ],
      },
      {
        id: 'f5d47a66',
        firstName: 'Артур',
        lastName: 'PHP-хович',
        reservationTimes: [
          {
            from: 1575902956975,
            to: 1575903556975,
          },
        ],
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
          'f5d47a64',
          'f5d47a65',
        ],
      },
      {
        name: 'Сбор php свиней',
        date: {
          from: 1575902956975,
          to: 1575903556975,
        },
        members: [
          'f5d47a66',
        ],
      },
    ],
  },
  plugins: [
    createPersistedState({
      paths: ['users', 'meets'],
    }),
  ],
  mutations: {
    setUser(state, values) {
      state.users.push(Object.assign({}, values));
    },
    setMeet(state, values) {
      state.meets.push(Object.assign({}, values));
    },
    setReservationTimes(state, [userId, timeObject]) {
      state.users.find(u => userId === u.id).reservationTimes.push(timeObject);
    },
  },
  getters: {
    userById: state => id => state.users.find(u => u.id === id),
  },
});
