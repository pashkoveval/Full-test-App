<template>
  <div class="cart-item">
    <router-link
      class="link"
      :to="{
        name: 'Product',
        params: { id: item.id, item: item },
      }"
    >
      <img :src="item.img" alt="img" />
    </router-link>
    <div class="about">
      <span class="title">{{ item.productName }}</span>
      <div class="description">
        <span
          >Price:
          <p>${{ item.price * item.quantity }}</p></span
        >
        <span>Color: {{ item.color }}</span>
        <span>Size: Xl </span>
        <span class="block-quantity"
          >Quantity:
          <input
            class="quantity"
            type="number"
            name=""
            id=""
            v-model="item.quantity"
            @input="quantity"
            min="1"
            max="100"
            step="1"
          />
        </span>
      </div>
    </div>
    <button class="cart-item-delete" @click="deleteFromCart">
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
          fill="#6F6E6E"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cartItem",
  data() {
    return {
      value: 1,
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return Number;
      },
    },
  },
  methods: {
    ...mapActions(["QUANTITY_PLUS"]),
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    quantity() {
      const quantity = {
        value: this.item.quantity,
        index: this.index,
      };
      this.QUANTITY_PLUS(quantity);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  mounted() {},
};
</script>

<style lang="scss">
.cart {
  &-item {
    display: flex;
    align-items: center;
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
    max-width: 653px;
    max-height: 306px;
    position: relative;
    margin-bottom: 40px;
    margin-right: 15px;
    .link {
      max-width: 262px;
      max-height: 306px;
      img {
        max-height: 306px;
        object-fit: cover;
        object-position: center;
      }
    }
    .about {
      padding: 22px 31px;
      flex-direction: column;
      height: inherit;
      .title {
        color: #222222;
        display: block;
        font-size: 24px;
        max-width: 190px;
      }
      .description {
        flex-direction: column;
        margin-top: 42px;
        span {
          display: flex;
          align-items: center;
          justify-content: start;
          grid-gap: 10px;
          font-size: 22px;
          color: #575757;
          p {
            color: $pink;
          }
        }
      }
    }

    .quantity {
      border: 1px solid #ccc;
      width: fit-content;
      padding-left: 8px;
      font-size: 19px;
      color: #575757;
    }

    &-delete {
      position: absolute;
      top: 23px;
      right: 17px;
      background: none;
      padding: 5px;
      cursor: pointer;
      transition: all 0.3s;
      svg path {
        transition: all 0.3s;
      }
      &:hover {
        svg path {
          fill: red;
        }
        transform: scale(0.9);
      }
      &:active {
        transform: scale(0.8);
      }
    }

    @media (max-width: 600px) {
      img {
        max-width: 140px;
      }
      .about {
        padding: 13px 17px;
        flex-direction: column;
        width: 100%;
        .title {
          font-size: 16px;
          max-width: 130px;
        }
        .description {
          margin-top: 25px;
          span {
            font-size: 14px;
            display: flex;
          }
        }
      }
      & > button {
        position: absolute;
        top: 12px;
        right: 0px;
        img {
          width: 30px;
        }
      }
    }
    @media (max-width: 560px) {
      box-shadow: 8px 8px 21px rgba(0, 0, 0, 0.13);
      margin-right: 0;
      .about {
        padding: 13px 0 13px 17px;
      }
      img {
        max-width: 140px;
      }
      .block-quantity {
        display: flex;
        justify-content: space-between;
        .quantity {
          font-size: 16px;
          width: 100%;
        }
      }
      .quantity {
        font-size: 14px;
        margin-right: 15px;
      }
    }
  }
}
</style>
