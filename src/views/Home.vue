<template>
  <div id="Home">
    <!-- when form is submitted prevent deafault reload and trigger the findWine mehtod -->

    <transition name="fade" v-if="addedNotice">
      <div class="higher">
        <span class="higherText">Added to collection</span>
      </div>
    </transition>

    <div class="gray">
      <div class="lower flexMain">
        <!-- <form v-on:submit.prevent="findWine" class="container">
        <p class="ab-test">
          Select a wine and your max-price per bottle, then search to see a list
          of recommended wines
        </p>
        <div class="flex-container margin-bottom">
          <div>
            <label for="redWine" class="form-labels">
              RED
              <i class="fas fa-angle-down"></i>
            </label>
            <select
              v-model="wine"
              name="redWine"
              id="redWine"
              class="select-css"
            >
              <option value="cabernet sauvignon">Cabernet Sauvignon</option>
              <option value="merlot">Merlot</option>
              <option value="pinot noir">Pinot Noir</option>
              <option value="syrah">Syrah</option>
              <option value="malbec">Malbec</option>
              <option value="zinfandel">Zinfandel</option>
            </select>
          </div>
          <div>
            <label for="whiteWine" class="form-labels">WHITE</label>
            <select
              v-model="wine"
              name="whiteWine"
              id="whiteWine"
              class="select-css"
            >
              <option value="pinot grigio">Pinot Grigio</option>
              <option value="chardonnay">Chardonnay</option>
              <option value="sauvignon blanc">Sauvignon blanc</option>
              <option value="pinot gris">Pinot Gris</option>
            </select>
          </div>
          <div>
            <label for="sparklingWine" class="form-labels">SPARKLING</label>
            <select
              v-model="wine"
              name="sparklingWine"
              id="sparklingWine"
              class="select-css"
            >
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
            <input
              autocomplete="off"
              id="max-price"
              name="max-price"
              type="text"
              v-model="maxPrice"
            />
          </div>
          <button type="submit" class="form-labels searchWord searchButton">
            <font-awesome-icon class="search-icon" icon="search" />
            SEARCH
          </button>
        </div>
      </form> -->

        <section class="filter">
          <h3 class="filterMainTitle">Filters</h3>
          <Accordion
            class="accMargin"
            ref="red"
            v-on:checkedData="onChildClick"
            v-bind:wineNames="reds"
          ></Accordion>
          <Accordion
            class="accMargin"
            ref="white"
            v-on:checkedData="onChildClick"
            v-bind:wineNames="white"
          ></Accordion>
          <Accordion
            class="accMargin"
            ref="sparkling"
            v-on:checkedData="onChildClick"
            v-bind:wineNames="sparkling"
          ></Accordion>

          <div class="control">
            <h4 class="priceTitle">${{maxPrice}}</h4>
            <input type="range" min="0" max="300" v-model="maxPrice" />
          </div>
        </section>

        <!-- container for formatted api response -->
        <main class="wines-container">
          <font-awesome-icon
            v-show="spin"
            class="fa-spin spinner"
            icon="circle-notch"
          />
          <!-- v-if conditional to display ul contents only if api response is valid and is > than 0 items -->
          <ul v-if="results && results.length && !spin > 0">
            <!-- <div class="container">
            <p class="filter-text">FILTER</p>
            <button
              :class="{ filterBtnPressed: filter1 }"
              class="filter-btn"
              @click="high"
              @keyup.tab="high"
            >
              $ high to low
            </button>
            <button
              :class="{ filterBtnPressed: filter2 }"
              class="filter-btn"
              @click="low"
              @keyup.tab="low"
            >
              $ low to high
            </button>
            <button
              :class="{ filterBtnPressed: filter3 }"
              class="filter-btn"
              @click="highestRatings"
              @keyup.tab="highestRatings"
            >
              Highest Rated
            </button>
            <button
              :class="{ filterBtnPressed: filter4 }"
              class="filter-btn"
              @click="mostRatings"
              @keyup.tab="mostRatings"
            >
              Rating Count
            </button>
          </div> -->

            <!-- v-for loops through the results array and injects the oject of each index into the DOM-->
            <li
              v-for="item of results"
              class="wine-container container"
              :key="item.id"
            >
              <div class="flex-container">
                <div class="twentyFive">
                  <img class="img" :src="item.imageUrl" :alt="item.title" />
                </div>
                <div class="seventyFive">
                  <h2>
                    {{ item.title }}
                  </h2>
                  <span class="price flex">
                    ${{ item.price }} |
                    <a class="purchase" target="_blank" :href="item.link"
                      >PURCHASE</a
                    >
                    |
                    <div @click="showAddNotice" class="inline">
                      <span
                        @click="$emit('saveWine', item)"
                        class="collection_btn"
                        >Add to collection +</span
                      >
                    </div>
                  </span>
                  <span class="rating">
                    Rating
                    <span class="inside-rating"
                      >{{ Math.floor(item.averageRating * 100) }}%</span
                    >
                  </span>
                  <span class="ratings">
                    Ratings
                    <strong>x {{ Math.floor(item.ratingCount) }}</strong>
                  </span>

                  <p>{{ item.description }}</p>
                </div>
              </div>
            </li>
          </ul>

          <!-- If the API doesn't return result from a properly filled out form -->
          <div v-else-if="results && results.length == 0" class="no-results">
            <h2>No Wines Found</h2>
            <p>Please adjust your search</p>
          </div>

          <!-- If the API can't return data because the form was filled out improperly -->
          <ul v-if="errors && errors.length > 0" class="errors">
            <li v-for="error of errors" :key="error">{{ error.message }}</li>
          </ul>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion.vue";

