<template>
  <div class="car-item">
    <img :src="carData.imgSrc" class="car-image">
    <p>Бренд: {{ carData.brand }}</p>
    <p>Модель: {{ carData.model }}</p>
    <p>Пробіг: {{ carData.mileage }}</p>
    <p>Рік випуску: {{ carData.year }}</p>
    <p>Ціна: {{ carData.price }} гривень</p>
    <button @click="handleDeleteCar">Видалити авто</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CarItem',
  props: {
    carData: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    ...mapActions(['deleteCar']),
    handleDeleteCar() {
      this.deleteCar(this.carData.id);
    }
  }
};
</script>

<style>
.car-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s;
}

.car-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.car-image {
  max-width: 150px;
  max-height: 100px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e04545;
}
</style>
