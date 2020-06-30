<template>
  <div>
    <Slide right noOverlay @click="openMenu"> 
 <router-link to="/">Home</router-link> 
 <router-link to="/Saved">Wine Collection</router-link> 
 <router-link to="/About">About</router-link>

    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    }
  },
  components: {
    Slide
  }
};
</script>

<style scoped>
.bm-item-list a{
  text-decoration:none;
  color:white;
  cursor: pointer;
  font-family: "Abhaya Libre", serif;
  font-size:1.25em;
}

.bm-item-list a:hover{

  color:rgb(168, 168, 168);
 
}

</style>