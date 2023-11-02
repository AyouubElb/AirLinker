<template>
  <div class="images"></div>
  <div class="SearchControl">
    <!-- <h1>Discover lots of low-cost flights in just one easy search.</h1> -->
    <div class="origin search-inputs" id="origin">
      <p class="search-text">From</p>
    </div>
    <div class="destination search-inputs mx-1">
      <p>To</p>
    </div>
    <div class="depart search-inputs" id="depart"></div>
    <div class="return search-inputs mx-1"></div>
    <div class="cabin-class search-inputs"></div>
    <button class="btn btn-primary">Search</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.images {
  background-image: url("../assets/panel1.png");
  background-size: cover;
  height: 345px;
}

.SearchControl {
  background-color: #05203c;
  color: white;
  padding: 40px 25px;
  display: flex;
  justify-content: center;
}

.search-inputs {
  display: flex;
  align-items: center;
  background-color: white;
  width: 10rem;
  max-width: 13rem;
  height: 72px;
  padding: 0px 16px;
}

.search-text {
  color: #545860;
  text-align: start;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.origin {
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.cabin-class {
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.SearchControl button {
  margin-left: 12px;
}
</style>
