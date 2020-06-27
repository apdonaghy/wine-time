<template>
  <div id="Home">
    <!-- when form is submitted prevent deafault reload and trigger the findWine mehtod -->

    <form v-on:submit.prevent="findWine" class="container">
      <p
        class="ab-test"
      >Select a wine and your max-price per bottle, then search to see a list of recommended wines</p>
      <div class="flex-container margin-bottom">
        <div>
          <label for="redWine" class="form-labels">
            RED
            <i class="fas fa-angle-down"></i>
          </label>
          <select v-model="wine" name="redWine" id="redWine" class="select-css">
            <option value="cabernet sauvignon">Cabernet Sauvignon</option>
            <option value="merlot">Merlot</option>
            <option value="pinot noir">Pinot Noir</option>
            <option value="bordeaux">Bordeaux</option>
            <option value="syrah">Syrah</option>
            <option value="malbec">Malbec</option>
            <option value="zinfandel">Zinfandel</option>
          </select>
        </div>
        <div>
          <label for="whiteWine" class="form-labels">WHITE</label>
          <select v-model="wine" name="whiteWine" id="whiteWine" class="select-css">
            <option value="pinot grigio">Pinot Grigio</option>
            <option value="chardonnay">Chardonnay</option>
            <option value="sauvignon blanc">Sauvignon blanc</option>
            <option value="pinot gris">Pinot Gris</option>
          </select>
        </div>
        <div>
          <label for="sparklingWine" class="form-labels">SPARKLING</label>
          <select v-model="wine" name="sparklingWine" id="sparklingWine" class="select-css">
            <option value="champagne">Champagne</option>
            <option value="cava">Cava</option>
            <option value="prosecco">Prosecco</option>
            <option value="sparkling wine">Sparkling Wine</option>
          </select>
        </div>
      </div>

      <div class="flex-container3 margin-bottom">
        <div>
          <label for="max-price" class="form-labels">
            MAX PRICE
            <strong class="fiveHundred">$</strong>
          </label>
          <input id="max-price" name="max-price" type="text" v-model="maxPrice" />
        </div>
        <button @click="googleClick" type="submit" class="form-labels">
          <span class="search-icon">
            <font-awesome-icon icon="search" />
          </span>
          <span class="searchWord">SEARCH</span>
        </button>
      </div>
    </form>

    <!-- <ul v-if="collection.length > 0">
        <li v-for="wine of collection" :key="wine.id">
          <a :href="wine.link" >{{wine.title}}</a>
       </li>
    </ul>-->

    <!-- font awesome spinner -->
    <font-awesome-icon v-show="spin" class="fa-spin spinner" icon="circle-notch" />
    <div v-if="results && results.length > 0" class="rule"></div>

    <!-- container for formatted api response -->
    <main class="wines-container">
      <!-- v-if conditional to display ul contents only if api response is valid and is > than 0 items -->
      <ul v-if="results && results.length > 0">
        <div class="container">
          <p class="filter-text">FILTER</p>
          <button class="filter-btn" @click="high">$ high to low</button>
          <button class="filter-btn" @click="low">$ low to high</button>
          <button class="filter-btn" @click="highestRatings">Highest Rated</button>
          <button class="filter-btn" @click="mostRatings">Rating Count</button>
        </div>

        <!-- v-for loops through the results array and injects the oject of each index into the DOM-->
        <li v-for="item of results" class="wine-container container" :key="item.id">
          <div class="flex-container">
            <div class="twentyFive">
              <img class="img" :src="item.imageUrl" :alt="item.title" />
            </div>
            <div class="seventyFive">
              <h2>
                <strong>{{item.title}}</strong>
              </h2>
              <span class="price flex">
                ${{item.price}} |
                <a class="purchase" target="_blank" :href="item.link">PURCHASE</a> |
                <button @click="$store.wine_collection.addToCollection(item)" class="collection_btn">Add to collection +</button>
              </span>
              <span class="rating">
                Rating
                <span class="inside-rating">{{ Math.floor(item.averageRating * 100) }}%</span>
              </span>
              <span class="ratings">
                Ratings
                <strong>x {{ Math.floor(item.ratingCount) }}</strong>
              </span>

              <p>{{item.description}}</p>
            </div>
          </div>
        </li>
      </ul>

      <!-- If the API doesn't return result from a properly filled out form -->
      <div v-else-if="results && results.length==0" class="no-results">
        <h2>No Wines Found</h2>
        <p>Please adjust your search</p>
      </div>

      <!-- If the API can't return data because the form was filled out improperly -->
      <ul v-if="errors && errors.length > 0" class="errors">
        <li v-for="error of errors" :key="error">{{error.message}}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home", //router
  data() {
    return {
      results: null,
      errors: [],
      wine: "", //v-model in form above populates this value with user input on submit
      maxPrice: "", //v-model connects this value to the user input for their desired price point
      spin: false, //sets the spinner to visibility hidden initially
    };
  },
  methods: {
    findWine: function() {
      (this.spin = true), //shows spinner during API request
        axios
          .get("https://api.spoonacular.com/food/wine/recommendation", {
            params: {
              wine: this.wine, //dynamically adds the user's choice to the API request
              number: 18,
              minRating: 0.8,
              maxPrice: this.maxPrice, //dynamically adds the users choice to the API request
              apiKey: "2c010ee91b164e24a2c25a653e110615" //apply for a unique API key at spoonacular.com
            }
          })
          .then(response => {
            //API response
            this.results = this.processData(response.data.recommendedWines);
            this.spin = false; //turns off visibility of spinner when response has loaded
          })
          .catch(error => {
            (this.spin = false), this.errors.push(error);
          });
    },
    // google analytics click event goal
    googleClick() {
      this.$ga.event({
        eventCategory: "mainApp",
        eventAction: "click",
        eventLabel: "wine_click",
        eventValue: 1
      });
    },
    // code for filters
    high() {
      return this.results.sort(function(a, b) {
        return b.price - a.price;
      });
    },
    low() {
      return this.results.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    highestRatings() {
      return this.results.sort(function(a, b) {
        return b.averageRating - a.averageRating;
      });
    },
    mostRatings() {
      return this.results.sort(function(a, b) {
        return b.ratingCount - a.ratingCount;
      });
    },

    //This function takes each index in the results array and changes the results.price from a string to a number so that filter methods can compare them properly.
    processData: function(dataArr) {
      for (let data in dataArr) {
        dataArr[data].price = parseFloat(dataArr[data].price.substring(1));
      }
      return dataArr;
    }
  }
};
</script>


