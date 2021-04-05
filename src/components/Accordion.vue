<template>
  <div>



<form action="#">

  <div class="container">
  <h1>Red Wine</h1><span class="toggle" @click="toggle">v</span>
  <div  :class="{'open': collapsed}">
  <p>
    <input type="radio" id="apple" name="radio-group" checked>
    <label for="apple">Apple</label>
  </p>
  <p>
    <input type="radio" id="peach" name="radio-group">
    <label for="peach">Peach</label>
  </p>
  <p>
    <input type="radio" id="orange" name="radio-group">
    <label for="orange">Orange</label>
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
       collapsed: true
    };
  },
  methods:{
    /* Open */
//  openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }

toggle(){
  if(this.collapsed === true){
//   redWine.style.maxHeight = redWine.scrollHeight + "px"
  this.collapsed = false  
  } else{
    // redWine.style.maxHeight = "0px"
    this.collapsed = true  
  }
  }
  }
};





</script>

<style scoped>


[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
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
    content: '';
    width: 12px;
    height: 12px;
    background: #F87DA9;
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

.toggle{
  cursor:pointer
}


.open{
     transition:.5s;
     overflow:hidden;
      max-height:0;
}

.container{
  border-bottom:2px solid;
}

</style>