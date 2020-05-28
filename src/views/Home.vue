<template>
  <div class="Home">
    <form v-on:submit.prevent="findWine">
      <p>
        <label for="redWine">RED</label>
        <select v-model="wine" name="redWine" id="redWine">
          <option value="cabernet sauvignon">Cabernet Sauvignon</option>
          <option value="merlot">merlot</option>
          <option value="pinot noir">pinot noir</option>
          <option value="bordeaux">bordeaux</option>
          <option value="syrah">syrah</option>
          <option value="malbec">malbec</option>
          <option value="zinfandel">zinfandel</option>
        </select>

        <label for="whiteWine">WHITE</label>
        <select v-model="wine" name="whiteWine" id="whiteWine">
          <option value="pinto grigio">pinot grigio</option>
          <option value="chardonnay">chardonnay</option>
          <option value="sauvignon blanc">sauvignon blanc</option>
        </select>

        <label for="sparklingWine">SPARKLING</label>
        <select v-model="wine" name="sparklingWine" id="sparklingWine">
          <option value="champagne">champagne</option>
          <option value="cava">cava</option>
          <option value="prosecco">prosecco</option>
          <option value="sparkling wine">sparkling wine</option>
        </select>

        <!-- <input type="text" v-model="wine" />  -->
        Max Price
        <input type="text" v-model="maxPrice" />
        <button type="submit">Search</button>
      </p>
    </form>

    <div v-if="results && results.length > 0" class="results">
      <ul v-for="item of results" class="item" :key="item.id">
        <li v-if="item.description != null">
           <h2>
            <strong>{{item.title}}</strong>
          </h2>
           <div class="flex-container">
         
         
            <div class="twentyFive">
              <img class="img" :src="item.imageUrl" :alt="item.title" />
            </div>
            <div class="seventyFive">
              <p>{{item.price}}</p>
              <p>{{ Math.floor(item.averageRating * 100) }}%</p>
              <p>{{item.description}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results" class="item" :key="item">
        <div v-if="item.description != '' && item.ratingCount > 8">
          <p>
            <strong>{{item.title}}</strong>
          </p>
          <p>{{item.price}}</p>
          <p>{{ Math.floor(item.averageRating * 100) }}%</p>
          <p>{{item.description}}</p>
        </div>
      </li>
    </ul>-->

    <div v-else-if="results && results.length==0" class="no-results">
      <h2>No Wines Found</h2>
      <p>Please adjust your search</p>
    </div>

    <ul v-if="errors && errors.length > 0" class="errors">
      <li v-for="error of errors" :key="error">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      results: null,
      errors: [],
      wine: "",
      maxPrice: ""
    };
  },
  methods: {
    findWine: function() {
      axios
        .get("https://api.spoonacular.com/food/wine/recommendation", {
          params: {
            wine: this.wine,
            number: 10,
            minRating: 0.8,
            maxPrice: this.maxPrice,
            apiKey: "2c010ee91b164e24a2c25a653e110615"
          }
        })
        .then(response => {
          this.results = response.data.recommendedWines;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<style scoped>
.img {
  display: block;
  max-width:100%;
  max-height:17em;
  margin:0 auto;
}

ul {
  list-style-type: none;
}

.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

.flex-container > div {
  /* background-color: #f1f1f1; */
  
  /* text-align: center;
  line-height: 75px;
  font-size: 30px; */
  margin: 5px;
}

.twentyFive {
  width: calc(25% - 10px);
}

.seventyFive {
  width: calc(75% - 10px);
}
</style>