# Wine Time

This wine recommendation app was built with [Vue.js](https://vuejs.org/) for the final project of spring quarter 2020 in the [WATS](https://www.seattleu.edu/ncs/web-development/") program at Seattle University. The web app allows for two user inputs – the type of wine and a max-price point. After clicking the search button, the user can filter their search results by price, rating or review count. In the search results each recommended wine includes: an image (if available), a title, a price, a link to purchase, a rating, the amount of ratings and a description. Wine Time is made possible through requests from the [spoonacular API](https://spoonacular.com/food-api). Special thanks to my instructor Andrew Asplund for imparting his expertise, which allowed me to add the filters for the search results. Enjoy!

## Getting started
This is a Vue.js project, to work on this app you'll need to install the vue CLI if it's not already installed on your device. With npm run: 
```npm install -g @vue/cli ```

With the Vue CLI installed, you can navigate to the root folder in the terminal and run:  
```npm install```

This will install the project's dependnecies, which include:
* Font Awesome 
* Axios
* Core-js
* Vue
* Vue Analytics
* Vue Router

This project also includes [Google Fonts](https://fonts.google.com/) which are imported in src/App.vue.

Please use a unique api key which can be generated for you by going to [spoonacular.com](https://spoonacular.com/food-api). The method that includes the api key can be located @ src/views/Home.vue. The name of the method is "findWine."

To run this project on a development server, run:
```npm run serve```

When ready to deploy run:
```npm run build```

*Note: because of the setup of the vue.config.js file, running "build" will add the production ready files to the docs folder.*



Copyright 2020 Drew Donaghy 


