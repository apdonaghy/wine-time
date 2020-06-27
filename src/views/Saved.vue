<template>
  <div id="Saved">
    <ul v-if="$store.wine_collection.collection.length > 0">
      <li v-for="(wine, index) of $store.wine_collection.collection" :key="index">
        <a :href="wine.link">{{wine.title}}</a>
        <button @click="$store.wine_collection.removeItem(wine)" class="collection_btn">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }

};
</script>