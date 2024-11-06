<template>
  <div>
    <h2>Додати нову машину</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="carBrand">Марка:</label>
        <input type="text" v-model="brand" id="carBrand" required />
      </div>
      <div>
        <label for="carModel">Модель:</label>
        <input type="text" v-model="model" id="carModel" required />
      </div>
      <div>
        <label for="carMileage">Пробіг:</label>
        <input type="number" v-model="mileage" id="carMileage" required />
      </div>
      <div>
        <label for="carYear">Рік випуску:</label>
        <input type="number" v-model="year" id="carYear" required />
      </div>
      <div>
        <label for="carPrice">Ціна:</label>
        <input type="number" v-model="price" id="carPrice" required />
      </div>
      <div>
        <label for="carImgSrc">URL зображення:</label>
        <input type="text" v-model="imgSrc" id="carImgSrc" required />
      </div>
      <button type="submit">Додати машину</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'addCar',
  data() {
    return {
      brand: '',
      model: '',
      mileage: '',
      year: '',
      price: '',
      imgSrc: ''
    };
  },
  methods: {
    ...mapActions(['addCar']),
    submitForm() {
      const newCar = {
        id: uuidv4(),
        brand: this.brand,
        model: this.model,
        mileage: this.mileage,
        year: this.year,
        price: this.price,
        imgSrc: this.imgSrc
      };
      this.addCar(newCar);
      this.brand = '';
      this.model = '';
      this.mileage = '';
      this.year = '';
      this.price = '';
      this.imgSrc = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
