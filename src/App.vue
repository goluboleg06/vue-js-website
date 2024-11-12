<template>
  <div id="app">
    <header>
      <nav>
        <img src="./assets/car-logo.png" class="logo-img">
        <router-link to="/">Головна</router-link>
        <router-link to="/cars">Каталог</router-link>
        <router-link to="/addcar">Додати авто</router-link>
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
<style>
nav {
  background-color: #fc840c;
}

nav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: line-through;
  font-size: 19px;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

nav a.active {
  background-color: #4CAF50;
  color: white;
}

body 
{
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

#app 
{

  padding: 25px;
}

header {
          text-align: center;
          border-bottom: 2px solid #000;
      }

nav 
{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.logo-img{
  max-width: 80px;
  max-height: 50px;
}

nav a
{
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}


h1 
{
  color: #000000;
}
logoImg{
  max-height: 2px;
}
</style>