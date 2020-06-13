<template>
<div class="emSize">
<div class="aboutText">
<p >This wine recommendation app was built with <a target="_blank" href ="https://vuejs.org/"> Vue.js</a> for the final project of spring quarter 2020 in the <a target="_blank" href="https://www.seattleu.edu/ncs/web-development/">WATS program</a> at Seattle University. The web app allows for two user inputs – the type of wine and a max-price point. After clicking the search button, the user can filter their search results by price, rating or review count. In the search results each recommended wine includes: an image (if available), a title, a price, a link to purchase, a rating, the amount of ratings and a description. Wine Time is made possible through requests from the <a target="_blank" href="https://spoonacular.com/food-api">spoonacular API</a>. Enjoy!</p>
</div>
</div>
</template>


<style scoped>

.emSize{
  font-size:1em;
}

.aboutText{
   font-family: 'Abhaya Libre', serif;
   text-decoration: none;
   font-size:3em;
   line-height:1.3em;
   color:#94154b;
   padding:10px;
   margin:auto;
   margin-top: 7%;
   max-width:1460px; 
  
}

a{
  color:black;
  
}

@media screen and (max-width: 1550px){
  .emSize{
    font-size:.75em;
  }
  .aboutText{
  max-width:1000px;
 }
}

@media screen and (max-width: 1100px){
  .aboutText{
  max-width:700px;
 }
   .emSize{
    font-size:.65em;
  }
}

@media screen and (max-width: 750px){
  .aboutText{
  max-width:550px;
 
}
  .emSize{
    font-size:.55em;
  }
}

@media screen and (max-width: 450px){
  .aboutText{
  max-width:380px;
  
}
  .emSize{
    font-size:.45em;
  }
}

@media screen and (max-width: 350px){
  .aboutText{
  max-width:290px;
 
}
  .emSize{
    font-size:.35em;
  }
}

</style>
