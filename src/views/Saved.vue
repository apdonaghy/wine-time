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
  color:#94154b; 
}



ol{
  color:black;
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
  color:black;
  text-decoration: underline;
   
}

a:hover{
  color: #94154b;
}

li{
    padding-bottom:25px;
    font-weight:100;
}

h2{
  color:#94154b;
  font-family: "Abhaya Libre", serif;
  font-size:2em;
  font-weight:400;
  border-bottom:5px solid #94154b;
  margin-bottom:60px;
}

ol:last-child{
  padding-bottom:75px;
}


@media screen and (max-width: 1372px) {

.wine-list{
  padding-left:40px;
  padding-right:40px;
 
 }

 ol{
  font-size:2.5em;
}

}

@media screen and (max-width: 900px) {
   ol{
  font-size:2em;
}
}

@media screen and (max-width: 600px) {
   ol{
  font-size:1.5em;
   padding-left:20px;
}

.exit{
  padding-top: 6px;
  cursor: pointer;
}
}

</style>