<template>
  <div class="cart-body">
    <div class="cart-body-block">
      <div class="cart-body-items">
        <CartItem
          v-for="(item, index) in CART"
          :CART="item"
          :key="index"
          :item="item"
          :index="index"
          @deleteFromCart="deleteFromCart(index)"
        />
      </div>
      <div class="empty">
        <h2 v-if="!CART.length" class="empty-title">Cart is empty</h2>
        <button
          v-if="CART.length"
          class="btn btn-clear"
          @click="clearAllProduct"
        >
          Clear Shoping Cart
        </button>
        <router-link class="btn btn-go" to="/catalog"
          >Go to shoping <span v-if="!CART.length">?</span>
        </router-link>
      </div>
    </div>
    <ShippingAdresCart />
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import ShippingAdresCart from "../components/ShippingAdresCart.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart-list",
  data() {
    return {};
  },
  components: {
    CartItem,
    ShippingAdresCart,
  },
  methods: {
    ...mapActions([
      "DELET_FROM_CART",
      "GET_GOODS_FROM_API_CART",
      "CLEAR_CART",
      "GET_GOODS_FROM_API",
    ]),
    deleteFromCart(index) {
      const indexDel = { index: index };
      this.DELET_FROM_CART(indexDel);
    },
    clearAllProduct() {
      const clear = { clear: "true" };
      this.CLEAR_CART(clear);
    },
  },
  mounted() {
    this.GET_GOODS_FROM_API_CART();
    this.GET_GOODS_FROM_API();
  },

  computed: {
    ...mapGetters(["CART", "PRODUCTS"]),
  },
};
</script>

<style lang="scss">
.cart {
  &-body {
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    &-block {
      margin-right: 15px;
      padding-right: 15px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-items {
      width: 100%;
      max-height: 685px;
      overflow-y: scroll;
    }
    @media (max-width: 960px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-block {
        width: 100%;
        padding: 0 15px;
        margin: 0;
      }
    }
    @media (max-width: 560px) {
      padding: 10px;
      &-block {
        width: 100%;
        padding: 0;
        margin: 0;
      }
      &-items {
        overflow: visible;
      }
    }
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 14px;
    color: $pink;
    width: 100%;
    margin-top: 50px;
    .btn {
      text-decoration: none;
      color: #000;
      border: 1px solid #111;
      padding: 5px 10px;
      transition: all 0.3s;
      width: 235px;
      text-align: center;
      &-go {
        &:hover {
          border-color: $pink;
          background: $pink;
          color: #fff;
        }
      }
      &-clear {
        &:hover {
          border-color: red;
          background: red;
          color: #fff;
        }
      }
    }
    @media (max-width: 960px) {
      margin: 20px 0 50px 0;
    }
    @media (max-width: 560px) {
      .btn {
        max-width: 175px;
        font-size: 12px;
        &-clear {
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: 560px) {
    &-body {
      padding: 0 5px;
    }
  }
}
</style>
