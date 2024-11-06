<template>
  <div>
    <select v-model="selectedCriterion" @change="sortCarItems" class="sort">
      <option value="name">Назва</option>
      <option value="price">Ціна</option>
    </select>
    <CarItem
      v-for="car in sortedItems"
      :key="car.id"
      :carData="car"
    />
    <AddCar />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CarItem from './CarItem.vue';
import AddCar from './AddCar.vue';

export default {
  name: 'CarList',
  components: {
    CarItem,
    AddCar
  },
  data() {
    return {
      selectedCriterion: 'name'
    };
  },
  computed: {
    ...mapGetters(['sortedItems'])
  },
  methods: {
    ...mapActions(['fetchCarListData', 'sortItems', 'setSortOrder']),
    sortCarItems() {
      this.sortItems(this.selectedCriterion);
    },
    toggleSortOrder() {
      const newOrder = this.$store.state.sortOrder === 'asc' ? 'desc' : 'asc';
      this.setSortOrder(newOrder);
      this.sortItems();
    }
  },
  created() {
    this.fetchCarListData();
    this.sortCarItems();
  }
};
</script>

<style scoped>
.car-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.sort {
  cursor: pointer;
  width: 300px;
  min-height: 60px;
  max-height: 300px;
  border-radius: 15px;
  background-color: rgb(250, 250, 250);
  box-shadow: 2px 4px 8px #c5c5c5;
  transition: all 300ms;
}
</style>
