<template>
  <div class="Home">
    <form v-on:submit.prevent="findWine">
      <p>
        <label for="redWine">RED</label>
        <select v-model="wine" name="redWine" id="redWine">
          <option value="cabernet sauvignon">Cabernet Sauvignon</option>
          <option value="merlot">Merlot</option>
          <option value="pinot noir">Pinot Noir</option>
          <option value="bordeaux">Bordeaux</option>
          <option value="syrah">syrah</option>
          <option value="malbec">Malbec</option>
          <option value="zinfandel">Zinfandel</option>
        </select>

        <label for="whiteWine">WHITE</label>
        <select v-model="wine" name="whiteWine" id="whiteWine">
          <option value="pinto grigio">Pinot Grigio</option>
          <option value="chardonnay">Chardonnay</option>
          <option value="sauvignon blanc">Sauvignon blanc</option>
        </select>

        <label for="sparklingWine">SPARKLING</label>
        <select v-model="wine" name="sparklingWine" id="sparklingWine">
          <option value="champagne">Champagne</option>
          <option value="cava">Cava</option>
          <option value="prosecco">Prosecco</option>
          <option value="sparkling wine">Sparkling Wine</option>
        </select>

        <!-- <input type="text" v-model="wine" />  -->
        Max Price
        <input type="text" v-model="maxPrice" />
        <button type="submit">Search</button>
      </p>
    </form>


<main class="wines-container">
    <ul v-if="results && results.length > 0">
      <li v-for="item of results" class="wine-container" :key="item.id">
       <!-- <div v-if="item.description != null && item.ratingCount > 7"> -->
           
           <div class="flex-container">
         
         
            <div class="twentyFive">
              <img class="img" :src="item.imageUrl" :alt="item.title" />
            </div>
            <div class="seventyFive">
              <h2>
            <strong>{{item.title}}</strong>
          </h2>
              <span class="price">{{item.price}}</span>
              <span class="rating">Rating <span class="inside-rating">{{ Math.floor(item.averageRating * 100) }}% </span></span> <span class="ratings">Ratings <strong>x {{ Math.floor(item.ratingCount) }}</strong></span>
             
              <p>{{item.description}}</p>
            </div>
          </div>
          <!-- </div> -->
        </li>
      </ul>


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
</main>

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
            number: 18,
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


.wines-container{
  background-color: #f3f3f3;
  padding:15px 30px 0px 30px;
  min-height:50em;
}

.wine-container{
  background-color: white;
  padding:20px 40px 20px 0px;
  margin-bottom:30px;
  box-shadow: 0px 0px 5px lightgrey;
}

ul {
  list-style-type: none;
  padding-inline-start:0;
  padding-top:15px;
  padding-bottom:1px;
}


.img {
  display: block;
  max-width:100%;
  max-height:17em;
  margin:0 auto;
}

p{
  font-family: 'Open Sans', sans-serif;
  font-weight:100;
  font-size:1.25em;
  line-height:1.5em;
}

.rating{
  border:3.5px #94154b solid;
  display:inline-block;
  font-family: 'Open Sans', sans-serif;
  font-size:1.15em;
  font-weight:700;
  color:#94154b;
  padding:5px 0px 5px 5px;
  
  margin-top:5px;
}


.inside-rating{
  background-color:#94154b;
  padding:5px;
  color:white;
}

.ratings{
  
  font-family: 'Open Sans', sans-serif;
  color:#94154b;
  display:block;
  margin-top:6px;
  margin-bottom:17px;
  font-size:.9em;
}

.price{
   font-family: 'Abhaya Libre', serif;
   font-weight:400;
   font-size:2em;
   display:block;
}

.flex-container {
  display: flex;
  flex-wrap: nowrap;
}


.flex-container > div {
  margin: 15px;
}

.twentyFive {
  width: calc(25% - 10px);
}

.seventyFive {
  width: calc(75% - 10px);
}


h2{
  font-family: 'Abhaya Libre', serif;
  font-size:3em;
  font-weight:900;
}



</style>