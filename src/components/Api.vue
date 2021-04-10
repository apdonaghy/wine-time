<template>
       <ul v-if="results && results.length && !spin > 0">
            <li
              v-for="item of results"
              class="wine-container container"
              :key="item.id"
            >
              <div class="flex-container">
                <div class="twentyFive">
                  <img class="img" :src="item.imageUrl" :alt="item.title" />
                </div>
                <div class="seventyFive">
                  <h2>
                    {{ item.title }}
                  </h2>
                  <span class="price flex">
                    ${{ item.price }} |
                    <a class="purchase" target="_blank" :href="item.link"
                      >PURCHASE</a
                    >
                    |
                    <div @click="showAddNotice" class="inline">
                      <span
                        @click="$emit('saveWine', item)"
                        class="collection_btn"
                        >Add to collection +</span
                      >
                    </div>
                  </span>
                  <span class="rating">
                    Rating
                    <span class="inside-rating"
                      >{{ Math.floor(item.averageRating * 100) }}%</span
                    >
                  </span>
                  <span class="ratings">
                    Ratings
                    <strong>x {{ Math.floor(item.ratingCount) }}</strong>
                  </span>

                  <p>{{ item.description }}</p>
                </div>
              </div>
            </li>
          </ul>
                    <!-- If the API doesn't return result from a properly filled out form -->

</template>

<script>
export default {
  name: 'Api',
  data () {
    return {

    }
  },
  props: ['ressults']
  
}

</script>