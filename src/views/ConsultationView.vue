<template>
    <div>
      <h2>Записатися на консультацію</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="fullName">ПІБ:</label>
          <input type="text" v-model="fullName" id="fullName" required />
        </div>
        <div>
          <label for="phone">Номер телефону:</label>
          <input type="tel" v-model="phone" id="phone" required />
        </div>
        <div>
          <label for="date">Дата зустрічі:</label>
          <input type="date" v-model="date" id="date" required />
        </div>
        <button type="submit">Записатися</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'ConsultationView',
    data() {
      return {
        fullName: '',
        phone: '',
        date: ''
      };
    },
    methods: {
      ...mapActions(['addConsultation']),
      submitForm() {
        const newConsultation = {
          fullName: this.fullName,
          phone: this.phone,
          date: this.date
        };
        this.addConsultation(newConsultation);
        this.fullName = '';
        this.phone = '';
        this.date = '';
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
  