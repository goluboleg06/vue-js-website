<template>
  <div id="app">
    <header>
      <nav>
        <img src="./assets/car-logo.png" class="logo-img">
        <router-link to="/">Головна</router-link>
        <router-link to="/cars">Каталог</router-link>
        <router-link to="/about">Про нас</router-link>
        <router-link to="/compare">Порівняти автомобілі</router-link>
        <router-link to="/consultation">Консультація</router-link>
        <router-link to="/contacts">Наші контакти</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default 
{
  name: 'App'
};
</script>

<style src="./assets/style.css"></style>