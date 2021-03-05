<template>
  <div class="catalog" :class="{ errorClass: errorClass }">
    <h2 class="catalog-error" v-if="noRESPONS">Что-то пошло не так =(</h2>
    <div class="catalog-body">
      <ProductItem
        v-for="(item, index) in filtredProducts"
        :key="index"
        :PRODUCTS="item"
        :item="item"
        @addToCart="addToCart"
      />
    </div>
    <button
      class="more-products"
      @click="spliceArrProducts = !spliceArrProducts"
    >
      Browse All Product
    </button>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "product-list",

  data() {
    return {
      noRESPONS: true,
      errorClass: true,
      filtredProducts: [],
      spliceArrProducts: true,
    };
  },
  components: {
    ProductItem,
  },

  methods: {
    ...mapActions(["GET_GOODS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);      
    },
    serchProsuctByTextInput(value) {
      this.filtredProducts = [...this.PRODUCTS];
      if (value) {
        this.filtredProducts = this.filtredProducts.filter((item) => {
          const regexp = new RegExp(value, "i");
          const match = item.productName.match(regexp);
          return !!match;
        });
      }
    },
    moreProducts() {
      if (this.$router.path !== '/catalog') {
        if (this.spliceArrProducts) {
          this.filtredProducts.splice(6);
        } else {
          this.filtredProducts = [...this.PRODUCTS];
        }
      } else {
        this.spliceArrProducts = false;
      }
    },
  },
  mounted() {
    this.GET_GOODS_FROM_API().then((respons) => {
      if (respons.data) {
        this.noRESPONS = !this.noRESPONS;
        this.errorClass = !this.errorClass;
        this.serchProsuctByTextInput(this.SEARCH_VALUE);
        this.moreProducts();
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS", "SEARCH_VALUE"]),
  },
  watch: {
    SEARCH_VALUE() {
      this.serchProsuctByTextInput(this.SEARCH_VALUE);
    },
    spliceArrProducts() {
      this.moreProducts();
    },
  },
};
</script>

<style lang="scss">
.catalog {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  &-body {
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-wrap: wrap;
    @media (max-width: 1070px) {
      justify-content: center;
    }
  }
  &-error {
    color: red;
    font-size: 60px;
  }
  &.errorClass {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .more-products {
    border: 1px solid $pink;
    width: 212px;
    height: 48px;
    color: $pink;
    margin: 50px 0 90px 0;
    transition: all 0.3s;
    &:hover {
      background: $pink;
      color: #fff;
    }
  }
}
</style>