<template>

  <div id="Saved" class="saved">
    <div class="container wine-list">
    <h2>Wine Collection</h2>
    <span v-if="favorites.length === 0" class="wineCollectionNote">Use the <strong>add to collection</strong> button next to each wine to build a list of your favorite wines.</span>
    <ol v-if="favorites.length > 0">
      <li v-for="(wine, index) of favorites" :key="index">
        <a :href="wine.link" target="_blank">{{wine.title}}</a> <font-awesome-icon class="exit" @click="$emit('removeWine', wine)" icon="times" />
      </li>
    </ol>
    </div>
  </div>

</template>

<script>
export default {
  props:['favorites'],
  data() {
    return {
      close: false
    };
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
  margin:0 auto;
  max-width: 1460px;
  padding-top:12%;
 
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
  font-size:2rem;
  font-weight:400;
  border-bottom:5px solid #94154b;
  margin-bottom:6%;
}

ol:last-child{
  padding-bottom:75px;
}



@media screen and (max-width: 1550px) {

  .wine-list {
    max-width: 1000px;
  }
}

@media screen and (max-width: 1100px) {
  .wine-list {
    max-width: 800px;
    padding-left:20px;
    padding-right:20px;
  }
}

@media screen and (max-width: 750px) {
   .wine-list {
     padding-top:22%;
    max-width: 550px;
  }
  }






@media screen and (max-width: 1372px) {


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

/* tooltip */

[data-tooltip],
.tooltip {
  position: relative;
  cursor: pointer;
  text-align: center;
}

.wineCollectionNote{
 font-family: "Abhaya Libre", serif;
  color:gray;
  font-size: 1.5em;
}

</style>