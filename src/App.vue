<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/discover">Discover</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(32, 33, 38);
  height: fit-content;
}

nav {
  padding: 20px;
  background-color: rgb(32, 33, 38);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

nav a {
  font-weight: bold;
  color: rgb(91, 94, 104);
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
  background-color: rgb(32, 33, 38);
  transition: color 0.3s;
}

nav a:hover {
  color: rgb(116, 115, 197);
}

nav a.router-link-exact-active {
  color: rgb(116, 115, 197);
}

h1 {
  color: rgb(247 247 247);
}

p {
  color: rgb(247 247 247);
  /* padding-left: 5vw; */
  /* padding-right: 5vw; */
  /* padding-top: 5vh; */
}
</style>