<style scoped>
/* styling for this specific view */

.flex {
  display: flex;
  align-items: center;
}

.collection_btn {
  border: none;
  /* background-color:#94154b; */
  color: black;
  /* padding:10px; */
  height: 0em;
  margin-left: 0em;
  font-family: "Open Sans", sans-serif;
  font-size: 0.54em;
  padding: 0 10px 0 10px;
  font-weight: 600;
}

.collection_btn:hover {
  color: #94154b;
}

a.purchase {
  font-size: 0.7em;
  color: #94154b;
  text-decoration: none;
}
a.purchase:hover {
  color: black;
}

.margin-bottom {
  margin-bottom: 80px;
}

.wines-container {
  background-color: #f3f3f3;
  padding: 0px 30px 0px 30px;
}

.wine-container {
  background-color: white;
  padding: 20px 40px 20px 0px;
  margin-top: 15px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 5px lightgrey;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
  padding-top: 15px;
  padding-bottom: 1px;
}

.img {
  display: block;
  max-width: 100%;
  max-height: 17em;
  margin: 0 auto;
}

.rule {
  height: 1.15em;
  background-color: #94154b;
}

p {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 1.25em;
  line-height: 1.5em;
}

.rating {
  border: 3.5px #94154b solid;
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-size: 1.15em;
  font-weight: 700;
  color: #94154b;
  padding: 5px 0px 5px 5px;
  margin-top: 5px;
}

.inside-rating {
  background-color: #94154b;
  padding: 8px 4.5px 8px 8px;
  color: white;
  margin: -1px;
}

.ratings {
  font-family: "Open Sans", sans-serif;
  color: #94154b;
  display: block;
  margin-top: 6px;
  margin-bottom: 17px;
  font-size: 0.9em;
}

