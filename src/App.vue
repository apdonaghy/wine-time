<template>
  <div id="app">
    <nav class="flex-containerNav">
    <h1 class="ninety"><router-link to="/"><img class="logo" src="./assets/wineTime.svg"></router-link></h1>
     <router-link to="/About" class="ten about">About</router-link>
     </nav>

    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap');

*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}

.logo{
  width:30%;
  padding:15px 0 15px 15px;
  display:inline-block;
}


nav{
  background-color: #f3f3f3;
}


.flex-containerNav {
  display: flex;
  flex-wrap: nowrap;
   justify-content: center;
  align-items: center;
}


.ninety {
  width: calc(90%);
}

.ten {
  width: calc(10%);
}

.about{
   font-family: 'Abhaya Libre', serif;
   text-decoration: none;
   font-size:1.35em;
   color:#94154b;
}

/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */


/* .rhymesaurus {
  font-size: 1.4rem;
} */
/* input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
} */
/* button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
} */
/* h1, h2 {
  font-weight: normal;
} */
/* ul.results {
  list-style-type: none;
  padding: 0;
} */
/* .results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
} */
/* ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
} */
</style>