export default {
  name: "Home", //router
  props: ["results", "spin", "favorites", "errors"],
  components: {
    Accordion,
  },
  data() {
    return {
      addedNotice: false,
      wine: "",
      maxPrice: 150,
      currentList: null,
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      spinning: true,
      reds: {
        wineTitle: "Red",
        wineList: [
          "Merlot",
          "Cabernet Sauvignon",
          "Syrah",
          "Pinot Noir",
          "Malbec",
          "Zinfandel",
        ],
      },
      white: {
        wineTitle: "White",
        wineList: ["Pinot Grigio", "Chardonnay", "Sauvignon blanc"],
      },
      sparkling: {
        wineTitle: "Sparkling",
        wineList: ["Champagne", "Cava", "Prosecco", "Sparkling Wine"],
      },
    };
  },
  methods: {
    findWine: function () {
      this.$emit("apiCall", {
        maxPrice: this.maxPrice,
        wine: this.wine,
        spinning: this.spinning,
      }),
        (this.filter1 = false);
      this.filter2 = false;
      this.filter3 = false;
      this.filter4 = false;
      //shows spinner during API request
    },
    resetForm: function (event) {
      console.log(event.target);
    },
    showAddNotice: function () {
      this.addedNotice = true;
      setTimeout(() => (this.addedNotice = false), 500);
    },
    // google analytics click event goal
    // code for filters
    high() {
      this.filter1 = true;
      this.filter2 = false;
      this.filter3 = false;
      this.filter4 = false;
      return this.results.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    onChildClick(value) {
      this.wine = value.inputVal;
      this.currentList = value.currentTitle;
      if (this.currentList === "Red") {
        this.$refs.white.clear();
        this.$refs.sparkling.clear();
      } else if (this.currentList === "White") {
        this.$refs.red.clear();
        this.$refs.sparkling.clear();
      } else if (this.currentList === "Sparkling") {
        this.$refs.white.clear();
        this.$refs.red.clear();
      }

      this.$emit("apiCall", {
        maxPrice: this.maxPrice,
        wine: this.wine,
        spinning: this.spinning,
      });
      //  console.log(this.$refs.red)
    },
    low() {
      this.filter1 = false;
      this.filter2 = true;
      this.filter3 = false;
      this.filter4 = false;
      return this.results.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    highestRatings() {
      this.filter1 = false;
      this.filter2 = false;
      this.filter3 = true;
      this.filter4 = false;
      return this.results.sort(function (a, b) {
        return b.averageRating - a.averageRating;
      });
    },
    mostRatings() {
      this.filter1 = false;
      this.filter2 = false;
      this.filter3 = false;
      this.filter4 = true;
      return this.results.sort(function (a, b) {
        return b.ratingCount - a.ratingCount;
      });
    },

    //This function takes each index in the results array and changes the results.price from a string to a number so that filter methods can compare them properly.
    processData: function (dataArr) {
      for (let data in dataArr) {
        dataArr[data].price = parseFloat(dataArr[data].price.substring(1));
      }
      return dataArr;
    },
  },
};
</script>


<style scoped>
/* styling for this specific view */

input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: lightgray;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--brand);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.6px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: lightgray;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: lightgray;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: black;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: lightgray;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: lightgray;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: lightgray;
}
input[type=range]:focus::-ms-fill-upper {
  background: lightgray;
}

