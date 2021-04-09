<template>
  <div>
    <form :ref="wineNames.wineTitle">
      <div class="container">
        <div @click="toggle" class="flexSection">
        <h3 class="formTitles">{{ wineNames.wineTitle }}</h3>
        <img class="toggle arrow2" ref="arrow" src="../assets/arrow2.svg" />
        </div>
        <div
          class="open"
          v-bind:style="{ maxHeight: computedHeight }"
          ref="open"
        >
          <p v-for="(wine, index) in wineNames.wineList" :key="index">
            <input
              type="radio"
              v-model="checked.inputVal"
              :id="wine"
              :value="wine"
              name="radio-group"
              @click="initiate"
            />
            <label :for="wine">{{ wine }}</label>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      active: false,
      maxHeight: "0px",
      checked: {
        inputVal: null,
        currentTitle: this.wineNames.wineTitle
      },
    };
  },
  props: ["wineNames"],
  computed: {
    computedHeight: function () {
      return this.maxHeight;
    }
  },
  methods: {
    toggle() {
      if (this.active === false) {
        this.maxHeight = this.$refs.open.scrollHeight + "px";
        this.$refs.arrow.style.transform = 'rotate(180deg)'
        this.active = true;
      } else {
        this.maxHeight = "0px";
        this.active = false;
        this.$refs.arrow.style.transform = 'rotate(0deg)'
      }
    },
    clear(){
      this.$refs[this.wineNames.wineTitle].reset()
    },
    initiate() {
      setTimeout(() => this.$emit("checkedData", this.checked), 10);
    },
  },
};
</script>

<style scoped>

.arrow2{
  width:1em;
  transition:.3s;
 
}

.flexSection{
  display:flex;
    padding-bottom:20px;
    cursor:pointer;
}

.formTitles{
  font-family: var(--serif);
  margin-right:5px;

  color:var(--brand);
  font-size:1.25em;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
 
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  font-family:var(--sansSerif);
  margin-bottom:10px;
}

label:hover {
  color:var(--brand);
  text-decoration:underline;
}

[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: var(--brand);
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
   
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.toggle {
  cursor: pointer;
}

.open {
  transition: 0.2s;
  overflow: hidden;
}

.container {
  border-bottom: solid 1px rgba(0,0,0,0.1);
}
</style>