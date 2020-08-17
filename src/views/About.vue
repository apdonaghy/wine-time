<template>
  <div id="About">
    <!-- experimenting with EMs and relative responsive sizing-->

     
      <div class="aboutText">
         <h2>About</h2>
        <p>
          This wine recommendation app was built with <a target="_blank" href="https://vuejs.org/">Vue.js</a> for the final project of spring quarter 2020 in the <a target="_blank" href="https://www.seattleu.edu/ncs/web-development/">WATS program</a> at Seattle University. The web app allows for two user inputs – the type of wine and a max-price point. After clicking the search button, the user can filter their search results by price, rating or review count. In the search results each recommended wine includes: an image (if available), a title, a price, a link to purchase, a rating, the amount of ratings and a description. Wine Time is made possible through requests from the <a target="_blank" href="https://spoonacular.com/food-api">spoonacular API</a>. Enjoy!
        </p>
      </div>
    </div>
 
</template>


<style scoped>
/* styling for this specific view */

h2{
  color:#94154b;
  font-family: "Abhaya Libre", serif;
  font-size:2rem;
  font-weight:400;
  border-bottom:5px solid #94154b;
  margin-bottom:6%;
}

.emSize {
  font-size: 1em;
}

.aboutText {
  font-family: "Abhaya Libre", serif;
  text-decoration: none;
  font-size: 2rem;
  line-height: 1.3em;
  color: #94154b;
  padding: 7% 10px 5% 10px;
  margin: auto;
  max-width: 1460px;
}
a{
  color: #94154b;
}

a:hover {
  color: black;
}

@media screen and (max-width: 1550px) {
  .emSize {
    font-size: 0.75em;
  }
  .aboutText {
    max-width: 1000px;

  }
}

@media screen and (max-width: 1100px) {
  .aboutText {
    max-width: 800px;
    padding-left:20px;
    padding-right:20px;
  }
  .emSize {
    font-size: 0.65em;
  }
}

@media screen and (max-width: 750px) {
  .aboutText {
    max-width: 550px;
    font-size: 1.3em;
  }
  .emSize {
    font-size: 0.55em;
  }
}

@media screen and (max-width: 450px) {
  .aboutText {
    max-width: 380px;
  }
  .emSize {
    font-size: 0.45em;
  }
}

@media screen and (max-width: 350px) {
  .aboutText {
    max-width: 290px;
  }
  .emSize {
    font-size: 0.35em;
  }
}

#About{
  background-color:white;
  width:100vw;
  height:100vh;
}

</style>
