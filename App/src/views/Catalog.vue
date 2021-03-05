<template>
  <div class="catalog">
    <a href="#" v-if="scrollHeight" class="up-btn"><span>Up</span></a>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "catalog",
  components: {
    ProductList,
  },
  data() {
    return {
      scrollHeight: false,
    };
  },
  methods: {
    onScroll() {
      if (window.scrollY >= 900) {
        this.scrollHeight = true;
      } else {
        this.scrollHeight = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
.catalog {
  position: relative;
}
.up-btn {
  position: fixed;
  z-index: 10;
  min-width: 25px;
  right: 10vw;
  bottom: 10vh;
  font-size: 18px;
  background: $pink;
  padding: 5px;
  transition: all 0.3s;
  text-decoration: none;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: -11px;
    left: 4px;
    width: 25px;
    height: 25px;
    background: $pink;
    z-index: -1;
    transform: rotate(45deg);
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>