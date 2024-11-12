<template>
  <div>
    <h2>Оберіть авто для порівняння</h2>
    <div v-for="car in carListData" :key="car.id">
      <label>
        <input
          type="radio"
          :value="car"
          v-model="selectedCar1"
        />
        {{ car.brand }} {{ car.model }}
      </label>
      <label>
        <input
          type="radio"
          :value="car"
          v-model="selectedCar2"
        />
        {{ car.brand }} {{ car.model }}
      </label>
    </div>

    <div v-if="selectedCar1 && selectedCar2">
      <h2>порівняння</h2>
      <table>
        <thead>
          <tr>
            <th>Критерій</th>
            <th>Машина 1</th>
            <th>Машина 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Марка</td>
            <td>{{ selectedCar1.brand }}</td>
            <td>{{ selectedCar2.brand }}</td>
          </tr>
          <tr>
            <td>Модель</td>
            <td>{{ selectedCar1.model }}</td>
            <td>{{ selectedCar2.model }}</td>
          </tr>
          <tr>
            <td>Пробіг</td>
            <td>{{ selectedCar1.mileage }}</td>
            <td>{{ selectedCar2.mileage }}</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>{{ selectedCar1.year }}</td>
            <td>{{ selectedCar2.year }}</td>
          </tr>
          <tr>
            <td>Ціна</td>
            <td>{{ selectedCar1.price }}</td>
            <td>{{ selectedCar2.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CarsCompare',
  data() {
    return {
      selectedCar1: null,
      selectedCar2: null
    };
  },
  computed: {
    ...mapState(['carListData'])
  }
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
