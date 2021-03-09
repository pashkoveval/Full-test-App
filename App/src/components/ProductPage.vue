<template>
  <div class="product-page">
    <div class="product-wrapper" v-for="(item, index) in allItems" :key="index">
      <div class="product-body" v-if="item.id === $route.params.id">
        <div class="b">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="5000"
            controls
            fade
            img-width="597"
            img-height="724"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            class="slider"
          >
            <b-carousel-slide
              content-tag="div"
              :img-src="item.img"
            ></b-carousel-slide>
            <b-carousel-slide
              content-tag="div"
              :img-src="item.img"
            ></b-carousel-slide>
            <b-carousel-slide
              content-tag="div"
              :img-src="item.img"
            ></b-carousel-slide>
            <b-carousel-slide
              content-tag="div"
              :img-src="item.img"
            ></b-carousel-slide>
            <b-carousel-slide
              content-tag="div"
              :img-src="item.img"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="three-items">
      <ProductItem
        v-for="(item, index) in threeItems"
        :key="index"
        :PRODUCTS="item"
        :item="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";

export default {
  data() {
    return { slide: 0, sliding: null, allItems: [], threeItems: [] };
  },
  components: { ProductItem },
  methods: {
    ...mapActions(["GET_GOODS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = true;
    },
    getRandomValues(arr, count) {
      var result = [];
      var _tmp = arr.slice();
      for (var i = 0; i < count; i++) {
        var index = Math.ceil(Math.random() * 10) % _tmp.length;
        result.push(_tmp.splice(index, 1)[0]);
      }
      return (this.threeItems = result);
    },
    
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.GET_GOODS_FROM_API().then((respons) => {
      if (respons.data) {
        this.allItems = respons.data;
        this.getRandomValues(this.allItems, 3);
      }
    });
  },
};
</script>

<style lang="scss">
.slider {
  width: 100%;
  background: #f7f7f7;
  img {
    margin: 0 auto;
  }
}
.three-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
