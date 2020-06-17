<template>
  <div id="Saved">
    <ul v-if="collection.length > 0">
      <li v-for="(wine, index) of collection" :key="index">
        <a :href="wine.link">{{wine.title}}</a>
        <button @click="removeItem(wine)" class="collection_btn">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    if (this.$ls.get("wine-collection")) {
      this.collection = this.$ls.get("wine-collection");
    } else {
      this.$ls.set("wine-collection", this.collection);
    }
  },
  methods: {
    removeItem(wine) {
      this.collection.splice(this.collection.indexOf(wine), 1);
      this.$ls.set("wine-collection", this.collection);
    }
  }
};
</script>