.price {
  font-family: "Abhaya Libre", serif;
  font-weight: 400;
  font-size: 2em;
  display: block;
}

.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.flex-container3 {
  display: flex;
  flex-wrap: nowrap;
}

.flex-container > div,
.flex-container3 > div {
  margin: 15px;
}

.twentyFive {
  width: calc(25% - 10px);
}

.seventyFive {
  width: calc(75% - 10px);
}

h2 {
  font-family: "Abhaya Libre", serif;
  font-size: 3em;
  font-weight: 900;
}

/* form */

.select-css {
  display: block;
  font-size: 2.15em;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: #94154b;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0em;
  background-color: transparent;
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat, repeat;
  background-size: 0.65em auto, 100%;
  background-position: right 0em top 50%, 0 0;
  margin: 0;
  border: none;
  border-radius: 0;
  border-bottom: 4px #94154b solid;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
.select-css::-ms-expand {
  color: #94154b;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #94154b;
  outline: none;
}
.select-css option {
  font-weight: normal;
}

.form-labels {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  color: #94154b;
  font-size: 3.85em;
}

form {
  padding: 30px;
}

input[type="text"] {
  border: none;
  border-bottom: 4px #94154b solid;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: #94154b;
  font-size: 3.5em;
  width: 1.75em;
}

.fiveHundred {
  font-weight: 500;
}

button {
  background-color: transparent;
  border: 4px #94154b solid;
  height: 1.7em;
  margin-left: 1.5em;
  cursor: pointer;
}

.search {
  display: inline;
  max-height: 40px;
}
.searchWord {
  display: inline;
}

.search-icon {
  color: white;
  background-color: #94154b;
  padding: 10px 17px 10px 17px;
  margin: -2px;
}

.searchWord {
  padding: 0 12px 0 10px;
}

.ab-test {
  text-align: center;
  font-weight: 100;
  font-size: 2em;
  padding: 80px 0px 90px 0;
  color: #94154b;
  font-family: "Abhaya Libre", serif;
  max-width: 20em;
  display: block;
  margin: 0 auto;
}

.no-results {
  color: red;
}

/* form */

.filter-btn {
  background-color: #dedada;
  border-radius: 15px;
  border: none;
  padding: 10px;
  height: auto;
  margin-left: 0px;
  margin-right: 15px;
  font-weight: 400;
  color: #6a6a6a;
  font-size: 0.9em;
}

.filter-text {
  display: inline-block;
  margin-right: 15px;
}

.spinner {
  display: block;
  margin: 0 auto;
  font-size: 7em;
  color: #94154b;
  margin-top: -112px;
  padding: 30px;
}

/* responsive styles */

@media screen and (max-width: 1100px) {
  .flex-container {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  .flex-container3 {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  button {
    margin-top: 10px;
  }

  .wine-container {
    padding: 20px 0px 20px 0px;
  }

  .img {
    display: block;
    max-width: 100%;
    max-height: 50em;
    margin: 0 auto;
  }

  .twentyFive {
    width: calc(100% - 10px);
  }
  .inside-rating {
    background-color: #94154b;
    padding: 6px;
    color: white;
  }
  .filter-text {
    display: block;
  }
}

@media screen and (max-width: 650px) {
  .spinner {
    display: block;
    margin: 0 auto;
    font-size: 6em;
    color: #94154b;
    margin-top: -96px;
    padding: 20px;
  }

  .filter-btn {
    font-size: 0.75em;
  }

  .select-css {
    display: block;
    font-size: 1.7em;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.25em;
  }

  .price {
    font-size: 1.75em;
  }
  .seventyFive {
    width: calc(90%);
  }
  .wines-container.flex-container {
    text-align: left;
  }
  .flex-container {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 400px) {
  .filter-btn {
    font-size: 0.6em;
    margin-right: 5px;
  }
  p {
    font-size: 1em;
  }
  .flex-container {
    margin-bottom: 0px;
  }
  .form-labels {
    font-size: 2.75em;
  }

  .search-icon {
    padding: 7px;
  }

  .select-css {
    display: block;
    font-size: 1.4em;
  }
}
</style>