.priceTitle{
  font-family: var(--serif);
  font-size: 1.5em;
  font-weight:200;
}

   
.redBackground {
  background-color: var(--brand);
  height: 100vh;
}

.flex {
  display: flex;
  align-items: center;
}

.flexMain {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
  align-content: space-between;
}

.filterMainTitle {
  font-family: var(--sansSerif);
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 200;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}

.collection_btn {
  border: none;
  /* background-color:#94154b; */
  color: black;
  /* padding:10px; */
  height: 0em;
  margin-left: -0.6em;
  font-family: var(--sansSerif);
  font-size: 0.56em;
  padding: 0 10px 0 10px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
}

.collection_btn:hover {
  color: var(--brand);
}

a.purchase {
  font-size: 0.7em;
  color: var(--brand);
  text-decoration: none;
}
a.purchase:hover {
  color: black;
}

/* .margin-bottom {
  margin-bottom: 80px;
} */

.filter {
  width: 25%;
  margin-top: 10px;
}

.accMargin {
  margin-bottom: 20px;
}

.wines-container {
  width: 75%;
  margin-left: 20px;

  /* padding: 0px 30px 0px 30px; */
}

.wine-container {
  background-color: white;
  padding: 20px 40px 20px 0px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.05);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.gray {
  background-color: #f7f7f7;
}

.lower {
  position: relative;
  z-index: 0;
}

.higher {
  width: 12em;
  height: 2em;
  position: fixed;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-family: var(--serif);
  font-size: 2em;
}

.higherText {
  background: var(--brand);
  box-shadow: 0px 0px 10px rgb(172, 172, 172);
  padding: 5px 15px 5px 15px;
  border-radius: 10px;
  color: white;
}

.rule {
  height: 1.15em;
  background-color: var(--brand);
}

p {
  font-family: var(--sansSerif);
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
}

.rating {
  border: 3.5px var(--brand) solid;
  display: inline-block;
  font-family: var(--sansSerif);
  font-size: 1.15em;
  font-weight: 700;
  color: var(--brand);
  padding: 5px 0px 5px 5px;
  margin-top: 5px;
}

.inline {
  display: inline-block;
}

.inside-rating {
  background-color: var(--brand);
  padding: 8px 4.5px 8px 8px;
  color: white;
  margin: -1px;
}

.ratings {
  font-family: var(--sansSerif);
  color: var(--brand);
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
  font-size: 2.4em;
  font-weight: 900;
}

/* form */

