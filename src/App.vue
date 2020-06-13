<template>
  <div id="app">
    <div class="grey">
      <!-- Global nav -->
      <nav class="flex-containerNav">
        <h1 class="ninety">
           <!-- <router-link to="/"> points to Home.vue  -->
          <router-link to="/"> 
            <img class="logo" src="./assets/wineTime.svg" />
          </router-link>
        </h1>
         <!-- <router-link to="/About"> points to About.vue -->
        <router-link to="/About" class="ten about">About</router-link>
      </nav>
       <!-- Global nav -->
    </div>
    <!-- The router's current view will be injected into the application here with <router-view />  -->
    <router-view /> 
  </div>
</template>


<style>
/* Global Styles */

@import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap");

.container {
  max-width: 1460px;
  margin: 0 auto;
}

::selection {
  background: lightsteelblue; 
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.logo {
  width: 30%;
  padding: 15px 0 15px 15px;
  display: inline-block;
}

.grey {
  background-color: #f3f3f3;
}

.flex-containerNav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  max-width: 1460px;
  margin: 0 auto;
}

.ninety {
  width: calc(90%);
}

.ten {
  width: calc(10%);
}

@media screen and (max-width: 650px) {
  .ninety {
    width: calc(80%);
  }

  .ten {
    width: calc(20%);
  }

  .logo {
    width: 50%;
    padding: 15px 0 15px 15px;
    display: inline-block;
  }
}

.about {
  font-family: "Abhaya Libre", serif;
  text-decoration: none;
  font-size: 1.5em;
  color: #94154b;
}
</style>

