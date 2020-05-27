<template>
  <div class="home">
  <form v-on:submit.prevent="findWords">
      <p>Adjectives that are often used to describe<input type="text" v-model="adjective"><button type="submit">Search</button></p>
    </form>
    <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results" class="item" :key="item">
        <p><strong>{{item.word}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul>


    <div v-else-if="results && results.length==0" class="no-results" >
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

       <ul v-if="errors && errors.length > 0" class="errors">
      <li v-for="error of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'adjective',
  data () {
    return {
      results: null,
      errors: [],
      adjective: ''
    }
  },
  methods: {
  findWords: function(){
    axios.get('https://api.datamuse.com/words', {
      params: {
        rel_jjb: this.adjective
      }
    })
    .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    });
  }
}
}
</script>