.select-css {
  cursor: pointer;
  display: block;
  font-size: 2.35em;
  font-family: var(--narrowMedium);
  font-weight: 600;
  color: var(--brand);
  line-height: 1.3;
  padding: 0.6em 1.4em 0.2em 0em;
  background-color: transparent;
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat, repeat;
  background-size: 0.65em auto, 100%;
  background-position: right 0em top 50%, 0 0;
  margin: 0;
  border: none;
  border-radius: 0;
  border-bottom: 4px var(--brand) solid;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  margin-bottom: 1em;
}
.select-css::-ms-expand {
  color: var(--brand);
}
.select-css:hover {
  border-color: lightgray;
}
.select-css:focus {
  border-color: lightgray;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: var(--brand);
  outline: none;
}
.select-css option {
  font-weight: normal;
}

.form-labels {
  font-family: var(--narrow);
  font-weight: 100;
  color: var(--brand);
  font-size: 3.7em;
}

form {
  padding: 30px;
}

input[type="text"] {
  border: none;
  border-bottom: 4px var(--brand) solid;
  /* text-decoration: underline; */
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: var(--narrowMedium);
  font-weight: 500;
  color: var(--brand);
  font-size: 3.75em;
  line-height: 1.05em;
  width: 1.75em;
  /* padding-top:10px; */
  /* margin-bottom:1em; */
}

.fiveHundred {
  font-weight: 500;
}

.searchButton {
  background-color: transparent;
  border: 4px var(--brand) solid;
  height: 1.7em;
  cursor: pointer;
  padding-left: 0.3em;
  padding-right: 0.3em;
  margin-top: -9px;
  margin-left: 0.5em;
}

.searchButton:hover {
  color: white;
  background-color: var(--brand);
  transition: 0.3s;
}

.search-icon {
  padding-right: 0.1em;
}

.ab-test {
  text-align: center;
  font-weight: 100;
  font-size: 2em;
  padding: 120px 0px 90px 0;
  color: var(--brand);
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
  border: none;
  padding: 10px;
  height: auto;
  margin-left: 0px;
  margin-right: 15px;
  font-weight: 400;
  color: #6a6a6a;
  font-size: 0.9em;
  cursor: pointer;
  margin-bottom: 15px;
  border: 2px solid var(--brand);
}

.filter-btn:focus {
  outline: none;
  border: 2px solid var(--brand);
  transition: 0.3s;
}

.filter-text {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 10px;
}

.filter-btn:hover,
.filter-btn:focus {
  background: var(--brand);
  color: white;
  transition: 0.3s;
}

.filterBtnPressed {
  background: var(--brand);
  color: white;
}

.spinner {
  display: block;
  margin: 0 auto;
  font-size: 7em;
  color: var(--brand);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* responsive styles */

@media screen and (max-width: 1600px) {
  .redBackground {
    height: auto;
  }
}

@media screen and (max-width: 1200px) {
  .form-labels {
    font-size: 3em;
  }
  .select-css {
    font-size: 2em;
  }
}

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
    margin-top: -10px;
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
    background-color: var(--brand);
    padding: 6px;
    color: white;
  }
  .filter-text {
    display: block;
  }
}

@media screen and (max-width: 879px) {
  .searchButton {
    margin-left: 0em;
    display: block;
    height: 2em;
    width: 60%;
    margin-top: 1em;
  }
  .form-labels {
    font-size: 2.5em;
  }

  input[type="text"] {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 650px) {
  .higher {
    font-size: 1.25em;
  }

  .spinner {
    display: block;
    margin: 0 auto;
    font-size: 6em;
    color: white;
    margin-top: -96px;
    padding: 20px;
  }

  p {
    font-size: 1em;
    line-height: 1.5em;
  }

  .filter-btn {
    font-size: 0.75em;
  }

  .select-css {
    display: block;
    font-size: 1.7em;
    margin: 0 auto;
    margin-bottom: 1.2em;
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
  .searchButton {
    width: 80%;
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
  .searchButton {
    width: 100%;
  }
}
</style>


