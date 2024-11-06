<template>
    <div>
      <div>
        <h2>Оберіть авто для порівняння</h2>
        <div v-for="car in carListData" :key="car.id">
          <label>
            <input
              type="radio"
              name="car1"
              @change="() => handleSelectCar(0, car)"
            />
            {{ car.brand }} {{ car.model }}
          </label>
          <label>
            <input
              type="radio"
              name="car2"
              @change="() => handleSelectCar(1, car)"
            />
            {{ car.brand }} {{ car.model }}
          </label>
        </div>
      </div>
  
      <div v-if="selectedCars[0] && selectedCars[1]">
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
              <td>{{ selectedCars[0].brand }}</td>
              <td>{{ selectedCars[1].brand }}</td>
            </tr>
            <tr>
              <td>Модель</td>
              <td>{{ selectedCars[0].model }}</td>
              <td>{{ selectedCars[1].model }}</td>
            </tr>
            <tr>
              <td>Пробіг</td>
              <td>{{ selectedCars[0].mileage }}</td>
              <td>{{ selectedCars[1].mileage }}</td>
            </tr>
            <tr>
              <td>Рік</td>
              <td>{{ selectedCars[0].year }}</td>
              <td>{{ selectedCars[1].year }}</td>
            </tr>
            <tr>
              <td>Ціна</td>
              <td>{{ selectedCars[0].price }}</td>
              <td>{{ selectedCars[1].price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CarsCompare',
  computed: {
    ...mapState(['carListData', 'selectedCars'])
  },
  methods: {
    ...mapActions(['selectCar']),
    handleSelectCar(index, car) {
      this.selectCar({ index, car });
    }
  }
};
</script>
<style>
div{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>