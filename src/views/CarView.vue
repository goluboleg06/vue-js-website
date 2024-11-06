<template>
    <div>
      <h1>Список автомобілів</h1>
      <CarList/>
    </div>
  </template>
  
  <script>
  import CarList from '@/views/carsList/CarList.vue';
  
  export default 
  {
    components: { CarList }
  };
</script>  