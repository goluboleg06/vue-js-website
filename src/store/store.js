// src/store.js
import { createStore } from 'vuex';
import { fetchCarListData, addCarToFirebase, deleteCarFromFirebase } from './Helpers/dbHelper';

const store = createStore({
  state: {
    carListData: [],
    sortKey: 'price',
    sortOrder: 'asc',
    selectedCars: [null, null],
  },
  getters: {
    sortedItems: (state) => {
      if (state.sortKey === 'name') {
        return state.carListData.sort((a, b) => a.brand.localeCompare(b.brand));
      } else if (state.sortKey === 'price') {
        return state.carListData.sort((a, b) => a.price - b.price);
      }
      return state.carListData;
    },
    selectedCars: (state) => state.selectedCars,
  },
  mutations: {
    SET_CAR_LIST_DATA(state, carListData) {
      state.carListData = carListData;
    },
    ADD_CAR(state, car) {
      state.carListData.push(car);
    },
    REMOVE_CAR(state, carId) {
      state.carListData = state.carListData.filter(car => car.id !== carId);
    },
    SET_SORT_ORDER(state, order) {
      state.sortOrder = order;
    },
    SORT_ITEMS(state, criterion) {
      state.sortKey = criterion;
    },
    SELECT_CAR(state, { index, car }) {
      state.selectedCars[index] = car;
    },
  },
  actions: {
    async fetchCarListData({ commit }) {
      const carListData = await fetchCarListData();
      commit('SET_CAR_LIST_DATA', carListData);
    },
    async addCar({ commit }, car) {
      await addCarToFirebase(car);
      commit('ADD_CAR', car);
    },
    async deleteCar({ commit }, carId) {
      await deleteCarFromFirebase(carId);
      commit('REMOVE_CAR', carId);
    },
    setSortOrder({ commit }, order) {
      commit('SET_SORT_ORDER', order);
    },
    sortItems({ commit }, criterion) {
      commit('SORT_ITEMS', criterion);
    },
    selectCar({ commit }, payload) {
      commit('SELECT_CAR', payload);
    }
  },
  modules: {},
});

export default store;
