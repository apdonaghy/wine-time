<template>

  <div id="saved" class="saved">
    <div class="container wine-list">
    <h2>Wine Collection</h2>
    <span v-if="favorites.length === 0" class="wineCollectionNote">Use the <strong>add to collection</strong> button next to each wine to build a list of your favorite wines.</span>
    <ol v-if="favorites.length > 0">
      <div  v-for="(wine, index) of favorites" :key="index" class="space">
      <li>
           
        <a :href="wine.link" target="_blank">{{wine.title}}</a> 

      </li>
      <font-awesome-icon class="exit" @click="$emit('removeWine', wine)" icon="times" />
      </div>
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

.space{
  margin-top:30px;
  display:flex;
  align-content: space-between;
  border-bottom:2px solid transparent;
}

.exit{

  cursor: pointer;
    margin-left: auto;
    font-size:1em;
    padding-top:10px;
}

.exit:hover{
  color:var(--brand); 
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

   
}

a:hover{
  color: var(--brand);
}

li{
  
    font-weight:100;
}

h2{
  color:var(--brand);
  font-family: "Abhaya Libre", serif;
  font-size:2rem;
  font-weight:400;
  border-bottom:5px solid var(--brand);
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

.space:hover{
  border-bottom:2px solid var(--brand);
}


</style>