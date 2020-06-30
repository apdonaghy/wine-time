<template>

  <div id="Saved" class="saved">
    <div class="container wine-list">
    <h2>Wine Collection</h2>
    <ol v-if="$store.wine_collection.collection.length > 0">
      <li v-for="(wine, index) of $store.wine_collection.collection" :key="index">
        <a :href="wine.link" target="_blank">{{wine.title}}</a> <font-awesome-icon class="exit" @click="$store.wine_collection.removeItem(wine)" icon="times" />
      </li>
    </ol>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  }

};
</script>

<style scoped>




.exit{
  padding-top: 12px;
  cursor: pointer;
}

.exit:hover{
  color:black; 
}

.saved{
  background-color:#94154b;
  width:auto;
  height: 100vw;
}

ol{
  color:white;
  font-family: "Abhaya Libre", serif;
  font-size:3em;
  padding-left:40px;
}

.wine-list{
  /* width:80%; */
  margin:0 auto;
  padding-top:8%;
  padding-left:20px;
  padding-right:20px;
 
}

a{
  text-decoration: none;
  color:white;
  text-decoration: underline;
   
}

a:hover{
  color:black;
}

li{
    padding-bottom:25px;
   font-weight:100;
}

h2{
  color:white;
  font-family: "Abhaya Libre", serif;
  font-size:2em;
  font-weight:400;
  border-bottom:5px solid white;
  margin-bottom:60px;
}

ol:last-child{
  padding-bottom:75px;
}

</style>